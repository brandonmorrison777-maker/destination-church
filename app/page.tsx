import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <Image src="/dc-logo.png" alt="Destination Church" width={200} height={55} priority />
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="bg-[#E07820] hover:bg-[#c9691a] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors tracking-wide">
            Join Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end bg-gray-950 pt-20 pb-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#E07820]/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-12 w-96 h-96 rounded-full bg-[#E07820]/10 blur-3xl" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-7xl mx-auto w-full">
          <p className="text-[#E07820] font-bold tracking-[0.3em] uppercase text-xs mb-8">
            Destination Church &mdash; Spiritual Formation Platform
          </p>
          <h1 className="text-7xl md:text-[9rem] font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-4xl">
            Grow<br />
            <span className="text-[#E07820]">deeper.</span><br />
            Live<br />
            <span className="text-[#E07820]">bolder.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-16 border-t border-white/10 pt-10">
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              A discipleship experience that combines powerful content with real learning science — so growth isn&apos;t just a feeling. It&apos;s measurable.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/register" className="bg-[#E07820] hover:bg-[#c9691a] text-white font-black px-10 py-4 rounded-full text-base transition-colors tracking-wide whitespace-nowrap">
                Start Your Journey
              </Link>
              <Link href="/login" className="text-white/50 hover:text-white font-medium text-sm transition-colors whitespace-nowrap">
                Already a member →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E07820] font-bold tracking-[0.3em] uppercase text-xs mb-6">The Problem</p>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                There&apos;s a gap in spiritual formation.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-xl leading-relaxed">
                Most people want to grow — but they don&apos;t have a clear, intentional path. Information without application. Activity without transformation.
              </p>
              <p className="text-gray-900 text-xl font-semibold leading-relaxed">
                We built something different. High-level discipleship content, synced with actual learning science, in an experience that is <span className="text-[#E07820]">meaningful, measurable, and made for you.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Hubs */}
      <section className="py-32 px-8 md:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#E07820] font-bold tracking-[0.3em] uppercase text-xs mb-6">Four Pathways</p>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight max-w-2xl">
              Every area of your life. Covered.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              {
                number: "01",
                title: "Bible Explorer",
                desc: "Go deeper in God's Word through overviews, in-depth studies, guided reading plans, and practical application activities that move Scripture from the page to your life.",
                tags: ["Bible Overviews", "Studies", "Reading Plans", "Application"],
              },
              {
                number: "02",
                title: "Marriage & Family",
                desc: "Strengthen the relationships that matter most. Studies, encouragement, and activities designed to grow and enrich your marriage and family from the inside out.",
                tags: ["Couples Studies", "Family Activities", "Encouragement", "Practical Tools"],
              },
              {
                number: "03",
                title: "Community Connect",
                desc: "Growth is better together. Access Life Group curriculum, track your group journey over time, and find resources that help your community learn and grow together.",
                tags: ["Life Group Curriculum", "Leader Resources", "Group Tracking", "Community"],
              },
              {
                number: "04",
                title: "Leadership Development",
                desc: "Step into the leader God called you to be. Training for those who serve at Destination Church — and a dedicated Ministerial Development track for those pursuing vocational ministry.",
                tags: ["Leader Training", "Ministry Resources", "Ministerial Track", "Vocational Path"],
              },
            ].map((hub) => (
              <div key={hub.number} className="bg-gray-950 p-12 hover:bg-gray-900 transition-colors group">
                <p className="text-[#E07820] font-black text-sm tracking-widest mb-6">{hub.number}</p>
                <h3 className="text-white font-black text-3xl mb-4 group-hover:text-[#E07820] transition-colors">{hub.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-base">{hub.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {hub.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-gray-500 border border-gray-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-8 md:px-16 bg-[#E07820]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs mb-6">How It Works</p>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Your journey.<br />Your plan.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                step: "01",
                title: "Build Your Plan",
                desc: "Choose activities from all four hubs to create a personalized Spiritual Formation Plan — intentional, flexible, and built around your life.",
              },
              {
                step: "02",
                title: "Learn & Engage",
                desc: "Every lesson goes beyond reading. Videos, guided content, interactive activities, and assessments — designed to produce real transformation.",
              },
              {
                step: "03",
                title: "Track & Celebrate",
                desc: "Earn badges and certificates as you hit milestones. Your dashboard keeps you on track with daily reminders and real-time progress.",
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-white/30 font-black text-7xl leading-none mb-6">{item.step}</p>
                <h3 className="text-white font-black text-2xl mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E07820] font-bold tracking-[0.3em] uppercase text-xs mb-6">Community</p>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Grow together as a church family.
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                This isn&apos;t just an online course — it&apos;s a community experience. Stay connected to your Life Group, track your journey alongside others, and celebrate milestones as a family.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Intentional", desc: "Every activity is designed with purpose — no busy work, just meaningful growth that moves you forward." },
                { label: "Measurable", desc: "See your progress clearly. Know where you've been, where you are, and where you're headed." },
                { label: "Rewarding", desc: "Earn badges and certificates that recognize and celebrate your commitment to growth." },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:border-[#E07820]/30 hover:bg-orange-50/30 transition-colors">
                  <div className="w-1 bg-[#E07820] rounded-full shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-black text-lg mb-1">{item.label}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-8 md:px-16 bg-gray-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image src="/dc-logo-white.svg" alt="" width={700} height={700} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-10">
            Ready to<br />
            <span className="text-[#E07820]">live it?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Join Destination Church&apos;s discipleship platform and start building the life God designed for you.
          </p>
          <Link href="/register" className="bg-[#E07820] hover:bg-[#c9691a] text-white font-black px-14 py-5 rounded-full text-xl transition-colors inline-block tracking-wide">
            Create My Free Account
          </Link>
          <p className="text-gray-600 text-sm mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-gray-400 hover:text-white font-semibold transition-colors">
              Sign in here →
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/5 py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/dc-logo-white.svg" alt="Destination Church" width={36} height={36} className="opacity-30" />
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Destination Church &mdash; don&apos;t just dream it. live it.</p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link href="/login" className="hover:text-gray-400 transition-colors">Sign In</Link>
            <Link href="/register" className="hover:text-gray-400 transition-colors">Register</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
