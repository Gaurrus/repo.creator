const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN1,
});

// function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('');
//     }, 1000);
//   });
// }

async function main() {
  for (let i = 1; i <= 133; ++i) {
    // await delay();
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
