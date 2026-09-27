import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal-content";

export default function Privacy() {
  const data = getLegalPage("privacy");
  return <LegalPage {...data} />;
}
