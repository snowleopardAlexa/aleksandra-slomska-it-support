import { withBase } from "@/lib/utils";
import type { SVGProps } from "react";

const ClaudeDesign = ({ className }: SVGProps<SVGSVGElement>) => (
  <img src={withBase("/tools/claude-design.png")} alt="Claude Design" className={`rounded-sm object-cover ${className ?? ""}`} />
);

export { ClaudeDesign };
