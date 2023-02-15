const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

async function addCall() {
  try {
    const data = await octokit.rest.repos.addCollaborator({
      owner: 'ClevertecTest',
      repo: 'testSprint3-Gaurrus',
      username: 'Gaurrus',
      permission: 'push',
    });

    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

addCall();
