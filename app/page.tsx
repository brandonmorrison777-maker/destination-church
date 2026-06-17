"use client";

import { useState } from "react";
import Image from "next/image";
import LoginModal from "./components/LoginModal";
import AboutModal from "./components/AboutModal";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} onLogin={() => setLoginOpen(true)} />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/dc-logo-white.svg" alt="DC" width={42} height={42} style={{ filter: "invert(52%) sepia(98%) saturate(600%) hue-rotate(1deg) brightness(95%)" }} />
            <span className="text-[20px] tracking-tight">
              <span className="font-black text-gray-900">Destination </span>
              <span className="italic font-normal text-gray-900" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Church</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAboutOpen(true)}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-[#E07820] hover:bg-[#c9691a] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero — parallax */}
      <section
        className="relative min-h-screen flex flex-col justify-center"
        style={{
          backgroundImage: "url(https://picsum.photos/seed/worship-hero/1920/1080)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/65 to-gray-950/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-28 pt-[120px]">
          <Image src="/dc-logo-white.svg" alt="" width={48} height={48} className="mb-10 opacity-50" />
          <p className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            Destination Church — Spiritual Formation Portal
          </p>
          <h1 className="leading-[0.9] tracking-tighter mb-12 font-black" style={{ fontSize: "clamp(58px, 10vw, 120px)" }}>
            <span className="block text-white">Don&apos;t just</span>
            <span className="block text-white">dream it.</span>
            <span className="block text-[#E07820]">Live it.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-10 py-4 rounded-full text-base transition-colors"
            >
              Access Your Dashboard
            </button>
            <p className="text-white/35 text-sm">
              New to the portal? A member of the Connect Team will get you set up.
            </p>
          </div>
        </div>
      </section>

      {/* Statement — white */}
      <section className="relative bg-white py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#E07820] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Hearing · Doing · Becoming
            </p>
            <h2 className="leading-tight mb-8" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
              <span className="font-black text-gray-900">Biblical </span>
              <span
                className="italic text-gray-900"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 400 }}
              >
                Spiritual
              </span>
              <br />
              <span className="font-black text-gray-900">Formation.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Growth looks different for everyone. This experience meets you where you are — with intentional pathways, engaging content, and a personalized plan that moves you forward at your own pace.
            </p>
            <p className="text-gray-800 font-medium text-lg leading-relaxed">
              High-level discipleship content, synced with effective, practical learning — in an experience that is{" "}
              <span
                className="italic text-[#E07820]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                meaningful, measurable, and made for you.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["dc-img1","dc-img2","dc-img3","dc-img4","dc-img5","dc-img6"].map((seed) => (
              <div key={seed} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src={`https://picsum.photos/seed/${seed}/400/400`} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Centers — parallax */}
      <section
        className="relative py-36 px-6"
        style={{
          backgroundImage: "url(https://picsum.photos/seed/dc-crowd/1920/1080)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-950/90" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#E07820] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              Four Centers of Growth
            </p>
            <h2 className="leading-tight tracking-tight" style={{ fontSize: "clamp(52px, 7vw, 88px)" }}>
              <span className="font-black text-white">Every area of your </span>
              <span
                className="italic text-[#E07820]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 400 }}
              >
                growth.
              </span>
              <br />
              <span className="font-black text-white">Covered.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { seed: "dc-bible", number: "01", title: "Bible Explorer", desc: "Studies, reading plans, and application activities that move Scripture from the page to your life." },
              { seed: "dc-family", number: "02", title: "Marriage & Family", desc: "Enrichment resources designed to grow and strengthen your marriage and family from the inside out." },
              { seed: "dc-groups", number: "03", title: "Community Connect", desc: "Life Group curriculum and resources that help your community learn and grow together." },
              { seed: "dc-leader", number: "04", title: "Leadership Development", desc: "Training and a ministerial development track for those called to lead and serve." },
            ].map((hub) => (
              <div key={hub.number} className="group relative rounded-3xl overflow-hidden aspect-[3/2] cursor-pointer">
                <Image
                  src={`https://picsum.photos/seed/${hub.seed}/800/533`}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-[#E07820] text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">{hub.number}</p>
                  <h3 className="text-white font-black text-2xl mb-2 group-hover:text-[#E07820] transition-colors">{hub.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{hub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — white */}
      <section className="relative bg-white py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#E07820] text-xs font-semibold tracking-[0.3em] uppercase mb-5">How It Works</p>
            <h2 className="leading-tight" style={{ fontSize: "clamp(52px, 7vw, 88px)" }}>
              <span className="font-black text-gray-900">Your journey. </span>
              <span
                className="italic text-gray-400"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 400 }}
              >
                Your plan.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "01", title: "Build Your Plan", desc: "Choose activities from all four centers to create a personalized Spiritual Formation Plan — intentional, flexible, and built around your life." },
              { step: "02", title: "Learn & Engage", desc: "Every activity goes beyond reading. Resources, guided content, and assessments designed to help you truly grow." },
              { step: "03", title: "Track & Celebrate", desc: "Earn badges as you hit milestones. Your dashboard keeps you on track with daily reminders and real-time progress." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-start">
                <span
                  className="italic leading-none mb-6 text-gray-100"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "88px", fontWeight: 400 }}
                >
                  {item.step}
                </span>
                <h3 className="font-black text-gray-900 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community — parallax */}
      <section
        className="relative py-36 px-6"
        style={{
          backgroundImage: "url(https://picsum.photos/seed/dc-worship/1920/1080)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-950/82" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#E07820] text-xs font-semibold tracking-[0.3em] uppercase mb-6">Community</p>
          <h2 className="leading-tight mb-10" style={{ fontSize: "clamp(56px, 9vw, 110px)" }}>
            <span className="font-black text-white">Grow </span>
            <span
              className="italic text-[#E07820]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 400 }}
            >
              together.
            </span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
            Connect with your groups, track your journey alongside others, and celebrate milestones together. You are never alone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { label: "Intentional", desc: "Every activity is designed with purpose — meaningful growth that moves you forward." },
              { label: "Measurable", desc: "See your progress clearly. Know where you've been, where you are, and where you're headed." },
              { label: "Rewarding", desc: "Earn badges and certificates that recognize your commitment to growth." },
            ].map((item) => (
              <div key={item.label} className="flex gap-5">
                <div className="w-1 bg-[#E07820] rounded-full shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white mb-3 text-2xl">{item.label}</p>
                  <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — parallax */}
      <section
        className="relative py-48 px-6 text-center"
        style={{
          backgroundImage: "url(https://picsum.photos/seed/dc-cta/1920/1080)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-950/88" />
        <div className="relative z-10 max-w-xl mx-auto">
          <Image src="/dc-logo-white.svg" alt="" width={48} height={48} className="mx-auto mb-10 opacity-20" />
          <h2 className="font-black text-white leading-tight tracking-tighter mb-6" style={{ fontSize: "clamp(80px, 14vw, 180px)" }}>
            Live it.
          </h2>
          <button
            onClick={() => setLoginOpen(true)}
            className="bg-[#E07820] hover:bg-[#c9691a] text-white font-bold px-12 py-5 rounded-full text-lg transition-colors"
          >
            Access Your Dashboard
          </button>
          <p className="text-white/25 text-sm mt-12">
            New to the portal? A member of the Connect Team will get you set up.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
          <Image src="/dc-logo-white.svg" alt="" width={28} height={28} className="opacity-20" />
          <p
            className="italic text-gray-600 text-sm"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Don&apos;t just dream it. Live it.
          </p>
          <button onClick={() => setLoginOpen(true)} className="text-gray-700 hover:text-gray-400 text-sm transition-colors">
            Login
          </button>
        </div>
      </footer>
    </div>
  );
}
