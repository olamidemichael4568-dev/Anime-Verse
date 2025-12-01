
import React, { useState } from "react";
import { Screen } from "./types";
import { OnboardingWelcome } from "./components/OnboardingWelcome";
import { OnboardingFeatures } from "./components/OnboardingFeatures";
import { OnboardingAllSet } from "./components/OnboardingAllSet";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { LoginScreen } from "./components/LoginScreen";
import { HomeScreen } from "./components/HomeScreen";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(
    Screen.OnboardingWelcome
  );

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    // Optional: Scroll to top on navigation if needed
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.OnboardingWelcome:
        return <OnboardingWelcome onNavigate={navigate} />;
      case Screen.OnboardingFeatures:
        return <OnboardingFeatures onNavigate={navigate} />;
      case Screen.OnboardingAllSet:
        return <OnboardingAllSet onNavigate={navigate} />;
      case Screen.WelcomeScreen:
        return <WelcomeScreen onNavigate={navigate} />;
      case Screen.SignUp:
        return <SignUpScreen onNavigate={navigate} />;
      case Screen.Login:
        return <LoginScreen onNavigate={navigate} />;
      case Screen.Home:
        return <HomeScreen onNavigate={navigate} />;
      default:
        return <OnboardingWelcome onNavigate={navigate} />;
    }
  };

  return <div className="app-container">{renderScreen()}</div>;
};

export default App;
