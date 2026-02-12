import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx"; // Corrected import path
import SEO from "../components/ui/SEO.jsx";

// ContactForm Component
function ContactForm() {
  const [state, handleSubmit] = useForm("xkovoalr");
  if (state.succeeded) {
    return (
      <p className="text-center body-default">
        Thanks for contacting me. I'll get back with you ASAP.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition mb-8"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="mt-8">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button className="mt-8" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <Section>
      <SEO
        title="Contact"
        description="Reach out to get in contact with me."
        url="/contact"
      />
      <Container className="max-w-Zxl">
        <header className="text-center">
          <h1 className="heading-page">Get in Touch With Me</h1>
          <p className="mt-2 body-default mb-8">
            Ready to work together? Send me a message and I'll get back to you ASAP.
          </p>
        </header>

        {/* Contact Form */}
        <ContactForm />
      </Container>
    </Section>
  );
}
