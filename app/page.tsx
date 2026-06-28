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

/*首页内容*/
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      /*第一个section 顶部标题区 + 预算预览卡片*/
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
              /*对于stats array里面的每一个stat：都生成一段页面内容*/
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-4"
                >
                  <span className="text-sm font-medium text-slate-600">
                    {stat.label}
                  </span>
                  <span className="text-xl font-bold text-slate-950">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      /*第二个section 三个功能介绍*/
      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
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

      /*第三个section 添加交易表单*/
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
              Add the details for a student budget item. This form is a simple
              interface preview for now and does not save data yet.
            </p>
          </div>

          <form className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              /*第一项 TYPE 选择income 还是 Expense */
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Type
                </span>
                <select
                  name="type"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  defaultValue="Expense"
                >
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </label>

              /*第二项 Amount 输入金额 有限制 */
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
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </label>

              /*第三项 Category  */
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Category
                </span>
                <select
                  name="category"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  defaultValue="Groceries"
                >
                  /*把 transactionCategories 数组里的每一个分类，都变成一个 option 下拉选项。 */
                  {transactionCategories.map((category) => (
                    <option key={category}>{category}</option>
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
        </div>
      </section>
    </main>
  );
}
