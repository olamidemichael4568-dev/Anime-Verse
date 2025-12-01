import React from "react";
import { Screen, NavProps } from "../types";

export const OnboardingWelcome: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-[#1A1A2E] group/design-root overflow-x-hidden font-display">
      <div className="flex-1 flex flex-col justify-end">
        {/* Skip Button */}
        <div className="absolute top-0 right-0 px-4 pt-3 flex w-full justify-end z-10">
          <button
            onClick={() => onNavigate(Screen.WelcomeScreen)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-transparent text-slate-500 dark:text-white/70 hover:text-slate-900 dark:hover:text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Skip</span>
          </button>
        </div>

        {/* HeaderImage */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-[420px]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl-3C0IpSsdcCSdtxeu8kIggve6i8xgMUCLJUh0zuJOGy2bjmYOXlAy6KsnUSOsu2l9bNIK0iuQmMcJQPqjBPuPhjGxWc6cXPmzsseeRxvhneTS2_j1e-X3tsedUXt-eo0LT7o7X5-uJS02fJfR10olGInQrDbFwzWYSkln20NGudZvUODmJeQBr5t-OXw-n7v0gnjU7jP7oSBYj8f-d1W2CtrL1BVAboZ-C04D4mivArpJkc3lAPjuaUB0EgnvQnx540LbAVh_wI")',
                backgroundPosition: "top center",
              }}
            ></div>
          </div>
        </div>

        {/* HeadlineText */}
        <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Your Anime Universe Awaits
        </h1>

        {/* BodyText */}
        <p className="text-slate-600 dark:text-white/80 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Discover your favorite characters, collect stunning wallpapers, and earn
          exclusive rewards.
        </p>
      </div>

      <div className="flex flex-col justify-end pb-8 pt-4">
        {/* PageIndicators */}
        <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
          <div className="h-2 w-2 rounded-full bg-[#F72585]"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20"></div>
        </div>

        {/* SingleButton */}
        <div className="flex px-4 py-3 justify-center">
          <button
            onClick={() => onNavigate(Screen.OnboardingFeatures)}
            className="flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#F72585] text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-[#F72585]/30 transition-transform active:scale-95"
          >
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};