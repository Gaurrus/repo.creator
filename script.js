const { Octokit } = require("@octokit/rest");

const AUTH = [
  {
    auth: "", // сюда добавить токены
  },
  {
    auth: "",
  },
];

let n = 0;

let state = {};

let octokit = new Octokit(AUTH[n]);
// const main = async () => {
//   await octokit.rest.repos.delete({
//     owner: 'ClevertecTest',
//     repo: 'sprint-1-ValadzkoAliaksei',
//   });
// };
// main();

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 1000);
  });
}

async function main() {
  // const rates = await octokit.rateLimit.get();
  // console.log(JSON.stringify(rates.data));
  while (i <= 2000) {
    await delay();
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
          name: `test_${i}`,
        });
        // await octokit.rest.repos.delete({
        //   owner: 'ClevertecTest',
        //   repo: `test${i}`,
        // });
        console.log(`Repository test_${i} created`);
      } catch (e) {
        state = { [AUTH[n].auth]: e.response.headers["x-ratelimit-reset"] };
        if (n < AUTH.length - 1) {
          n++;
        } else {
          n = 0;
        }
        octokit = new Octokit(AUTH[n]);
        console.log(e);
        console.log("state", state);
      }
      i++;
    }
  }
  console.log("Loop execution finished!)");
}

main();
