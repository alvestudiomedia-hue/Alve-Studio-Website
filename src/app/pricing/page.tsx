import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Digital products. Growth. Creative. Delivery. Field execution. Transparent starting prices for every Alve Studio service.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
