import React from "react";
import { Screen, NavProps } from "../types";

export const WelcomeScreen: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWLihu4LAeBXoM-4gwxuOMNYmwM0D_M5WUy9T2cJYiLDKuooZdKwCbJrY-8iLZD2rc9fPHVbv0WpGDsb04MYtUsXwAz2CQqoI0WVRdKkwJ1j4WmS9LtX547sPbUscKSMiXtO5zfVbzrjkXacU5_qErWSp2YKGtc3CErrJA7F0JDgqDpd9Pp8vmQhc2VaAyziMhz7afCl2-A1SsYTA4NonJrK5KDXRGRxcWGdND4yzkl0TIbPmx5yzfC6sloH1QVuh6Ens4S9pnzsM")',
            opacity: 0.15,
          }}
        ></div>
        {/* Gradient overlay to ensure text readability if image fails or opacity issues */}
        <div className="absolute inset-0 bg-background-dark/80 mix-blend-multiply"></div>
      </div>

      <div className="relative flex flex-col h-full min-h-screen z-10">
        <header className="flex-grow flex flex-col justify-center items-center px-4 pt-16">
          <div className="flex items-center justify-center w-24 h-24 bg-primary/20 rounded-xl mb-4 backdrop-blur-sm">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontSize: "48px" }}
            >
              bolt
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            AnimeVerse
          </h1>
        </header>

        <main className="flex-grow flex flex-col justify-end pb-8">
          <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Your Ultimate Anime Hub
          </h2>

          <div className="flex justify-center w-full">
            <div className="flex w-full flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
              <button
                onClick={() => onNavigate(Screen.SignUp)}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform active:scale-95 hover:bg-primary/90"
              >
                <span className="truncate">Sign Up</span>
              </button>
              <button
                onClick={() => onNavigate(Screen.Login)}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary/20 dark:bg-[#482336] text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform active:scale-95 hover:bg-primary/30"
              >
                <span className="truncate">Login</span>
              </button>
            </div>
          </div>

          <p className="text-[#c992ad] text-sm font-normal leading-normal pb-3 pt-3 px-4 text-center">
            Or continue with
          </p>

          <div className="flex justify-center items-center gap-4 px-4 py-3">
            <button className="flex items-center justify-center w-14 h-14 bg-primary/20 dark:bg-[#482336] rounded-full text-white transition-transform active:scale-95 hover:bg-primary/30">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.0001 14.482C10.2311 14.482 8.53009 15.148 7.27309 16.425C8.11809 17.513 9.32409 18.33 10.7381 18.665C10.9851 18.003 11.4501 17.43 12.0001 16.995C12.5501 17.43 13.0151 18.003 13.2621 18.665C14.6761 18.33 15.8821 17.513 16.7271 16.425C15.4701 15.148 13.7691 14.482 12.0001 14.482Z"></path>
                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4C13.061 4 14.077 4.423 14.828 5.172C15.577 4.423 16.594 4 17.654 4C18.399 4 19.113 4.223 19.715 4.619C18.675 3.393 17.135 2.593 15.405 2.593C14.288 2.593 13.261 3.013 12.441 3.693C12.296 3.805 12.152 3.904 12 4ZM6.285 4.619C6.887 4.223 7.601 4 8.346 4C9.406 4 10.423 4.423 11.172 5.172C11.923 4.423 12.939 4 14 4C14.152 3.904 14.296 3.805 14.441 3.693C13.621 3.013 12.594 2.593 11.477 2.593C9.747 2.593 8.207 3.393 7.167 4.619C7.494 4.391 7.859 4.223 8.243 4.116C8.277 4.108 8.311 4.101 8.346 4C7.869 4 7.411 4.103 7 4.275V4.275C6.736 4.384 6.495 4.509 6.285 4.619ZM4 12C4 11.849 4.004 11.698 4.012 11.549C4.468 9.546 5.648 7.787 7.273 6.425C6.016 7.702 5.35 9.364 5.35 11.132C5.35 12.9 6.016 14.563 7.273 15.839C5.648 14.478 4.468 12.718 4.012 10.716C4.004 10.865 4 11.017 4 11.167V12ZM16.727 6.425C18.352 7.787 19.532 9.546 19.988 11.549C20 11.698 20 11.849 20 12V11.167C20 11.017 19.996 10.865 19.988 10.716C19.532 8.713 18.352 6.954 16.727 5.592V5.592C15.47 7.702 14.231 9.429 12.984 10.669C12.651 10.953 12.327 11.229 12 11.5C14.606 10.334 16.727 8.368 16.727 6.425Z"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-primary/20 dark:bg-[#482336] rounded-full text-white transition-transform active:scale-95 hover:bg-primary/30">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.0002 2C6.47715 2 2.00024 6.47715 2.00024 12C2.00024 17.5228 6.47715 22 12.0002 22C17.5228 22 22.0002 17.5228 22.0002 12C22.0002 6.47715 17.5228 2 12.0002 2ZM12.0002 3.67391C16.5915 3.67391 20.3263 7.4087 20.3263 12C20.3263 16.5913 16.5915 20.3261 12.0002 20.3261C7.40891 20.3261 3.67413 16.5913 3.67413 12C3.67413 7.4087 7.40891 3.67391 12.0002 3.67391ZM16.9241 7.07609C16.4524 7.07609 15.9926 7.25217 15.6306 7.61413C15.2687 7.97609 15.0926 8.43152 15.0926 8.90761C15.0926 9.3837 15.2687 9.83913 15.6306 10.1967C15.9926 10.5543 16.4524 10.7391 16.9241 10.7391C17.3959 10.7391 17.8556 10.5543 18.2176 10.1967C18.5796 9.83913 18.7556 9.3837 18.7556 8.90761C18.7556 8.43152 18.5796 7.97609 18.2176 7.61413C17.8556 7.25217 17.3959 7.07609 16.9241 7.07609ZM8.90783 7.07609C8.43598 7.07609 7.9763 7.25217 7.61435 7.61413C7.25239 7.97609 7.0763 8.43152 7.0763 8.90761C7.0763 9.3837 7.25239 9.83913 7.61435 10.1967C7.9763 10.5543 8.43598 10.7391 8.90783 10.7391C9.37967 10.7391 9.83935 10.5543 10.2013 10.1967C10.5633 9.83913 10.7393 9.3837 10.7393 8.90761C10.7393 8.43152 10.5633 7.97609 10.2013 7.61413C9.83935 7.25217 9.37967 7.07609 8.90783 7.07609ZM12.0002 12.9239C10.5176 12.9239 9.17413 13.7826 8.35239 15.2283C9.07087 15.9913 10.0263 16.5435 11.1132 16.8043C11.3785 16.037 11.9676 15.4239 12.7263 15.0543L12.0002 12.9239ZM15.648 15.2283C14.8263 13.7826 13.483 12.9239 12.0002 12.9239L11.2741 15.0543C12.0328 15.4239 12.622 16.037 12.8872 16.8043C13.9741 16.5435 14.9296 15.9913 15.648 15.2283Z"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-primary/20 dark:bg-[#482336] rounded-full text-white transition-transform active:scale-95 hover:bg-primary/30">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM16.837 8.162L15.423 15.234C15.279 15.939 14.815 16.12 14.238 15.828L10.83 13.38L9.274 14.882C9.096 15.06 8.927 15.229 8.57 15.229L8.714 11.751L14.544 6.556C14.86 6.276 14.502 6.117 14.103 6.398L7.022 10.871L3.712 9.903C3.016 9.696 2.998 9.212 3.843 8.877L15.937 4.392C16.514 4.164 17.062 4.548 16.837 5.343V8.162Z"></path>
              </svg>
            </button>
          </div>

          <div className="px-4 pt-4 pb-2">
            <p className="text-xs text-center text-gray-400 dark:text-gray-500">
              By signing up, you agree to our{" "}
              <a
                className="font-semibold text-gray-300 dark:text-gray-400 hover:text-white"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="font-semibold text-gray-300 dark:text-gray-400 hover:text-white"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};