Hi @%%USER%%, 
Welcome to the Universe 2021 Codespaces Interactive Session!

Below, you'll find a series of tasks we'll be walking through. You're welcome to run through them yourself, or just watch as the presenter does it. Check them off as we go!

After the session, we'll remove your ability to create a Codespace in this organization, but we'll keep you in the team for a week or so so you can view this issue and continue your progress in your own Codespace.

## Today's Steps:

- [ ] :memo: Use `github.dev` to edit the code.

From the Code tab of the repository, either hit `.` or replace the `.com` with `.dev` in the browser URL. Experiment with hitting `.` in different parts of the repo to see the context change!

- [ ] :cloud: Create a Codespace!

Click the green `<> Code` button, switch to the Codespaces tab, and create a new Codespace!
**IMPORTANT**: We strongly recommend you use the small size - we've scaled up for a _lot_ of these to be available much faster during this session!

- [ ] :bug: Debug your code

To debug the code, navigate to the **Run and Debug** pane and click **create a launch.json file**. Choose **Node.js**, then press **F5** to start debugging.

- [ ] :handshake: Forward a port
 
Switch to the Ports pane in the bottom of your Codespace. Change the port to public and share it with a friend!

- [ ] :woman_technologist: Make a code change

In your Codespace, edit the `haikus.json` file to add your own haiku (or something - it's your project!). Debug again to test that it works!

- [ ] :mailbox_with_mail: Submit a pull request

Commit the file and try to push - you'll be taken through the process to submit a pull request. Follow the process and submit a pull request to the repository.

- [ ] :white_check_mark: Use `github.dev` to work with PRs

In a new tab, open a pull request (yours or someone else's) using `github.dev`. You can see how powerful this lightweight tool is even with no server behind the scenes!

- [ ] :customs: Customize your devcontainer

In your Codespace, open the command palette (Ctrl-Shift-P or Command-Shift-P) and find the `Codespaces: Add Development Container Configuration Files` command. Use it to configure your devcontainer specifically for use for a Node.js version 16 project.
Explore the new files - `devcontainer.json` and `Dockerfile`.
Reload your Codespace with the new container by clicking on the **Rebuild Now** prompt, or using the Command Palette and `Codespaces: Rebuild Container` command.
Experiment with adding a VS Code extension, a `postCreateCommand`, or a forwarded port in your `devcontainer.json` file.
You can also experiment with your `Dockerfile`.

- [ ] :lock_with_ink_pen: Create a Codespaces Secret

In GitHub, click on your profile photo, then **Settings**. Navigate to Codespaces, then set a secret for your Codespace.

- [ ] :mag: Explore your other Codespaces settings.

Navigate through your Codespaces settings to see what other defaults you might like to set. If you use VS Code on the desktop, you might like to set that as your default editor rather than the browser-based version.

- [ ] :building_construction: (optional) Set up a dotfiles repository

Use the link in your Codespaces settings to learn how to set up a dotfiles repository. This will carry over to all codespaces you create in the future.

- [ ] :art: Turn on VS Code Settings Sync

Another way to customize your Codespace is to turn on VS Code Settings Sync. Use the command palette to run the `Settings Sync: Turn On` command. Choose the settings you want to persist between VS Code and Codespaces instances.

---

## More information
- Github.dev and the lightweight editor: https://docs.github.com/en/codespaces/the-githubdev-web-based-editor
- Getting started with Codespaces: https://docs.github.com/en/codespaces/overview
- Billing details for Codespaces: https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
- Encrypted Secrets for Codespaces: https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces
- Personalize your Codespace: https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
