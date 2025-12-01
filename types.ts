
export enum Screen {
  OnboardingWelcome = 'OnboardingWelcome',
  OnboardingFeatures = 'OnboardingFeatures',
  OnboardingAllSet = 'OnboardingAllSet',
  WelcomeScreen = 'WelcomeScreen',
  SignUp = 'SignUp',
  Login = 'Login',
  Home = 'Home',
}

export interface NavProps {
  onNavigate: (screen: Screen) => void;
}
