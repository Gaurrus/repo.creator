'use strict';

const { Octokit } = require('@octokit/rest');
const { default: axios } = require('axios');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

async function addCall() {
  try {
    const { data } = await octokit.rest.repos.listForOrg({
      org: 'ClevertecTest',
    });

    const result = data.map(({ name }) => name);

    console.log(result.find((name) => name.includes('tests')));
  } catch (e) {
    console.log(e);
  }
}

addCall();
