const { Octokit } = require('@octokit/rest');

require('dotenv').config();

let octokit = new Octokit({
  auth: process.env.TOKEN2,
});

// function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('');
//     }, 1000);
//   });
// }

async function main() {
  for (let i = 1346; i <= 1495; ++i) {
    // await delay();
    try {
      await octokit.rest.repos.delete({
        owner: 'ClevertecTest',
        repo: `test_${i}`,
      });
      console.log(`Repository test_${i} deleted`);
    } catch (e) {
      console.log('error', e);
    }
  }

  console.log('deletion finished!');
}

main();
