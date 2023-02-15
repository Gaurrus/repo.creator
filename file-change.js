const { Octokit } = require('@octokit/rest');

const AUTH = [
  {
    auth: process.env.TOKEN1,
  },
  {
    auth: process.env.TOKEN2,
  },
  {
    auth: process.env.TOKEN3,
  },
  {
    auth: process.env.TOKEN4,
  },
];

const USERS = ['Gaurrus', 'Ivan6813'];

const PATH_TO_TEST_FILE = 'cypress/e2e';
const SPRINT_NUMBER = 4;
const DELETE_COMMIT_MESSAGE = `delete test sprint ${SPRINT_NUMBER - 1} file`;
const ADD_COMMIT_MESSAGE = `add new test sprint ${SPRINT_NUMBER} file`;
const COMMITTER = { name: 'Monalisa Octocat', email: 'octocat@github.com' };
const FILE =
  'Ly8vIDxyZWZlcmVuY2UgdHlwZXM9ImN5cHJlc3MiIC8+CgpkZXNjcmliZSgnVGVzdCB3aWR0aCAxNDQwcHgnLCAoKSA9PiB7CiAgICBiZWZvcmVFYWNoKCgpID0+IHsKICAgICAgICBjeS52aWV3cG9ydCgxNDQwLCA5MDApOwogICAgICAgIGN5LnZpc2l0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTsKICAgICAgICBjeS5nZXQoImZvcm0iKTsKICAgICAgICBjeS5nZXQoJ2lucHV0W25hbWU9ImlkZW50aWZpZXIiXScpLnR5cGUoImlsaW5rZXZpY2giKS5zaG91bGQoImhhdmUudmFsdWUiLCAiaWxpbmtldmljaCIpOwogICAgICAgIGN5LmdldCgnaW5wdXRbbmFtZT0icGFzc3dvcmQiXScpLnR5cGUoIktieXJ0ZGJ4MzQ3Nzk5Iikuc2hvdWxkKCJoYXZlLnZhbHVlIiwgIktieXJ0ZGJ4MzQ3Nzk5Iik7CiAgICAgICAgY3kuZ2V0KCdbZGF0YS10ZXN0LWlkPXNpZ24taW4tYnV0dG9uXScpLmNsaWNrKCkud2FpdCgxMDAwMCk7CiAgICB9KTsKCiAgICBpdCgndGVzdCBsYXlvdXQgY29udGVudCB2aWV3JywgKCkgPT4gewogICAgICAgIGN5LmdldCgnW2RhdGEtdGVzdC1pZD1idXR0b24tbWVudS12aWV3LWxpc3RdJykuc2hvdWxkKCdiZS5leGlzdCcpLmNsaWNrKCk7CiAgICAgICAgY3kuZ2V0KCdbZGF0YS10ZXN0LWlkPWFwcF0nKS5zY3JlZW5zaG90KCdjb250ZW50LWxpc3QnKTsKICAgICAgICBjeS5nZXQoJ1tkYXRhLXRlc3QtaWQ9YnV0dG9uLW1lbnUtdmlldy13aW5kb3ddJykuc2hvdWxkKCdiZS5leGlzdCcpLmNsaWNrKCk7CiAgICAgICAgY3kuZ2V0KCdbZGF0YS10ZXN0LWlkPWFwcF0nKS5zY3JlZW5zaG90KCdjb250ZW50LXdpbmRvdycpOwogICAgfSk7CgogICAgaXQoJ3Rlc3QgbGF5b3V0IGJvb2stcGFnZScsICgpID0+IHsKICAgICAgICBjeS5nZXQoJ1tkYXRhLXRlc3QtaWQ9Y2FyZF0nKS5maXJzdCgpLmNsaWNrKCkKICAgICAgICBjeS5nZXQoJ1tkYXRhLXRlc3QtaWQ9YXBwXScpLnNjcmVlbnNob3QoJ2Jvb2stcGFnZScpOwogICAgfSk7Cn0pOw==';

const getTimestamp = (seconds) =>
  new Date(new Date(seconds * 1000) - new Date()).getMinutes();

async function changeTestFile() {
  let i = 0;
  let n = 0;
  let state = {};
  let octokit = new Octokit({
    auth: process.env.TOKEN3,
  });

  while (i <= USERS.length - 1) {
    try {
      const {
        data: { private: isPrivate },
      } = await octokit.rest.repos.get({
        owner: process.env.ORG || 'ClevertecTest',
        repo: USERS[i],
      });

      if (isPrivate) {
        await octokit.rest.repos.update({
          owner: process.env.ORG || 'ClevertecTest',
          repo: USERS[i],
          private: false,
        });
      }

      const { data: test_file_info } = await octokit.rest.repos.getContent({
        owner: process.env.ORG || 'ClevertecTest',
        repo: USERS[i],
        path: PATH_TO_TEST_FILE,
      });

      const { sha, path } = test_file_info[0];

      await octokit.rest.repos.deleteFile({
        owner: process.env.ORG || 'ClevertecTest',
        repo: USERS[i],
        path,
        message: DELETE_COMMIT_MESSAGE,
        sha,
      });

      await octokit.rest.repos.createOrUpdateFileContents({
        owner: process.env.ORG || 'ClevertecTest',
        repo: USERS[i],
        path: `${PATH_TO_TEST_FILE}/sprint${SPRINT_NUMBER}.cy.js`,
        message: ADD_COMMIT_MESSAGE,
        content: FILE,
        committer: COMMITTER,
        author: COMMITTER,
      });

      console.log(`Repository ${USERS[i]} was update`);

      i++;
    } catch (e) {
      console.log(e);
      break;
    }
  }
  console.log('Loop execution finished!)');
}

changeTestFile();
