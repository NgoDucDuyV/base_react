import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        "font-black text-3xl md:text-5xl tracking-tighter hover:opacity-80 transition-opacity",
        className,
      )}>
      SHOP<span className="text-indigo-600">.</span>CO
    </Link>
  );
}
