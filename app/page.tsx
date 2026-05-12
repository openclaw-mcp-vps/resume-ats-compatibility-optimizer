export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          ATS Compatibility Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Getting Filtered Out by{" "}
          <span className="text-[#58a6ff]">ATS Bots</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your resume and instantly see how major ATS systems parse it. Get a detailed compatibility report, keyword extraction results, and specific formatting fixes — so recruiters actually see your application.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Taleo", "Workday", "Greenhouse", "iCIMS", "Lever"].map((ats) => (
            <span key={ats} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              ✓ {ats}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited resume uploads",
              "ATS simulation across 5 major systems",
              "Keyword extraction & gap analysis",
              "Formatting fix recommendations",
              "Parsing success score (0–100)",
              "PDF & DOCX support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which ATS systems does this test against?",
              a: "We simulate parsing behavior for Taleo, Workday, Greenhouse, iCIMS, and Lever — the five most widely used systems covering over 80% of Fortune 500 hiring."
            },
            {
              q: "What file formats are supported?",
              a: "We support PDF and DOCX uploads. For best results, upload the exact file you plan to submit to employers."
            },
            {
              q: "How is my data handled?",
              a: "Your resume is processed in memory for analysis and never stored permanently. We do not share your data with third parties."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
