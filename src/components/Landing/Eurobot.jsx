import { SectionTitle } from "../ui/section-title";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Paragraph2({ children, title = "" }) {
  return (
    <div className="flex gap-8 border-l py-3 pl-5 max-md:flex-col">
      <h1 className="w-1/4 text-xl font-bold max-md:w-full">{title}</h1>
      <div className="text-secondary-foreground w-3/4 space-y-4 text-justify max-md:w-full max-sm:text-sm">
        {children}
      </div>
    </div>
  );
}

function Eurobot() {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      scrollTrigger: {
        trigger: ref.current,
        start: "00% 80%",
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
    <div id="eurobot" className="space-y-10 py-30">
      <div className="space-y-10">
        <SectionTitle>Qu’est-ce qu’Eurobot ?</SectionTitle>

        <div className="text-secondary-foreground max-w-4xl space-y-5 text-justify">
          <p>
            Eurobot est une compétition internationale de robotique organisée
            par Planète Sciences France, réunissant chaque année plus de 200
            équipes étudiantes venues de plus de 30 pays.
          </p>
          <p>
            L’édition 2024 a rassemblé plus de 1000 participants et a été suivie
            par plus de 50 000 spectateurs via des diffusions en ligne et des
            événements publics.
          </p>
        </div>
      </div>

      <div className="space-y-10" ref={ref}>
        <Paragraph2 title="Les objectifs du concours">
          <p>
            Chaque année, Eurobot propose un défi original qui met à l’épreuve
            les compétences des participants en robotique, électronique,
            automatique, intelligence artificielle et gestion de projet.
          </p>
          <p>
            Les robots doivent évoluer de manière autonome, interagir avec des
            objets et réaliser une série de tâches complexes dans un temps
            imparti.
          </p>
          <p>
            C’est une compétition exigeante qui allie rigueur technique,
            stratégie et esprit d’équipe.
          </p>
        </Paragraph2>

        <Paragraph2 title="Thématique 2025 : The show must go on!">
          <p>Cette année, les robots deviennent de véritables artistes !</p>
          <p>
            Ils se préparent pour le Robot-Rock-Tour, une série de spectacles
            caritatifs pour collecter des fonds.
          </p>
          <p>
            Mais organiser un concert demande de la préparation : les robots
            devront donc tout donner pour finaliser leur spectacle à temps !
          </p>
        </Paragraph2>

        <Paragraph2 title="Les dates clés">
          <p>
            <b>Phase nationale :</b> 8 avril 2025 à El Harrach, Algérie
          </p>
          <p>
            <b>Phase internationale :</b> 28 mai 2025 à La Roche-sur-Yon, France
          </p>
        </Paragraph2>

        <Paragraph2 title="Notre objectif">
          briller lors de la phase nationale et porter fièrement les couleurs de
          l’Algérie lors de la phase internationale !
        </Paragraph2>
      </div>
    </div>
  );
}

export default Eurobot;
