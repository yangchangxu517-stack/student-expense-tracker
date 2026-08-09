"use client"; /*这个页面需要在browser中运行 */

import { useEffect, useState, type FormEvent } from "react";  /*useState：让React有记忆*/

/*把数据存起来 让下面的jsx用 */
const features = [
  {
    title: "Track Expenses",
    description:
      "Log everyday spending for rent, groceries, transport, course materials, and nights out.",
  },
  {
    title: "Manage Income",
    description:
      "Keep grants, part-time wages, family support, and savings in one simple monthly view.",
  },
  {
    title: "Monthly Summary",
    description:
      "See what came in, what went out, and how much is left before the month ends.",
  },
];

const stats = [
  { label: "Monthly Income", value: "€1,200" },
  { label: "Monthly Expenses", value: "€850" },
  { label: "Remaining Budget", value: "€350" },
];

const transactionCategories = [
  "Rent",
  "Groceries",
  "Transport",
  "Course Materials",
  "Part-time Work",
  "Grant",
  "Other",
];

/*定义一条transaction要长什么样 */
type Transaction = {
  id: number;
  type: "Income" | "Expense";
  amount: number;
  category: string;
  date: string;
  note: string;
};

/*主函数Home */
export default function Home() {
  
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const savedTransactions = localStorage.getItem("transactions");

    if (savedTransactions) {
      return JSON.parse(savedTransactions) as Transaction[];
    }

    return [];
  });
  
  const [selectedCategory, setSelectedCategory] = useState("All Categories");/**记录用户选了哪个category */

  const totalExpenses = transactions        /*自动计算每月支出 */
    .filter((transaction) => transaction.type === "Expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalIncome = transactions               /**自动计算每月收入 */
    .filter((transaction) => transaction.type === "Income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const remainingBudget = totalIncome - totalExpenses;   /**自动计算剩余预算 */

  const filteredTransactions =                          /**过滤出selectedCategory的transaction */
    selectedCategory === "All Categories"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === selectedCategory
        );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

/*1. 创建一个 state 存储位置
2. 把初始值 [] 放进去
3. 返回两个东西：[当前值, 修改函数] */

  
/*处理添加一笔收入/支出的函数 */
function handleAddTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form); /**FormData是浏览器中自带的工具 用于收集表单字段 */

    /**规定newTransaction必须是之前定义的Transaction类型 */
    const newTransaction: Transaction = {
      id: Date.now(),/*获取当前时间，当作transaction的编号 */
      type: formData.get("type") as Transaction["type"],/*获取叫做type的字段(income/expense)；后面as Transaction["type"]是 TypeScript 的类型断言.因为 formData.get("type") 在 TypeScript 看来可能是很多种东西，不一定刚好是 "Income" 或 "Expense"。 */
      /*number string 规定类型 */
      amount: Number(formData.get("amount")),
      category: String(formData.get("category")),
      date: String(formData.get("date")),
      note: String(formData.get("note") || ""),
    };

    /*更新交易列表 */
    setTransactions((currentTransactions) => [
      newTransaction,
      ...currentTransactions,
    ]);

    form.reset();
  }

  /**增加删除功能 */
  function handleDeleteTransaction(id: number) {
    const confirmed = window.confirm("Delete this transaction?");

    if (!confirmed) {
      return;
    }

    setTransactions((currentTransactions) =>
      /**删掉transaction.id !== id的 其他的记录不动保留下来 */
      currentTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  /*增加一键删除功能* */
  function handleClearAllTransactions() {
    const confirmed = window.confirm("Clear all transactions?");

    if (!confirmed) {
      return;
    }

    setTransactions([]);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              Built for students living in Ireland
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
              Student Expense Tracker Ireland
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A calm place to plan your monthly money, track student spending,
              and understand what remains after the essentials are covered.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-emerald-900/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Start Tracking
              </button>

              <button
                type="button"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                View Example
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Budget Preview
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">
                  June Overview
                </h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                On track
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {stats.map((stat) => ( /*stats中的每一项生成一个页面(label + value) */
                                      /*eg: Monthly Income    1200 */
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-4"
                >
                  <span className="text-sm font-medium text-slate-600">
                    {stat.label}
                  </span>
                  <span className="text-xl font-bold text-slate-950">
                    {stat.label === "Monthly Income"
                      ? `€${totalIncome.toFixed(2)}`
                      : stat.label === "Monthly Expenses"
                        ? `€${totalExpenses.toFixed(2)}`
                        : stat.label === "Remaining Budget"
                          ? `€${remainingBudget.toFixed(2)}`
                          : stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            /*features 中的每一个feature 都转换为一个新的页面<article> ... </article>* */
            <article
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-lg font-bold text-emerald-700">
                {feature.title.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-slate-950">
                {feature.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Add Transaction
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Record income or spending
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Add the details for a student budget item. The transaction will
              appear in the list below.
            </p>
          </div>

          <form
            onSubmit={handleAddTransaction}
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Type
                </span>
                <select
                  name="type"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  defaultValue="Expense"
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Amount
                </span>
                <input
                  name="amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Category
                </span>
                <select
                  name="category"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  defaultValue="Groceries"
                >
                  {transactionCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Date
                </span>
                <input
                  name="date"
                  type="date"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Note
                </span>
                <input
                  name="note"
                  type="text"
                  placeholder="Optional note"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-emerald-900/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Add Transaction
              </button>
            </div>
          </form>
          <div className="mt-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Transaction List
              </h2>

              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="All Categories">All Categories</option>
                {transactionCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {transactions.length > 0 ? (  /**transactions数量需要大于0才会显示clear all按钮 */
                <button
                  type="button"
                  onClick={handleClearAllTransactions}
                  className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Clear All
                </button>
              ) : null}
            </div>
            
            {/*如果没有交易记录，就显示 “No transactions added yet.”如果有交易记录，就显示交易列表 */}
            
            {transactions.length === 0 ? 
            
            /*若长度为0* */
            (
              <p className="mt-4 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-5 text-slate-600">
                No transactions added yet.
              </p>
            ) : filteredTransactions.length === 0 ? (
              <p className="mt-4 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-5 text-slate-600">
                No transactions found for this category.
              </p>
            ) : 
            
            /*否则：交易记录继续转化为新的页面* */
            (
              <div className="mt-5 space-y-4">
                {filteredTransactions.map((transaction) => (
                  <article
                    key={transaction.id}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            transaction.type === "Income"
                              ? "text-emerald-700"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-slate-950">
                          {transaction.category}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {transaction.date}
                        </p>
                        {transaction.note ? (
                          <p className="mt-3 text-slate-600">
                            {transaction.note}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex items-center gap-3">
                        <p
                          className={`text-2xl font-bold ${
                            transaction.type === "Income"
                              ? "text-emerald-700"
                              : "text-red-600"
                          }`}
                        >
                          €{transaction.amount.toFixed(2)}
                        </p>
                        
                        {/*新增一个按钮delete在transaction旁边* */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteTransaction(transaction.id)
                          }
                          className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                          Delete
                        
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
