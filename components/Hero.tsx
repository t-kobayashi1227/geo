import { HeroLabels } from "./HeroLabels";
import { PageHero } from "./PageHero";

export function Hero() {
  return (
    <div className="mb-[60px] md:mb-[64px]">
      <PageHero>
        <HeroLabels />
      </PageHero>
    </div>
  );
}
