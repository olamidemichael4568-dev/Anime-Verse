
import React from "react";
import { Screen, NavProps } from "../types";

export const LoginScreen: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display group/design-root overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover opacity-20"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHRymnLSYWIy_AFdAp-WTPmvzFj-Tbya0FijLpSMcvRgJGA6NYCQBBFy3q8lITfGW1vXh2izWlNPr3BoRNU8oGD-gWphe0Nkaif8MbpzXwCCXzs8Sjns8Kt5m-WqtHqFuCZu86i-9eRQiO5ZHyDIGJboZOwHf1xnpk8GyIxAV708e0AFGbFGRnuhtHBj8bT3jF4nYvOjb88HsaWLwELbFWPuqoiYyiKCcEGyseKFj7WScYGFlESnMbiNqmJm8v7iCOxGWa4kS-KbY")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-end grow px-6 pb-6">
        <div className="flex flex-col items-center w-full">
          {/* App Logo/Image */}
          <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shadow-lg shadow-primary/20 ring-2 ring-primary/20">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB79I-QDV7zhvkyPs56JkARgPI_nkn8qbAzJSiREhauzHXYCIiM97XZ7HvCM495WyJz4O-7HUAoWFFhvo5si5XBrgJyxlhMM9ckDVtfWBfYBvxTNAs1hkH2mZEPJ-kfV2H7PZun0raSqlrI0DCtlrDH0qoKU_0DOloAwmGKeWaXnNc6IfNqbz8I4b19D0y0086UQ6CMi75uDhB8yx93TcxiLqZ8tBKicA6ybMG4dJq-GybINnTx5fkrjehRhJW0GvfIykig99K1Zkk")',
              }}
            ></div>
          </div>

          {/* Headline */}
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-2">
            Welcome Back!
          </h1>

          {/* Body Text */}
          <p className="text-white/80 text-base font-normal leading-normal pb-8 text-center">
            Log in to continue your journey.
          </p>

          {/* Form */}
          <div className="w-full max-w-sm space-y-4">
            {/* Email Field */}
            <div className="flex flex-col w-full">
              <label className="flex flex-col w-full flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-lg shadow-sm">
                  <div className="text-white/60 flex bg-[#301c27] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined text-2xl">
                      mail
                    </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#301c27] h-14 placeholder:text-white/40 p-4 text-base font-normal leading-normal"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </label>
            </div>

            {/* Password Field */}
            <div className="flex flex-col w-full">
              <label className="flex flex-col w-full flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-lg shadow-sm">
                  <div className="text-white/60 flex bg-[#301c27] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined text-2xl">
                      lock
                    </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#301c27] h-14 placeholder:text-white/40 p-4 text-base font-normal leading-normal"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
              </label>
            </div>

            {/* Forgot Password Link */}
            <div className="w-full flex justify-end pt-1">
              <a
                className="text-primary text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary rounded"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={() => onNavigate(Screen.Home)}
              className="flex items-center justify-center w-full h-14 px-6 mt-6 rounded-lg bg-primary hover:bg-primary/90 active:bg-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary shadow-lg shadow-primary/30 transition-transform active:scale-95"
            >
              <span className="text-white text-base font-bold tracking-wide">
                Log In
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full max-w-sm my-8">
            <div className="flex-grow h-px bg-white/10"></div>
            <span className="mx-4 text-sm font-medium text-white/50">
              or continue with
            </span>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>

          {/* Social Logins */}
          <div className="flex w-full max-w-sm justify-center gap-4">
            <button
              onClick={() => onNavigate(Screen.Home)}
              className="flex items-center justify-center w-14 h-14 bg-[#301c27] rounded-lg hover:bg-[#452838] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-transform active:scale-95"
            >
              <img
                alt="Google logo"
                className="h-6 w-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcb-U3P7q6-gjNe_9Xrd2KsGmZLd_ZRbIFS4Di6997Zq79TJb2doCLQ3bClwkCNkOmBtih8Gxvf5iQac4fCWMmzXH8nLy6WdHDMngM98yxKId8SoasbzOmV__oOW7corAKVNMSm_PweZwOTp3-0BFTqpzNPUFMxYH3r445h92aNaAcNdalh1TLiwWgVeCv2cNxeNlX3NgSFPXypdkOQnE_jPbafYaO02Rb2GCXj7ohwzcPRusT7SycFKMLTvCWhqsxMaadCMMFkjI"
              />
            </button>
            <button
              onClick={() => onNavigate(Screen.Home)}
              className="flex items-center justify-center w-14 h-14 bg-[#301c27] rounded-lg hover:bg-[#452838] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-transform active:scale-95"
            >
              <img
                alt="Apple logo"
                className="h-6 w-6 brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9PpiefQUk1UCML3tvYOdJn7aq2oCTQKU8xD6u5hIazLVoiRxGI9Vy7sTVwICIPfCqHRrfy2zfs09bHVRNoXYig-bfZaSpapzI7OTO-lecjues9PxRfg2aOyUzSHO5SDZ3pMSRx1sJa5UDecoKFzapixBMW0KArgGNjRtFwtO8Ir7kNQ9e9MM5R8CyMfUZfpfBs_Ff1Lwo20skRAC5dwhV86oGmlHuiD1cQCfe48OYibEr4GRlPtlzlXJfACRlntmHtFlBbS7dBtk"
              />
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => onNavigate(Screen.SignUp)}
                className="font-bold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary rounded"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
