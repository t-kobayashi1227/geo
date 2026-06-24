import { AboutSection } from "@/components/AboutSection";
import { AssociationSection } from "@/components/AssociationSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { RecruitSection } from "@/components/RecruitSection";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <RecruitSection />
        <NewsSection />
        <AssociationSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
