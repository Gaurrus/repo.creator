const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

const PEOPLE = ['ValadzkoAliaksei', 'Gaurrus'];

let i = 0;

async function main() {
  while (i <= PEOPLE.length - 1) {
    try {
      await octokit.rest.repos.delete({
        owner: process.env.PROD_ORG,
        repo: PEOPLE[i],
      });
      console.log(`Repository ${PEOPLE[i]} deleted`);
      i++;
    } catch (e) {
      console.log('error', e);
      console.log(`Stopped on ${PEOPLE[i]}`);
      break;
    }
  }

  console.log('deletion finished!');
}

main();
