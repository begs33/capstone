import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import { FaGithub } from "react-icons/fa";
import { GiGoat } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Section>
        <Container>
          <h1 className="heading-hero">
            Hi, my name is David Begley, I create things for the web.
          </h1>
          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating
            beautiful, accessible, and user-friendly web experiences.
          </h2>
          <div className="flex gap-4">
            <Button variant="primary" rightIcon={<GiGoat />} size="lg">
              Get in Touch
            </Button>
            <Button variant="secondary" size="md">
              View my Work
            </Button>
            <Button variant="link" size="lg">
              Read my Blog
            </Button>
            <Button
              as="a"
              href="https://www.google.com"
              variant="link"
              size="md"
            >
              Visit Google
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
