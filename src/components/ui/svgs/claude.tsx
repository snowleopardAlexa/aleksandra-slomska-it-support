import { withBase } from "@/lib/utils";
import type { SVGProps } from "react";

const Claude = ({ className }: SVGProps<SVGSVGElement>) => (
  <img src={withBase("/tools/claude.webp")} alt="Claude" className={`rounded-sm object-cover ${className ?? ""}`} />
);

export { Claude };
