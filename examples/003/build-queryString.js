const queryString = require('querystring');

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqParams = {
  assignee: 'randy chen',
  startAt: 2,
  maxResult: 2
};

const apiUrl = `${apiHost}"${queryString.stringify(jqParams)}"`;
console.log(`My JQL api call is: ${apiUrl}`);
