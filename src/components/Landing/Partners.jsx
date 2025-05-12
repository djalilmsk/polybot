import { useRef } from "react";
import { SectionTitle } from "../ui/section-title";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Partners() {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);
  return (
    <div id="partenaire" className="space-y-10 pt-30">
      <SectionTitle>Nos Partenaires</SectionTitle>
      <SectionTitle underline={false} className="text-xl sm:text-3xl">
        Une collaboration étudiante portée par une communauté engagée
      </SectionTitle>

      <p className="text-secondary-foreground">
        Notre aventure ne serait pas possible sans le{" "}
        <b className="text-popover-foreground">
          soutien des clubs et organisations étudiantes
        </b>{" "}
        qui partagent notre passion pour l’innovation technologique, la
        communication et l’esprit de collaboration. Grâce à eux, nous
        bénéficions d’une{" "}
        <b className="text-popover-foreground">
          visibilité précieuse sur les réseaux sociaux et plateformes numériques
        </b>{" "}
        les plus suivies de l’ENP.
      </p>
      <div className="py-12">
        <SectionTitle underline={false} className="mb-10 text-center text-xl sm:text-3xl">
          Visibilité sur les réseaux et supports partenaires
        </SectionTitle>

        <div ref={ref} className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-8">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">
                Réseaux sociaux de l’ENP, VIC et CAP
              </h3>
              <div className="flex justify-between gap-4 text-center ">
                {[
                  { value: "44.9k", label: "followers" },
                  { value: "40k", label: "vues moyennes" },
                  { value: "1550k", label: "likes cumulés" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-muted flex w-full flex-col items-center justify-center rounded-xl p-4"
                  >
                    <span className="text-2xl font-semibold">{stat.value}</span>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">
                Page dédiée sur le site officiel de l’IEEE ENP Student Branch
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  "📌 Présentation du projet",
                  "🔗 Accès direct pour les sponsors",
                  "📈 Suivi de l’évolution de l’équipe et du robot",
                ].map((item, index) => (
                  <div key={index} className="bg-muted rounded-xl p-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center ">
            <p className="bg-card text-md text-secondary-foreground rounded-xl p-6 leading-relaxed md:text-lg shadow-sm">
              Ces chiffres traduisent notre{" "}
              <strong className="text-popover-foreground">
                rayonnement croissant
              </strong>{" "}
              au sein de la communauté étudiante et technique en Algérie, et
              témoignent du{" "}
              <strong className="text-popover-foreground">
                potentiel de visibilité
              </strong>{" "}
              offert à nos partenaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
