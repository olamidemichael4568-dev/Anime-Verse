import React, { useState } from "react";
import { Screen, NavProps } from "../types";

export const SignUpScreen: React.FC<NavProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-[218px]"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBobseFgtu5mAPB4Q65qDhb7eH2yJNK14Idh2ys5QFkJqnWg_eC_p4ptPADkTQ8cNuKyfXPRdTUrFvoEO3eCV1mGjl4F-AugO6QnavrvBataU3aCfsAXqmYBSMPZzB3ZKYXPiHbvfcPifsJQl7Yva6ZctrXhXbkskD78HuOeZjAWaDlY96V3JpzJRY6CKSPX6zciEMfUA3pV_iNJDWWD2eHLRSCIjoK48V6i5pqRywsuOkYJfekNLuZ-CZrv-8TA0r2doS_u-txK9I")',
            }}
          ></div>
        </div>
      </div>
      <h1 className="text-zinc-900 dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        Create Your Account
      </h1>

      <div className="flex max-w-[480px] flex-col gap-3 px-4 py-3 mx-auto w-full">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-zinc-800 dark:text-white text-base font-medium leading-normal pb-2">
            Full Name
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-zinc-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 h-14 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 p-4 text-base font-normal leading-normal"
            placeholder="Enter your full name"
          />
        </label>
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-zinc-800 dark:text-white text-base font-medium leading-normal pb-2">
            Email Address
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-zinc-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 h-14 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 p-4 text-base font-normal leading-normal"
            placeholder="Enter your email address"
            type="email"
          />
        </label>
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-zinc-800 dark:text-white text-base font-medium leading-normal pb-2">
            Password
          </p>
          <div className="flex w-full flex-1 items-stretch">
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl text-zinc-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:z-10 border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 h-14 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 p-4 border-r-0 pr-2 text-base font-normal leading-normal"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-zinc-500 dark:text-zinc-400 flex border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 items-center justify-center pr-4 rounded-r-xl border-l-0 pl-3 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "24px" }}
              >
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>
        </label>
      </div>

      <div className="px-4 py-3 mx-auto w-full max-w-[480px]">
        <button className="flex w-full items-center justify-center rounded-xl bg-primary h-14 text-white text-base font-bold leading-normal shadow-lg shadow-primary/30 transition-transform active:scale-95 hover:bg-primary/90">
          Create Account
        </button>
      </div>

      <div className="px-4 pt-4 pb-8 mx-auto w-full max-w-[480px] text-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => onNavigate(Screen.Login)}
            className="font-bold text-primary hover:underline"
          >
            Log In
          </button>
        </p>
      </div>

      <div className="px-4 py-3 mx-auto w-full max-w-[480px] flex items-center gap-4">
        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
        <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
          OR
        </span>
        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
      </div>

      <div className="px-4 py-3 mx-auto w-full max-w-[480px] flex flex-col gap-3">
        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 h-14 text-zinc-900 dark:text-white text-base font-bold leading-normal border border-zinc-200 dark:border-zinc-700 transition-transform active:scale-95 hover:bg-zinc-200 dark:hover:bg-zinc-700">
          <img
            alt="Google logo"
            className="h-6 w-6"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_DRKpRHMCdaI-5bUCIMdgrECtz_ZefdQ_6tS2DdLxkRacP65vT4raj2iK-Z62P3m-kPJJ4LE5fRcU0Ye5D_bPgUdwglVZmWLrfbVLGepI71ZnVrh5dIMa-xwColy7Rfep1qwmmdV9-4YkbPlHJiegAitq_3xh1ol-olCQQ7gIq44TZO5xUZxSm5aYIXcF9S5_4QewJe4CMFmroozwv0RjcJR-HR2rzqCfky119z94_AsIf1F1hBtGLDuK-1GEa3xyxkBgRTF3o7E"
          />
          Continue with Google
        </button>
        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 dark:bg-zinc-50 h-14 text-white dark:text-black text-base font-bold leading-normal transition-transform active:scale-95 hover:opacity-90">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.66 3.657a2.522 2.522 0 0 1 2.455-1.564 2.52 2.52 0 0 1 2.453 1.56l.002.004c.732 2.375-.78 4.706-2.455 4.706s-3.189-2.33-2.455-4.706Zm-4.99 15.158c1.33.02 2.65-.33 3.77-1.15-1.258-1.3-2.118-2.9-2.27-4.58-.936.4-1.99.58-3.04.5-2.07-.15-3.88-1.2-5.02-2.93-.243.68-.37 1.4-.38 2.14 0 3.32 2.17 6.13 5.94 6.02Z M16.126 9.423c2.422 0 4.25-2.04 4.148-4.63-.1-2.6-2.02-4.708-4.44-4.708-2.42 0-4.25 2.04-4.14 4.63.1 2.602 2.02 4.708 4.43 4.708Z"></path>
          </svg>
          Continue with Apple
        </button>
      </div>

      <div className="px-4 pt-4 pb-8 mx-auto w-full max-w-[480px] text-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
          By creating an account, you agree to our{" "}
          <a className="underline hover:text-primary" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="underline hover:text-primary" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};
