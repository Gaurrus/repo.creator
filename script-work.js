const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let i = 0;

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

const PEOPLE = ['ValadzkoAliaksei', 'Gaurrus'];

const getTimestamp = (seconds) =>
  new Date(new Date(seconds * 1000) - new Date()).getMinutes();

async function main() {
  while (i <= PEOPLE.length - 1) {
    try {
      await octokit.rest.repos.createUsingTemplate({
        template_owner: process.env.PROD_ORG || 'ClevertecTest',
        template_repo: 'sprint3',
        owner: process.env.PROD_ORG,
        name: PEOPLE[i],
      });

      await octokit.rest.repos.update({
        owner: process.env.PROD_ORG || 'ClevertecTest',
        repo: PEOPLE[i],
        private: true,
      });

      console.log(`Repository ${PEOPLE[i]} created - private`);
      i++;
    } catch (e) {
      console.log(e);
      console.log(`Stopped on ${PEOPLE[i]}`);
      break;
    }
  }
  console.log('Loop execution finished!=)');
}

main();
