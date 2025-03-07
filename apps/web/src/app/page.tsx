import {
  BtnGetStarted,
  HeroDescription,
  HeroTitle,
} from "@/components/pages/home/HeroSection";
import ShowCase from "@/components/pages/home/ShowCase";
import "@/styles/home/page.css";

import BenefitsSection from "@/components/pages/home/BenefitsSection";
import {
  CardList,
  InnovationDesc,
  InnovationTitle,
} from "@/components/pages/home/Innovation";

const Home = () => {
  return (
    <>
      <main className="home">
        <section className="hero">
          <div className="intro">
            <HeroTitle>GradeSense</HeroTitle>
            <HeroDescription>
              Enhancing Education, One Grade at a Time Empowering Teachers to
              Focus on What Truly Matters
            </HeroDescription>
            <div className="button-container">
              <BtnGetStarted />
            </div>
          </div>
        </section>
        <section className="innovation">
          <InnovationTitle />
          <InnovationDesc>
            Making AI which is safe, effective, and useful for education
            requires more than the typical AI considerations. It should be
            reliable, keep you informed every step of the way, and it should
            feel more like collaborating with a colleague than using a machine.
          </InnovationDesc>
          <div className="cards">
            <CardList />
          </div>
        </section>
        <section className="showcase">
          <ShowCase />
        </section>
        {/* <section className="feature">
          <FeatureTitle text="Powerful Features" />
          <FeatureDescription text="Everything you need to transform your grading experience" />
        </section> */}
        <section className="trans">
          <BenefitsSection />
        </section>
      </main>
    </>
  );
};

export default Home;
