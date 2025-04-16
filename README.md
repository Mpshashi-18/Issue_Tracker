# 🐛 React Issue Tracker (using Create React App)

This is a simple React application that displays a list of issues using **static data** and a **functional component**. Ideal for beginners learning React basics like JSX, components, and list rendering.

---

## 🚀 Getting Started

### 1. Create the React App

Using [Create React App](https://create-react-app.dev/):

```bash
npx create-react-app issue-tracker
cd issue-tracker
npm start
```

---

### 2. Folder Structure

Inside the `src/` folder, create a `components/` folder:

```
src/
├── components/
│   └── IssueList.jsx
├── App.jsx
└── index.js
```

---

### 3. Create the Functional Component

Create `src/components/IssueList.jsx`:

```jsx
import React from 'react';

// Static list of issues
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

// Functional component to display the list
const IssueList = () => {
  return (
    <div>
      <h2>Issue Tracker</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} style={{ marginBottom: '1rem' }}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p><strong>Status:</strong> {issue.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
```

---

### 4. Use the Component in App

Update `src/App.jsx`:

```jsx
import React from 'react';
import IssueList from './components/IssueList';

function App() {
  return (
    <div className="App">
      <IssueList />
    </div>
  );
}

export default App;
```

---

### 5. Main Entry Point

Ensure `src/index.js` looks like this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### 6. Run the App

Start the development server:

```bash
npm start
```

---

## ✅ Output

The app should display a list of issues:

- Title
- Description
- Status (Open/Closed)

---

## 🧠 What You'll Learn

| Concept              | Description                             |
| -------------------- | --------------------------------------- |
| JSX                  | HTML-like syntax in JavaScript          |
| Functional Component | Simple component that returns JSX       |
| Static Data          | Hard-coded array used for demo purposes |
| List Rendering       | Using `.map()` to loop through items    |
| `key` Prop           | Uniquely identifying list elements      |

---

##

