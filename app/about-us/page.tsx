export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-green-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
            About Our School
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Where curiosity becomes confidence.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We believe education is more than textbooks and examinations.
            Our goal is to help students think independently, discover their
            strengths, and prepare for the world beyond the classroom.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Built around students, not just subjects.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Founded with a simple vision, our school strives to create an
              environment where students feel encouraged to ask questions,
              experiment with ideas, and learn from their mistakes.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From the early years of schooling to Classes XI and XII, we
              focus on building strong academic foundations while developing
              communication, creativity, leadership, and critical thinking.
            </p>
          </div>

          <div className="flex min-h-80 items-center justify-center rounded-2xl bg-gray-100">
            <span className="text-gray-400">
              School Image
            </span>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              What Drives Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border bg-white p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                🎯
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To provide a supportive and challenging learning environment
                where every student can develop academically, socially, and
                personally.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                🌱
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To nurture responsible, confident, and curious individuals
                who are ready to make a meaningful contribution to society.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              The principles behind our classrooms.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Curiosity",
                description:
                  "We encourage students to question, explore, and discover.",
              },
              {
                title: "Integrity",
                description:
                  "We value honesty, responsibility, and doing what is right.",
              },
              {
                title: "Excellence",
                description:
                  "We encourage students to continuously improve and aim higher.",
              },
              {
                title: "Empathy",
                description:
                  "We build a community where students respect and support one another.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-green-700 px-8 py-14 text-center text-white md:px-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Come and experience our school.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-green-100">
            Discover a learning environment designed to help students grow,
            explore, and prepare for their future.
          </p>

          <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">
            Explore Admissions
          </button>

        </div>
      </section>

    </main>
  );
}
