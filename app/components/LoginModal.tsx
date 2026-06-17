"use client";

import { useState } from "react";
import Image from "next/image";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Supabase auth will be wired in here
    setTimeout(() => {
      setLoading(false);
      setError("Login coming soon — Supabase auth will be connected here.");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        {/* Top orange bar */}
        <div className="bg-[#E07820] px-8 py-8 text-center">
          <Image
            src="/dc-logo-white.svg"
            alt="Destination Church"
            width={52}
            height={52}
            className="mx-auto mb-4"
          />
          <h2 className="text-white font-black text-2xl">Welcome Back</h2>
          <p className="text-white/70 text-sm mt-1">Sign in to access your dashboard</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@destinationchurch.com"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#E07820] focus:ring-2 focus:ring-[#E07820]/20 transition-all"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-gray-700 font-semibold text-sm">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[#E07820] text-xs font-semibold hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#E07820] focus:ring-2 focus:ring-[#E07820]/20 transition-all"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E07820] hover:bg-[#c9691a] disabled:opacity-60 text-white font-black py-3.5 rounded-xl text-base transition-colors tracking-wide"
            >
              {loading ? "Signing in..." : "Access My Dashboard"}
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed">
            New to the portal? A member of the Connect Team will get you set up.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors text-2xl leading-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
