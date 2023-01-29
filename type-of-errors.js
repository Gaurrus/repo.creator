// отсутствует или не правильный owner, нет тэмплэйта 404
const error404 = {
  url: 'https://api.github.com/repos/ClevertecTest123/sprint1/generate',
  status: 404,
  headers: {
    'access-control-allow-origin': '*',
    'access-control-expose-headers':
      'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Wed, 25 Jan 2023 11:57:52 GMT',
    'referrer-policy':
      'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept-Encoding, Accept, X-Requested-With',
    'x-accepted-oauth-scopes': 'repo',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-api-version-selected': '2022-11-28',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'E50C:13513:461AF15:472EF77:63D11940',
    'x-oauth-scopes':
      'admin:enterprise, admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, admin:ssh_signing_key, audit_log, codespace, delete:packages, delete_repo, gist, notifications, project, repo, user, workflow, write:discussion, write:packages',
    'x-ratelimit-limit': '5000',
    'x-ratelimit-remaining': '4978',
    'x-ratelimit-reset': '1674651001',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '22',
    'x-xss-protection': '0',
  },
  data: {
    message: 'Not Found',
    documentation_url:
      'https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template',
  },
};

// 422 когда слишком много создано репо за короткий промедуток времени

// RequestError [HttpError]: Unprocessable Entity: "Could not clone: was submitted too quickly"
//     at d:\Frontend\Marathon\repo\repo.creator\node_modules\@octokit\request\dist-node\index.js:88:21
//     at runMicrotasks (<anonymous>)
//     at processTicksAndRejections (node:internal/process/task_queues:96:5)
//     at async main (d:\Frontend\Marathon\repo\repo.creator\script.js:26:7) 
    
 const error422 =   {
  status: 422,
  response: {
    url: 'https://api.github.com/repos/ClevertecTest/templateTest/generate',
    status: 422,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
      connection: 'close',
      'content-length': '194',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Sun, 29 Jan 2023 13:08:49 GMT',
      'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
      vary: 'Accept-Encoding, Accept, X-Requested-With',
      'x-accepted-oauth-scopes': '',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-api-version-selected': '2022-11-28',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': '32E3:C857:594384:5AF983:63D66FE0',
      'x-oauth-scopes': 'admin:enterprise, admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, admin:ssh_signing_key, audit_log, codespace, delete:packages, delete_repo, gist, notifications, project, repo, user, workflow, write:discussion, write:packages',
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4849',
      'x-ratelimit-reset': '1675001044',
      'x-ratelimit-resource': 'core',
      'x-ratelimit-used': '151',
      'x-xss-protection': '0'
    },
    data: {
      message: 'Unprocessable Entity',
      errors: [Array],
      documentation_url: 'https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template'
    }
  },
  request: {
    method: 'POST',
    url: 'https://api.github.com/repos/ClevertecTest/templateTest/generate',
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'octokit-rest.js/19.0.5 octokit-core.js/4.1.0 Node.js/16.15.1 (win32; x64)',
      authorization: 'token [REDACTED]',
      'content-type': 'application/json; charset=utf-8'
    },
    body: '{"owner":"ClevertecTest","name":"test-151"}',
    request: { hook: [Function: bound bound register] }
  }
}

// 401 когда ключ отсутствует

// RequestError [HttpError]: Requires authentication
//     at d:\Frontend\Marathon\repo\repo.creator\node_modules\@octokit\request\dist-node\index.js:88:21
//     at processTicksAndRejections (node:internal/process/task_queues:96:5)
//     at async main (d:\Frontend\Marathon\repo\repo.creator\script.js:26:7) 
    const error401 =  {
  status: 401,
  response: {
    url: 'https://api.github.com/repos/ClevertecTest/templateTest/generate',
    status: 401,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
      connection: 'close',
      'content-length': '141',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Sun, 29 Jan 2023 13:19:24 GMT',
      'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'GitHub.com',
      'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
      vary: 'Accept-Encoding, Accept, X-Requested-With',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-api-version-selected': '2022-11-28',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': '771F:C4E5:2D3EAD:2E3269:63D6725C',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '31',
      'x-ratelimit-reset': '1675001953',
      'x-ratelimit-resource': 'core',
      'x-ratelimit-used': '29',
      'x-xss-protection': '0'
    },
    data: {
      message: 'Requires authentication',
      documentation_url: 'https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template'
    }
  },
  request: {
    method: 'POST',
    url: 'https://api.github.com/repos/ClevertecTest/templateTest/generate',
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'octokit-rest.js/19.0.5 octokit-core.js/4.1.0 Node.js/16.15.1 (win32; x64)',
      'content-type': 'application/json; charset=utf-8'
    },
    body: '{"owner":"ClevertecTest","name":"test-1"}',
    request: { hook: [Function: bound bound register] }
  }
}
// RequestError [HttpError]: GarrusClassroom is not a user
// at d:\Frontend\Marathon\repo\repo.creator\node_modules\@octokit\request\dist-node\index.js:88:21
// at processTicksAndRejections (node:internal/process/task_queues:96:5)
// at async main (d:\Frontend\Marathon\repo\repo.creator\script.js:33:7) 

const error404organisation = {
status: 404,
response: {
url: 'https://api.github.com/repos/ClevertecTest/test-1/collaborators/GarrusClassroom',
status: 404,
headers: {
  'access-control-allow-origin': '*',
  'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
  connection: 'close',
  'content-encoding': 'gzip',
  'content-security-policy': "default-src 'none'",
  'content-type': 'application/json; charset=utf-8',
  date: 'Sun, 29 Jan 2023 13:45:58 GMT',
  'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
  server: 'GitHub.com',
  'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
  'transfer-encoding': 'chunked',
  vary: 'Accept-Encoding, Accept, X-Requested-With',
  'x-accepted-oauth-scopes': '',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'deny',
  'x-github-api-version-selected': '2022-11-28',
  'x-github-media-type': 'github.v3; format=json',
  'x-github-request-id': '63CB:FE1C:78CB50:7AFF6E:63D67896',
  'x-oauth-scopes': 'admin:enterprise, admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, admin:ssh_signing_key, audit_log, codespace, delete:packages, delete_repo, gist, notifications, project, repo, user, workflow, write:discussion, write:packages',
  'x-ratelimit-limit': '5000',
  'x-ratelimit-remaining': '4813',
  'x-ratelimit-reset': '1675001044',
  'x-ratelimit-resource': 'core',
  'x-ratelimit-used': '187',
  'x-xss-protection': '0'
},
data: {
  message: 'GarrusClassroom is not a user',
  documentation_url: 'https://docs.github.com/rest/reference/repos#add-a-repository-collaborator'
}
},
request: {
method: 'PUT',
url: 'https://api.github.com/repos/ClevertecTest/test-1/collaborators/GarrusClassroom',
headers: {
  accept: 'application/vnd.github.v3+json',
  'user-agent': 'octokit-rest.js/19.0.5 octokit-core.js/4.1.0 Node.js/16.15.1 (win32; x64)',
  authorization: 'token [REDACTED]',
  'content-type': 'application/json; charset=utf-8'
},
body: '{"permission":"push"}',
request: { hook: [Function: bound bound register] }
}
}