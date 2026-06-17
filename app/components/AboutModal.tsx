"use client";

import Image from "next/image";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function AboutModal({ isOpen, onClose, onLogin }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">

        {/* Header */}
        <div className="bg-gray-950 rounded-t-3xl px-10 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/dc-logo-white.svg" alt="DC" width={36} height={36} className="opacity-80" />
            <div>
              <p className="text-white/40 text-[10px] font-semibold tracking-[0.25em] uppercase">Destination Church</p>
              <p className="text-white font-black text-lg leading-tight">
                Your Spiritual <span className="italic font-normal" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Formation Portal.</span>
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors text-2xl font-light leading-none">×</button>
        </div>

        {/* Body */}
        <div className="px-10 py-10 flex flex-col gap-10">

          {/* What is this */}
          <div>
            <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-3">What Is This</p>
            <h2 className="font-black text-gray-900 text-2xl leading-snug mb-4">
              God has a great plan for you.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              The Destination Church Spiritual Formation Portal is a personalized discipleship experience built exclusively for the Destination Church family. It combines high-level discipleship content with practical, measurable learning — giving every member an intentional path forward in their walk with God.
            </p>
          </div>

          {/* Four Centers */}
          <div>
            <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-5">Four Centers of Growth</p>
            <div className="flex flex-col divide-y divide-gray-100">
              {[
                { number: "01", title: "Bible Explorer", desc: "Studies, reading plans, and application activities that move Scripture from the page to your life." },
                { number: "02", title: "Marriage & Family", desc: "Enrichment resources designed to strengthen your marriage and family from the inside out." },
                { number: "03", title: "Community Connect", desc: "Life Group curriculum and resources that help your community learn and grow together." },
                { number: "04", title: "Leadership Development", desc: "Training and a ministerial development track for those called to lead and serve." },
              ].map((hub) => (
                <div key={hub.number} className="py-4 flex items-start gap-5">
                  <span className="text-[#E07820] font-black text-xs tracking-widest shrink-0 mt-0.5">{hub.number}</span>
                  <div>
                    <p className="font-black text-gray-900 mb-1">{hub.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{hub.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-5">How It Works</p>
            <div className="flex flex-col gap-5">
              {[
                { step: "01", title: "Build Your Plan", desc: "Choose activities from the four centers to create a personalized Spiritual Formation Plan at your own pace." },
                { step: "02", title: "Learn & Engage", desc: "Dive into resources, guided content, and interactive activities designed to help you truly grow." },
                { step: "03", title: "Track & Celebrate", desc: "Earn badges as you hit milestones. Your dashboard keeps your progress visible and your motivation high." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5">
                  <span
                    className="italic text-gray-200 leading-none shrink-0"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "36px", fontWeight: 400 }}
                  >
                    {item.step}
                  </span>
                  <div className="pt-1">
                    <p className="font-black text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-gray-950 rounded-2xl p-8">
            <p className="text-[#E07820] text-[10px] font-black tracking-[0.3em] uppercase mb-3">Getting Started</p>
            <p className="text-white font-black text-lg leading-snug mb-2">
              This discipleship portal is for you and your family.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Accounts are created by Admin. If you are a part of Destination Church and do not yet have access, reach out and a member of the Connect Team will get you set up.
            </p>
            <button
              onClick={() => { onClose(); onLogin(); }}
              className="bg-[#E07820] hover:bg-[#c9691a] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors tracking-wide"
            >
              Access Your Dashboard
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
