import { User, Users2 } from "lucide-react";

export function Paragraph({ title = "", children, icon }) {
  return (
    <div className="flex w-full gap-4">
      <div className="flex w-1/4 max-sm:w-1/5 flex-col items-center gap-3 max-sm:justify-center">
        {icon && <icon.icon className="h-12 w-12 max-sm:h-8 max-sm:w-8" />}
        <p className="text-center font-bold sm:text-nowrap">{title}</p>
      </div>
      <p className="text-secondary-foreground w-3/4 border-l-1 pl-3 max-sm:text-sm text-justify">
        {children}
      </p>
    </div>
  );
}
