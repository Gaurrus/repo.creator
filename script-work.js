const { Octokit } = require('@octokit/rest');

require('dotenv').config();

const AUTH = [
  {
    auth: process.env.TOKEN1,
  },
  {
    auth: process.env.TOKEN2,
  },
];

let n = 0;

let i = 1;

let octokit = new Octokit(AUTH[1]);

const getTimestamp = (seconds) =>
  new Date(new Date(seconds * 1000) - new Date()).getMinutes();

async function main() {
  while (i <= 1) {
    try {
      await octokit.rest.repos.createUsingTemplate({
        template_owner: 'ClevertecFrontendLab',
        template_repo: 'sprint2',
        owner: 'ClevertecFrontendLab',
        name: `sprint2-test-lab`,
      });

      // await octokit.rest.repos.addCollaborator({
      //   owner: 'ClevertecTest',
      //   repo: `test-${i}`,
      //   username: 'GarrusClassroom',
      //   permission: 'push',
      // });

      console.log(`Repository test-${i} created`);
      i++;
    } catch (e) {
      console.log(e);
      break;
    }
  }
  console.log('Loop execution finished!=)');
}

main();
