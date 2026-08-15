import type { Metadata } from "next";
import { ServicePage } from "@/components/service-pages/ServicePage";
import { creativeServicesData } from "@/components/service-pages/creativeServicesData";

export const metadata: Metadata = {
  title: "Creative Services",
  description:
    "Make your brand impossible to overlook. Brand identity, graphic design, social creatives, product visuals and video production from Alve Studio.",
};

export default function CreativeServicesPage() {
  return <ServicePage config={creativeServicesData} />;
}
