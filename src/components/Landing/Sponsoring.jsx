import { useRef } from "react";
import { SectionTitle } from "../ui/section-title";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const advantages = [
  {
    title: "Valorisez votre image",
    description:
      "Affichez votre engagement social en soutenant l'éducation, l'innovation et la jeunesse algérienne.",
  },
  {
    title: "Réseautage stratégique",
    description:
      "Accédez à des opportunités de networking avec des entreprises et sponsors nationaux et internationaux.",
  },
  {
    title: "Visibilité médiatique",
    description:
      "Profitez de notre couverture sur les réseaux sociaux, la presse, la TV et la radio.",
  },
  {
    title: "Présence de marque",
    description:
      "Votre logo sur nos T-shirts, bannières, affiches, robot, vidéos et présentations officielles.",
  },
  {
    title: "Fierté nationale",
    description:
      "Soutenez une équipe qui représente fièrement l’Algérie à l’échelle internationale.",
  },
  {
    title: "Impact éducatif",
    description:
      "Encouragez la formation de jeunes talents en ingénierie et robotique.",
  },
  {
    title: "Partenariat institutionnel",
    description:
      "Créez un lien fort avec l’École Nationale Polytechnique, acteur majeur de l’ingénierie en Algérie.",
  },
  {
    title: "Engagement technologique",
    description:
      "Participez activement à un projet innovant à forte valeur ajoutée.",
  },
];

function Card() {
  const ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "-=10% 80%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    tl.from(ref.current.children, { scale: 0.5 });
  });
  return (
    <div className="">
      <SectionTitle underline={false} className="py-10 text-3xl">
        Avantages pour votre entreprise
      </SectionTitle>
      <div ref={ref} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((advantage, index) => (
          <div key={index} className="rounded-xl border p-5">
            <h3 className="mb-2 text-xl font-semibold">{advantage.title}</h3>
            <p className="text-secondary-foreground text-sm">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg font-medium">
          Vous souhaitez devenir partenaire ?{" "}
          <a href="#contacts" className="underline-offset-3 hover:underline">
            Contactez-nous dès maintenant !
          </a>
        </p>
      </div>
    </div>
  );
}

function Sponsoring() {
  return (
    <div id="sponsoring" className="space-y-10 pt-30">
      <SectionTitle>Sponsoring</SectionTitle>
      <SectionTitle underline={false} className="text-3xl">
        Pourquoi nous soutenir ?
      </SectionTitle>
      <div className="text-secondary-foreground space-y-5">
        <p>
          En devenant partenaire de notre équipe,{" "}
          <b className="text-popover-foreground">
            vous ne contribuez pas seulement à un projet étudiant : vous
            participez activement à la promotion de l’innovation, de
            l’excellence technologique et du savoir-faire Algérien sur la scène
            internationale
          </b>
          .
        </p>
        <p>
          Nous sommes une équipe dynamique d'étudiants ingénieurs passionnés par
          la robotique et l’intelligence artificielle, engagés dans une
          compétition internationale exigeante :{" "}
          <b className="text-popover-foreground">Eurobot 2025</b>.
        </p>
        <p>
          Votre soutien est{" "}
          <b className="text-popover-foreground">
            un levier puissant pour valoriser votre image
          </b>
          , tout en encourageant la jeunesse, la créativité et les compétences
          locales.
        </p>
      </div>

      <Card />
    </div>
  );
}

export default Sponsoring;
