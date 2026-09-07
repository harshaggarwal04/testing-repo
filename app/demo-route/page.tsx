export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="mt-1 text-gray-500">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
            + Add Project
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Projects</p>
            <h2 className="mt-2 text-3xl font-bold">24</h2>
            <p className="mt-2 text-sm text-green-600">↑ 12% this month</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="mt-2 text-3xl font-bold">₹84,250</h2>
            <p className="mt-2 text-sm text-green-600">↑ 8.4% this month</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Customers</p>
            <h2 className="mt-2 text-3xl font-bold">1,248</h2>
            <p className="mt-2 text-sm text-green-600">↑ 18% this month</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending Tasks</p>
            <h2 className="mt-2 text-3xl font-bold">17</h2>
            <p className="mt-2 text-sm text-red-500">↓ 3 from yesterday</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Recent Projects */}
          <div className="rounded-xl border bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Projects</h2>
              <button className="text-sm text-gray-500 hover:text-black">
                View all
              </button>
            </div>

            <div className="space-y-4">
              {[
                ["School Website", "Website", "Completed"],
                ["AxoInsight", "SaaS", "In Progress"],
                ["BuildBeaver", "AI Platform", "In Progress"],
                ["Portfolio", "Personal", "Completed"],
              ].map(([name, type, status]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-500">{type}</p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">Recent Activity</h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium">New customer joined</p>
                <p className="text-xs text-gray-500">10 minutes ago</p>
              </div>

              <div>
                <p className="text-sm font-medium">Project updated</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>

              <div>
                <p className="text-sm font-medium">Payment received</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>

              <div>
                <p className="text-sm font-medium">New task created</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}