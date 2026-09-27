import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal-content";

export default function Safeguarding() {
  const data = getLegalPage("safeguarding-policy");
  return <LegalPage {...data} />;
}
