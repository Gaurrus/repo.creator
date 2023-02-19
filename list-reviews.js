const { Octokit } = require('@octokit/rest');

require('dotenv').config();

const octokit = new Octokit({
  auth: process.env.TOKEN1,
});

const owner = process.env.PROD_ORG;
const repo = 'ephemeralCode';
const pull_number = '1';

async function lisetReviews() {
  try {
    const { data: reviews } = await octokit.rest.pulls.listReviews({
      owner,
      repo,
      pull_number,
    });

    console.log(reviews);
  } catch (e) {
    console.log(e);
  }
}

lisetReviews();
