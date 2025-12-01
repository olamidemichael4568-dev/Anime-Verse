import React from "react";
import { Screen, NavProps } from "../types";

export const OnboardingAllSet: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display dark group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="flex w-full flex-1 flex-col items-center justify-end px-4">
        <div className="flex w-full grow items-center justify-center">
          <div className="relative aspect-square w-full max-w-sm">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwCbNsod7AQH9hkIbshuWZnXbJ_fxvXOgg3W6vOjKfrWonjFCAdhP4S96PfM7c5RB_1EOgvNyw1RqSXKQ0Rxw0mPruG9D4ESI1r1mht99FN7dNq3GJWXC0ebwVf6vq4E2GC8buz8CPoZAWhaFr-BReJ-RSSJDpg5R5xx5CGwkXt7W4qLfj1Y25QPiUzehI-aeJrh3DYwKpaGE2GAaxqkeaHiZ6Ha_E4IOi8koEv7pfFe1P3sTntc6TYYXczhcRFoAn6VMuP-4BRVI")',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-background-light dark:bg-background-dark px-4 pb-8 pt-6">
        <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3">
          You're All Set!
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pb-3 pt-1 text-center max-w-xs">
          Explore characters, find wallpapers, and start your collection.
        </p>

        {/* Indicators */}
        <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
          <div className="h-2 w-2 rounded-full bg-primary/20"></div>
          <div className="h-2 w-2 rounded-full bg-primary/20"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </div>

        <div className="flex w-full max-w-md px-4 py-3 justify-center">
          <button
            onClick={() => onNavigate(Screen.WelcomeScreen)}
            className="flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 transition-transform active:scale-95"
          >
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};