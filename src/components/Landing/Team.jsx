import { Bolt, CircuitBoard, Workflow } from "lucide-react";
import { SectionTitle } from "../ui/section-title";
import électronique from "@/assets/électronique.jfif";
import automatique from "@/assets/automatique.jfif";
import mécanique from "@/assets/mécanique.jfif";
import zakaria from "@/assets/zakaria.jpg";
import mohamed from "@/assets/mohamed.jpg";
import rayan from "@/assets/rayan.jpg";
import adem from "@/assets/adem.jpg";
import aymen from "@/assets/aymen.jpg";
import abdeljalil from "@/assets/abdeldjalil.jpg";
import seif from "@/assets/seif.jpg";
import rached from "@/assets/rached.jpg";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Card({ title = "", image = "", children }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={
          "absolute top-0 left-0 flex h-full w-full flex-col justify-between p-5 text-white md:p-8"
        }
      >
        <div className="bg-secondary absolute top-0 left-0 -z-1 h-full w-full" />
        <div className="absolute top-0 left-0 -z-4 h-full w-full bg-[#191919] opacity-70" />
        <img
          src={image}
          className="absolute top-0 left-0 -z-2 h-full w-full text-center mix-blend-multiply"
          alt="image"
        />
        {children}
        <h2 className="text-lg sm:text-xl md:font-semibold lg:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "KOUZOU Zakaria",
    role: "Chef d’équipe",
    image: zakaria,
  },
  {
    name: "MESKALI Mohamed Ali",
    role: "Chef technique",
    image: mohamed,
  },
  {
    name: "ABDI Adem",
    role: "Responsable conception mécanique",
    image: adem,
  },
  {
    name: "SAADANE Rached",
    role: "Responsable navigation et soudage",
    image: rached,
  },
  {
    name: "MEDDAS Aymen",
    role: "Responsable configuration et camera",
    image: aymen,
  },
  {
    name: "BETROUNI Abdeljalil",
    role: "Responsable camera et PAMI",
    image: abdeljalil,
  },
  {
    name: "AGUENAROUS Mohamed Rayan",
    role: "Responsable communication et relations externes",
    image: rayan,
  },
  {
    name: "BENCHEIKH Seif Eddine Omar",
    role: "Resp. commande mécanique et asservissement",
    image: seif,
  },
];

function TeamCards() {
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
      <h2 className="mb-6 text-center text-2xl font-bold">Notre Équipe</h2>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex min-h-40 flex-col overflow-hidden rounded-xl border"
          >
            <img
              src={member.image}
              alt="image"
              className="w-full object-cover"
            />
            <div className="w-[90%] p-4">
              <h3 className="text-base font-semibold">{member.name}</h3>
              <p className="text-secondary-foreground mt-1 text-sm max-sm:text-xs">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Team() {
  const ref = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "play none none reverse",
        start: "-=10% 80%",
        // markers: true,
      },
    });

    timeline.from(ref.current.children, {
      duration: 0.8,
      yPercent: 100,
      stagger: 0.1,
      ease: "expo.inOut",
    });
  });
  return (
    <div id="equipe" className="space-y-10 sm:pt-24 ">
      <SectionTitle>Membres de l’équipe</SectionTitle>
      <p className="text-secondary-foreground">
        Notre équipe est composée de{" "}
        <b className="text-popover-foreground">
          8 étudiants passionnés de robotique
        </b>{" "}
        :
      </p>
      <div
        ref={ref}
        className="grid h-96 grid-cols-2 gap-1 overflow-hidden lg:h-70 lg:grid-cols-3"
      >
        <Card title="4 élèves ingénieurs en électronique" image={électronique}>
          <CircuitBoard className="sm:h-12 sm:w-12" />
        </Card>
        <Card title="3 élèves ingénieurs en automatique" image={automatique}>
          <Workflow className="sm:h-12 sm:w-12" />
        </Card>
        <Card title="1 étudiant en mécanique" image={mécanique}>
          <Bolt className="sm:h-12 sm:w-12" />
        </Card>
      </div>
      <p className="text-secondary-foreground">
        Notre équipe est composée de{" "}
        <b className="text-popover-foreground">
          8 étudiants passionnés de robotique
        </b>
        , unissant leurs forces pour concevoir un robot capable de relever les
        défis techniques d’Eurobot 2025.
      </p>
      <p className="text-secondary-foreground">
        Issus de{" "}
        <b className="text-popover-foreground">
          l’École Nationale Polytechnique (ENP)
        </b>{" "}
        et de <b className="text-popover-foreground">l’USTHB</b>, nous combinons
        nos expertises —{" "}
        <b className="text-popover-foreground">
          4 électroniciens, 3 automaticiens et 1 mécanicien
        </b>{" "}
        — pour former un groupe complémentaire et soudé.
      </p>
      <TeamCards />
    </div>
  );
}

export default Team;
