import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Button from "../components/ui/Button.jsx";
import { FaGithub } from "react-icons/fa";
import { GiGoat } from "react-icons/gi";
import SEO from "../components/ui/SEO.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="David Begley - UX Architect and Frontend Developer"
        url="/"
      />
      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text Content -2/3 */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="heading-hero">
                Hi, my name is David Begley, with a mission to make the web accessible to
                everyone.
              </h1>
              <h2 className="mt-4 body-large">
                I'm a UX Designer and Frontend Developer passionate about Building with
                React, Crafting clean, responsive, and user-centric websites. Currently I
                am learning Capstone, Tailwind CSS, ensuring every pixel serves a purpose.
                Javascript, and looking to build things that live at the intersection of
                art and logic. I don't just build components; I craft experiences using
                React and Tailwind CSS that are as inclusive as they are beautiful.
              </h2>
              <div className="flex gap-4 mt-8 flex-wrap justify-center">
                <Button as="a" href="/portfolio" variant="primary">
                  Check out my current work
                </Button>
                <Button as="a" href="/resume" variant="secondary">
                  View my resume
                </Button>
              </div>
            </div>
            {/* Circular Image - 1/3 */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 card-avatar">
                <img
                  src="https://picsum.photos/320?random=100"
                  alt="David Begley"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <TechStack />
      <Projects limit={3} />
      <Testimonials limit={3} />
    </div>
  );
}
