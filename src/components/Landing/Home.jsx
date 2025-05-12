import { BookOpen, Handshake } from "lucide-react";
import { Button } from "../ui/button";
import { Paragraph } from "../ui/paragraph";
import { SectionTitle } from "../ui/section-title";
import img from "@/assets/robot-removebg-preview.png";

function Home() {
  return (
    <div id="accueil" className="grid-cols-2 space-y-10 pt-36 sm:grid sm:pt-40">
      <div className="-mt-20 max-sm:hidden">
        <img src={img} alt="Eurobot" className="text-center" />
      </div>
      <div className="space-y-5 max-md:-mt-5 2xl:mt-20">
        <SectionTitle
          underline={false}
          className="mx-auto flex justify-between text-2xl max-sm:text-center sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Bienvenue sur notre équipe le site officiel de Eurobot !
        </SectionTitle>
        <div className="z-1 flex w-full gap-3 pb-5">
          <a href="#contacts" className="z-1 max-sm:w-full">
            <Button className="w-full">
              <Handshake /> Devenir Sponsor
            </Button>
          </a>

          <a href="#a-propos" className="z-1 w-full">
            <Button variant="secondary" className="z-1 max-sm:w-full">
              <BookOpen /> À Propos
            </Button>
          </a>
        </div>
      </div>
      <div className="-z-10 -mt-20 mb-20 h-60 sm:hidden">
        <img src={img} alt="Eurobot" className="mx-auto text-center" />
      </div>
    </div>
  );
}

export default Home;
