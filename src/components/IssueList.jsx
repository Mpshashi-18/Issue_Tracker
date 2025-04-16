import React from 'react';

const issues = [
  {
    id: 1,
    title: 'Login button not working',
    description: 'The login button does not respond to clicks.',
    status: 'Open',
  },
  {
    id: 2,
    title: 'UI not responsive on mobile',
    description: 'Layout breaks on smaller screens.',
    status: 'Open',
  },
  {
    id: 3,
    title: 'Typo in About page',
    description: 'There is a typo in the second paragraph of the About page.',
    status: 'Closed',
  },
];

const IssueList = () => {
  return (
    <div>
      <h2>Issue Tracker</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id} style={{ marginBottom: '1rem' }}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <strong>Status:</strong> {issue.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
