"use client";

import Image from "next/image";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const member = {
  firstName: "Brandon",
  initials: "BM",
  streak: 7,
  readingPlanTitle: "The Gospel of John — A 30-Day Journey",
  readingPlanDay: "Day 13 of 30",
  readingPlanPercent: 43,
  openActivities: 3,
  currentlyWorkingOn: "Marriage Study: Building on the Rock",
  lastCompleted: "Bible Explorer: Introduction to the Psalms",
  dailyVerse: "Let the word of Christ dwell in you richly.",
  dailyVerseRef: "Colossians 3:16",
  overallProgress: 28,
  myGroups: "Fall Life Groups — Community Group B",
  groupLeader: "Led by Marcus & Tanya Williams",
};

const hubs = [
  {
    seed: "dc-bible-plan",
    number: "01",
    title: "Bible Explorer",
    desc: "Studies, reading plans & application activities",
    active: true,
  },
  {
    seed: "dc-marriage-plan",
    number: "02",
    title: "Marriage & Family",
    desc: "Enrichment for your marriage and family",
    active: true,
  },
  {
    seed: "dc-community-plan",
    number: "03",
    title: "Community Connect",
    desc: "Life Group curriculum & community resources",
    active: false,
  },
  {
    seed: "dc-leadership-plan",
    number: "04",
    title: "Leadership Development",
    desc: "Training & ministerial development resources",
    active: false,
  },
];

export default function Dashboard() {
  const greeting = getGreeting();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100" style={{ height: "68px" }}>
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/dc-logo-white.svg"
              alt="DC"
              width={32}
              height={32}
              style={{ filter: "brightness(0)" }}
            />
            <span className="font-bold text-gray-900 text-[16px] tracking-tight">Destination Church</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              {["My Plan", "My Profile"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <button className="relative p-2 text-gray-300 hover:text-gray-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#E07820] rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#E07820] flex items-center justify-center text-white font-black text-[11px]">
              {member.initials}
            </div>
          </div>
        </div>
      </header>

      <div className="pt-[68px]">

        {/* Welcome */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <p className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">{today}</p>
            <h1
              className="font-black text-gray-900 tracking-tighter leading-[0.9] mb-6"
              style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
            >
              {greeting},<br />
              {member.firstName}.
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-gray-900">{member.streak}</span>
                <span className="text-sm text-gray-400 font-medium">day streak</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-200" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-gray-900">{member.overallProgress}%</span>
                <span className="text-sm text-gray-400 font-medium">plan complete</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-200" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-gray-900">{member.openActivities}</span>
                <span className="text-sm text-gray-400 font-medium">activities in progress</span>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Reading — featured card */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-black text-gray-400 tracking-[0.25em] uppercase mb-6">Continue Where You Left Off</p>
          <div className="relative rounded-3xl overflow-hidden bg-gray-900" style={{ minHeight: "340px" }}>
            <Image
              src="https://picsum.photos/seed/dc-john-gospel/1200/600"
              alt=""
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/70 to-transparent" />
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 h-full">
              <div className="max-w-lg">
                <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-4">Current Reading Plan</p>
                <h2 className="font-black text-white text-3xl md:text-4xl leading-tight mb-4">
                  {member.readingPlanTitle}
                </h2>
                <p className="text-white/50 text-sm font-medium mb-6">{member.readingPlanDay}</p>
                <div className="flex flex-col gap-2 max-w-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Progress</span>
                    <span className="text-white font-black text-sm">{member.readingPlanPercent}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#E07820]"
                      style={{ width: `${member.readingPlanPercent}%` }}
                    />
                  </div>
                </div>
              </div>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-black px-9 py-4 rounded-full text-sm transition-colors tracking-wide shrink-0">
                Continue Reading →
              </button>
            </div>
          </div>
        </section>

        {/* Currently Working On */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="rounded-2xl border border-gray-100 bg-white p-8 flex flex-col gap-6">
              <div>
                <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-4">Currently Working On</p>
                <h3 className="font-black text-gray-900 text-xl leading-snug">{member.currentlyWorkingOn}</h3>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Last: {member.lastCompleted.split(":")[0]}
                </div>
                <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
                  Continue →
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[#E07820] p-8 flex flex-col justify-between gap-6">
              <p className="text-white/60 text-[10px] font-black tracking-[0.3em] uppercase">Daily Reminder</p>
              <blockquote className="font-black text-white text-xl leading-snug">
                &ldquo;{member.dailyVerse}&rdquo;
              </blockquote>
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase">— {member.dailyVerseRef}</p>
            </div>

          </div>
        </section>

        {/* Update My Plan CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="rounded-2xl border-2 border-dashed border-gray-200 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-2">Your Spiritual Formation Plan</p>
              <h3 className="font-black text-gray-900 text-xl">Build or update your personalized plan</h3>
              <p className="text-gray-400 text-sm mt-1">Choose activities from all four centers at your own pace.</p>
            </div>
            <button className="bg-[#E07820] hover:bg-[#c9691a] text-white font-black px-8 py-3.5 rounded-full text-sm transition-colors tracking-wide shrink-0">
              Update My Plan →
            </button>
          </div>
        </section>

        {/* Four Centers */}
        <section className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <p className="text-xs font-black text-gray-400 tracking-[0.25em] uppercase mb-8">Four Centers of Growth</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hubs.map((hub) => (
                <div
                  key={hub.number}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
                >
                  <Image
                    src={`https://picsum.photos/seed/${hub.seed}/400/533`}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  {!hub.active && (
                    <div className="absolute inset-0 bg-black/30" />
                  )}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <p className="text-[#E07820] text-[9px] font-black tracking-[0.3em] uppercase mb-1">{hub.number}</p>
                    <h4 className="text-white font-black text-sm leading-snug mb-1 group-hover:text-[#E07820] transition-colors">
                      {hub.title}
                    </h4>
                    {hub.active ? (
                      <span className="text-[9px] font-black tracking-widest uppercase text-[#E07820]">Active</span>
                    ) : (
                      <span className="text-[9px] font-black tracking-widest uppercase text-white/40">Coming Soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Groups */}
        <section className="bg-gray-950">
          <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-3">My Groups</p>
              <h3 className="font-black text-white text-2xl mb-1">{member.myGroups}</h3>
              <p className="text-gray-500 text-sm">{member.groupLeader}</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-full text-sm transition-colors group shrink-0"
            >
              View Group
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
