export default function MePage() {
  const stats = [
    { label: "Coffee Consumed", value: "∞" },
    { label: "Bugs Created", value: "127" },
    { label: "Bugs Fixed", value: "126" },
    { label: "Stack Overflow Visits", value: "Daily" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <div className="h-28 w-28 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
              🚀
            </div>

            

            <p className="mt-3 text-zinc-400 max-w-lg">
              Full-stack developer who spends 90% of the time building cool
              things and the remaining 10% wondering why the deployment broke.
            </p>

            <div className="mt-8 flex gap-3 flex-wrap justify-center">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "PostgreSQL",
                "AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-zinc-800/50 p-5"
              >
                <p className="text-zinc-400 text-sm">{item.label}</p>
                <p className="mt-2 text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Current Mission</h2>
            <p className="mt-3 text-zinc-400">
              Building an AI-powered code reviewer that politely tells developers
              their code is terrible.
            </p>
          </div>

          <div className="mt-8 text-center text-zinc-500 text-sm">
            Built with ☕, questionable decisions, and TypeScript.
          </div>
        </div>
      </div>
    </main>
  );
}