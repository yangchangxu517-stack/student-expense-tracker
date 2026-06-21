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

export default function Home() {
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
    </main>
  );
}
