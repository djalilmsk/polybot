import { Paragraph } from "../ui/paragraph";
import { SectionTitle } from "../ui/section-title";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, Target, Trophy, Users, Users2 } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutUs() {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      scrollTrigger: {
        trigger: ref.current,
        start: "20% 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={ref} id="a-propos" className="space-y-12 pt-24">
      <SectionTitle>À Propos de Nous</SectionTitle>
      <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
        <Paragraph
          title="Notre Équipe"
          className="transition-all hover:shadow-md"
          icon={{ icon: Users2 }}
        >
          Nous sommes une équipe de 8 étudiants passionnés de l’ENP et de
          l’USTHB, alliant nos compétences en électronique, automatique et
          mécanique pour concevoir un robot autonome, performant et innovant.
        </Paragraph>

        <Paragraph
          title="Notre Ambition"
          className="transition-all hover:shadow-md"
          icon={{ icon: Trophy }}
        >
          Portés par notre passion pour la robotique, nous participons à
          l'édition 2025 de la compétition Eurobot, un événement international
          de renom rassemblant des équipes du monde entier autour de défis
          techniques et créatifs.
        </Paragraph>

        <Paragraph
          title="Notre Objectif"
          className="transition-all hover:shadow-md"
          icon={{ icon: Target }}
        >
          L’an dernier, notre école a atteint la 25ᵉ place parmi plus de 150
          équipes. Cette année, nous visons plus haut : démontrer notre
          expertise, repousser nos limites et représenter fièrement l’Algérie à
          l’international.
        </Paragraph>

        <Paragraph
          title="Votre Soutien"
          className="transition-all hover:shadow-md"
          icon={{ icon: Handshake }}
        >
          Explorez notre site pour découvrir notre projet, notre équipe, et
          comment vous pouvez nous soutenir dans cette aventure.
        </Paragraph>
      </div>
    </div>
  );
}

export default AboutUs;
