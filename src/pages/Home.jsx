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
      <Section>
        <Container>
          <h1 className="heading-hero">
            Hi, my name is David Begley, with a mission to make the web accessible to
            everyone.
          </h1>
          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about Building with React,
            Crafting clean, responsive, and user-centric websites. Currently I am learning
            Capstone, Tailwind CSS, ensuring every pixel serves a purpose. Javascript, and
            looking to build things that live at the intersection of art and logic. I
            don't just build components; I craft experiences using React and Tailwind CSS
            that are as inclusive as they are beautiful.
          </h2>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <Button as="a" href="/portfolio" variant="primary">
              Check out my current work : https://github.com/begs33
            </Button>
            <Button as="a" href="/resume" variant="secondary">
              View my resume
            </Button>
          </div>
        </Container>
      </Section>

      <TechStack />
      <Projects limit={3} />
      <Testimonials limit={3} />
    </div>
  );
}
