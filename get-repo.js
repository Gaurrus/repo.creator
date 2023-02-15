const { Octokit } = require('@octokit/rest');
const { default: axios } = require('axios');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

async function addCall() {
  try {
    const {
      data: { name },
    } = await octokit.rest.repos.get({
      owner: process.env.ORG,
      repo: 'testSprint3-Gaurrus',
    });

    console.log(name);
  } catch (e) {
    console.log(e);
  }
}

addCall();
