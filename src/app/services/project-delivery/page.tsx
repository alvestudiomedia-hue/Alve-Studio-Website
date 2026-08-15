import type { Metadata } from "next";
import { ServicePage } from "@/components/service-pages/ServicePage";
import { projectDeliveryData } from "@/components/service-pages/projectDeliveryData";

export const metadata: Metadata = {
  title: "Project Delivery & Management",
  description:
    "From strategy to launch, we keep your project moving. Discovery, agile delivery, backlog management, stakeholder communication and launch coordination from Alve Studio.",
};

export default function ProjectDeliveryPage() {
  return <ServicePage config={projectDeliveryData} />;
}
