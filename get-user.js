const { Octokit } = require('@octokit/rest');
const { default: axios } = require('axios');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

async function addCall() {
  try {
    const {
      data: { login },
    } = await octokit.rest.users.getByUsername({
      username: 'Gaurrus',
    });

    console.log(login);
  } catch (e) {
    console.log(e);
  }
}

addCall();
