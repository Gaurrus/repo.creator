const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});


async function main() {
  for (let i = 134; i <= 150; ++i) {
    try {
      await octokit.rest.repos.delete({
        owner: 'ClevertecTest',
        repo: `test-${i}`,
      });
      console.log(`Repository test-${i} deleted`);
    } catch (e) {
      console.log('error', e);
    }
  }

  console.log('deletion finished!');
}

main();
