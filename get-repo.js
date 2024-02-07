const { Octokit } = require('@octokit/rest');
const { default: axios } = require('axios');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

async function getRepo() {
  try {
    const {
      data: { name },
    } = await octokit.rest.repos.get({
      owner: process.env.PROD_ORG,
      repo: 'Gaurrus',
    });

    console.log(name);
  } catch (e) {
    console.log(e);
  }
}

getRepo();
