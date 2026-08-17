import type { Metadata } from "next";
import { ServicePage } from "@/components/service-pages/ServicePage";
import { fieldMarketingData } from "@/components/service-pages/fieldMarketingData";

export const metadata: Metadata = {
  title: "Field Marketing",
  description:
    "Take your brand where your customers are. Activations, sampling, retail campaigns, campus campaigns, roadshows and brand ambassadors from Alve Studio.",
};

export default function FieldMarketingPage() {
  return <ServicePage config={fieldMarketingData} />;
}
