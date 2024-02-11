import styles from "@/app/ui/home.module.css";
import Header from "./ui/Header";
import Hero from "./ui/HeroSection";
import CalculateProfit from "./ui/CalculateProfit";
import DashboardSection from "./ui/DashboardSection";
import ReferralSection from "./ui/ReferralSection";
import GetStartedSection from "./ui/GetStartedSection";
import FooterSection from "./ui/FooterSection";

export default function Home() {
  return (
    <main
    className={`flex min-h-screen flex-col p-6 main-div bg-black  backdrop-filter backdrop-blur-md`}

      // className={`flex min-h-screen flex-col p-6 main-div bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-10 backdrop-filter backdrop-blur-md`}
    >
      <Header />
      <Hero />
      <CalculateProfit />
      <DashboardSection />
      <ReferralSection />
      <GetStartedSection />
      <FooterSection />
    </main>
  );
}
