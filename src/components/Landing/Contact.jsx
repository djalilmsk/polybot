import { FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import { SectionTitle } from "../ui/section-title";

function Contact() {
  return (
    <div id="contacts" className="bg-background text-foreground pt- space-y-12">
      <div className="flex w-full flex-col items-center justify-between gap-10 px-4 py-12">
        <SectionTitle className="text-3xl">Connect with us</SectionTitle>
        <div className="flex flex-col items-start space-y-6">
          <div className="flex gap-8 text-3xl max-sm:flex-col">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex gap-3 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
              <h3 className="text-lg">Instagram name</h3>
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-primary flex gap-3 transition"
              aria-label="Email"
            >
              <FaEnvelope />
              <h3 className="text-lg">example@gmail.com</h3>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex gap-3 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
              <h3 className="text-lg">Facebook name</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="text-secondary-foreground mt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} POLYBOT.
      </div>
    </div>
  );
}

export default Contact;
