const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN2,
});

async function addCall() {
  try {
    await octokit.rest.repos.addCollaborator({
      owner: 'ClevertecTest',
      repo: 'sprint1-ValadzkoAliaksei_1197',
      username: 'dariavorom',
      permission: 'push',
    });

    console.log(`added success`);
  } catch (e) {
    console.log(e);
  }
}

addCall();
