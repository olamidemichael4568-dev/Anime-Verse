import React from "react";
import { Screen, NavProps } from "../types";

export const OnboardingFeatures: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <main className="flex flex-1 flex-col pb-6">
        {/* PageIndicators */}
        <div className="flex w-full flex-row items-center justify-center gap-3 py-5 mt-4">
          <div className="h-2 w-2 rounded-full bg-primary/30"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary/30"></div>
        </div>

        {/* HeaderImage */}
        <div className="@container px-4">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-lg min-h-[280px]"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACqFTkIu7DHoO73I3ilSJsb9hnMJ_HEjOpn6uy3iQTX8TmU26O4EEsbrLTVTNcU6zFCdbZfstbQWrZXNjF7m6Ex2gyzWtL1NEaBm01dRyjdV6I1880GUNfL4diuhGUbiJ-0aB0YFiXrcAyGgxtkNq7XXyHo3_qGUvIXpm06QeqeiIB-9rOTS0XqsD7eccWguGg-PsHj8qYzs8YrHpJ7TplwOv33X0P7oZPoCV3koDegvMIetYUnKEd6XOxQMNOeeg54Rum4KAUokg")',
            }}
          ></div>
        </div>

        {/* HeadlineText */}
        <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Explore a World of Anime
        </h1>

        {/* TextGrid */}
        <div className="grid grid-cols-1 gap-3 p-4">
          <div className="flex flex-1 gap-4 rounded-xl border border-slate-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 flex-row items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Discover Characters
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                Browse an extensive gallery of your favorite heroes.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-xl border border-slate-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 flex-row items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">image</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                HD Wallpapers
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                Find stunning art to customize your phone.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-xl border border-slate-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 flex-row items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">
                favorite
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Collect &amp; Earn
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                Save your favorites and unlock rewards.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col gap-4 px-4 pb-6 pt-4 items-center">
        {/* SingleButton */}
        <div className="flex w-full justify-center">
          <button
            onClick={() => onNavigate(Screen.OnboardingAllSet)}
            className="flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform active:scale-95"
          >
            <span className="truncate">Continue</span>
          </button>
        </div>
        {/* SkipButton */}
        <button
          onClick={() => onNavigate(Screen.WelcomeScreen)}
          className="text-slate-500 dark:text-slate-400 text-base font-bold leading-normal tracking-[0.015em] py-2 hover:text-slate-800 dark:hover:text-slate-200"
        >
          Skip
        </button>
      </footer>
    </div>
  );
};
