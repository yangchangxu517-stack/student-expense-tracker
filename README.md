# Student Expense Tracker Ireland

## Project Overview

Student Expense Tracker Ireland is a simple budgeting app built for students in Ireland. It helps users record income and expense transactions, review monthly totals, and understand their remaining budget.

This project was built as a portfolio project for CV and internship applications. It focuses on core frontend development skills, including React state management, form handling, conditional rendering, localStorage persistence, and responsive styling with Tailwind CSS.

## Features

- Add income and expense transactions
- Delete individual transactions
- Clear all transactions
- Confirmation prompts before deleting a transaction or clearing all transactions
- Save transactions in localStorage so they stay after page refresh
- Calculate monthly income, monthly expenses, and remaining budget
- Filter transactions by category
- Show an empty message when no transactions match the selected category
- Sort transactions by newest, oldest, highest amount, and lowest amount
- Add sample student transactions using the View Example button
- Scroll to the transaction form using the Start Tracking button
- Display a dynamic current month title in the budget preview
- Use different colors for income and expense transactions

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- localStorage
- Git and GitHub

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in the terminal, usually:

```bash
http://localhost:3000
```

## What I Learned

- How to build a client-side interactive page in Next.js
- How to manage form data using React and TypeScript
- How to store and update a list of transactions with `useState`
- How to persist data in the browser with localStorage
- How to calculate totals from an array of objects
- How to filter and sort displayed data without changing the original data
- How to use conditional rendering for empty states and confirmation flows
- How to style a clean, responsive interface with Tailwind CSS

## Future Improvements

- Edit existing transactions
- Add monthly filtering
- Add charts
- Add user authentication
- Connect to a database
