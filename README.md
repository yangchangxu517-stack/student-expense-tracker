# Student Expense Tracker Ireland

A simple budgeting web application built for students living in Ireland.  
The app helps users record income and expenses, view monthly totals, filter transactions by category, and sort their spending history.

## Features

- Add income and expense transactions
- Record transaction amount, category, date, and optional notes
- Delete individual transactions
- Clear all transactions
- Confirmation prompts before deleting, clearing, or replacing existing data with example data
- Save transactions in localStorage so data remains after refreshing the page
- Automatically calculate:
  - Monthly income
  - Monthly expenses
  - Remaining budget
- Filter transactions by category
- Show an empty message when no transactions match the selected category
- Sort transactions by:
  - Newest first
  - Oldest first
  - Highest amount
  - Lowest amount
- Use different colors for income and expense transactions
- View example student transactions
- Start Tracking button scrolls to the transaction form
- Dynamic current month title in the budget overview

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- localStorage
- Git and GitHub

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/yangchangxu517-stack/student-expense-tracker.git
```

Go into the project folder:

```bash
cd student-expense-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL in your browser.

## What I Learned

During this project, I practised building a React and Next.js application using TypeScript. I learned how to use React state to store transactions, handle form submissions, update lists dynamically, and save data in localStorage.

I also practised working with array methods such as `map`, `filter`, `reduce`, and `sort` to display, calculate, filter, and organise transaction data. This project helped me better understand how user actions, state updates, and UI rendering work together in a front-end application.

## Future Improvements

- Edit existing transactions
- Add monthly filtering
- Add charts to visualise spending
- Add user authentication
- Connect the app to a database
- Improve responsive layout for smaller screens