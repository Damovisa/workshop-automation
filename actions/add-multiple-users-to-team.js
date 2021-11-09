const github = require('@actions/github');
const core = require('@actions/core');
const fs = require("fs");

const org_name = 'damovisa-demo';
const repo_name = 'haikus-for-codespaces';
const this_repo = 'codespaces-join'
var team_name = process.env.TEAM_NAME;

// We may need to pause for 30 seconds so someone can reset the rate limits
const batch_size_for_pause = 1000;

const octokit = new github.getOctokit(process.env.AUTH_TOKEN);

function dedupe(arr) {
    var newarr = (function(arr){
        var m = {}, newarr = []
        for (var i=0; i<arr.length; i++) {
          var v = arr[i];
          if (!m[v]) {
            newarr.push(v);
            m[v]=true;
          }
        }
        return newarr;
      })(arr);
      return newarr;
}

async function get_user_handles(issueId) {
    return octokit.paginate(octokit.rest.issues.listComments, {
        owner: org_name,
        repo: this_repo,
        issue_number: +issueId
    },
        (response) => response.data.map(ic => ic.user.login)
    );
}

async function add_user_to_team(userName, teamName) {
    try {
        core.info("Adding" + userName + " to " + teamName);
        await octokit.rest.teams.addOrUpdateMembershipForUserInOrg({
            org: org_name,
            team_slug: teamName,
            username: userName
        });
    } catch (err) {
        core.info("Error: " + err.status + " " + err.code);
        core.setFailed(err.message);
    }
}

async function add_issue_for_user(userName) {
    try {
        core.info("Adding issue for " + userName);
        fs.readFile('./actions/issue-template.md', (error, template) => {
            if (error) {
                throw error;
            }
            octokit.rest.issues.create({
                owner: org_name,
                repo: repo_name,
                title: 'Session Tasks for ' + userName,
                body: template.toString().replace('%%USER%%', userName)
            });
        });
    } catch (err) {
        core.info("Error: " + err.status + " " + err.code);
        core.setFailed(err.message);
    }
}

async function add_users(users) {
    var unique = dedupe(users);
    core.info("Adding " + unique.length + " users");
    var count = Math.min(unique.length, +process.env.MAX_MEMBERS);
    // add up to max
    for (let i = 0; i < count; i++) {
        if (i + 1 % batch_size_for_pause == 0) {
            core.warning("*** CHECK RATE LIMIT ***");
            await new Promise(resolve => setTimeout(resolve, 30000));   // pause for 30s
        }
        const user = unique[i];
        core.info(user);
        add_user_to_team(user, team_name);
        add_issue_for_user(user);
    }
}

core.info("Getting handles from issue");
get_user_handles(process.env.ISSUE_ID).then((handles) => add_users(handles));
