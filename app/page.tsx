export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300">
          Built for international students in Ireland
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Student Expense Tracker Ireland
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Track your income, expenses, and monthly budget as an international
          student. Understand where your money goes and plan smarter.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 hover:bg-gray-200">
            Add Transaction
          </button>

          <button className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800">
            View Dashboard
          </button>
        </div>
      </section>
    </main>
  );
}