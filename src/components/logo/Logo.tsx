import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/"
        className={cn(
          "font-integral text-3xl md:text-4xl shrink-0",
          className,
        )}>
        SHOP.CO
      </Link>
    </div>
  );
}
