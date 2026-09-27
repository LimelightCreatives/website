import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal-content";

export default function CodeOfConduct() {
  const data = getLegalPage("code-of-conduct");
  return <LegalPage {...data} />;
}
