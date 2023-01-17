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

let state = {};
let i = 135;

let octokit = new Octokit(AUTH[n]);


async function main() {
  while (i <= 2000) {
    if (
      !state[AUTH[n].auth] ||
      (state[AUTH[n].auth] &&
        state[AUTH[n].auth] < Math.floor(Date.now() / 1000))
    ) {
      try {
        await octokit.rest.repos.createUsingTemplate({
          template_owner: "ClevertecTest",
          template_repo: "sprint1",
          owner: "ClevertecTest",
          name: `test-${i}`,
        });
        
        console.log(`Repository test-${i} created`);
        i++;
      } catch (e) {
        if (e.status === 422) {

          state = { [AUTH[n].auth]: e.response.headers["x-ratelimit-reset"] };
          if (n < AUTH.length - 1) {
            n++;
          } else {
            n = 0;
          }
          octokit = new Octokit(AUTH[n]);
        } else {
          console.log('error', e);
          console.log('error', AUTH[n].auth);
          break;
        }
      }
    }
  }
  console.log("Loop execution finished!)");
}

main()
