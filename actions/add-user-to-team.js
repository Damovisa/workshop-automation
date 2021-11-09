const github = require('@actions/github');
const core = require('@actions/core');
const fs = require("fs");

const issue_number = 1
const org_name = 'damovisa-demo'
const repo_name = 'haikus-for-codespaces'
const team_name = 'active-attendees'

const octokit = new github.getOctokit(process.env.AUTH_TOKEN);

async function add_user_to_team() {
    try {
        console.log("Adding %s to %s", process.env.USER_TO_ADD, issue_number)
        await octokit.rest.teams.addOrUpdateMembershipForUserInOrg({
            org: org_name,
            team_slug: team_name,
            username: process.env.USER_TO_ADD
        });
    } catch (err) {
        core.setFailed(err.message);
    }
}

async function add_issue_for_user() {
    try {
        console.log("Adding issue for new user")
        fs.readFile('./actions/issue-template.md', (error, data) => {
            if (error) {
                throw error;
            }
            octokit.rest.issues.create({
                owner: org_name,
                repo: repo_name,
                title: 'Session Tasks for ' + process.env.USER_TO_ADD,
                body: data.toString().replace('%%USER%%', process.env.USER_TO_ADD)
            })
        })        
    } catch (err) {
        core.setFailed(err.message);
    }
}

add_user_to_team()
add_issue_for_user()
