import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const NAV_LINKS = [
  { to: "#accueil", label: "Accueil" },
  { to: "#eurobot", label: "Eurobot" },
  { to: "#equipe", label: "Equipe" },
  { to: "#partenaire", label: "Partenaire" },
  { to: "#sponsoring", label: "Sponsoring" },
  { to: "#contacts", label: "Contact" },
];

function NavLinks({ listClasses = "", oneLinkClasses = "", children }) {
  const [currentLink, setCurrentLink] = useState("");

  useEffect(() => {
    const updateHash = () => setCurrentLink(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    updateHash();
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <ul className={listClasses}>
      {children}
      {NAV_LINKS.map(({ to, label }) => (
        <li key={label} className={oneLinkClasses}>
          <a
            href={to}
            className={cn(
              "hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-300",
              currentLink === to && "text-primary underline underline-offset-4",
            )}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
