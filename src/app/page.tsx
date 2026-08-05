import { Hero } from "@/components/home/Hero";
import { Outcomes } from "@/components/home/Outcomes";
import { Advantage } from "@/components/home/Advantage";
import { Solutions } from "@/components/home/Solutions";
import { Lifecycle } from "@/components/home/Lifecycle";
import { Industries } from "@/components/home/Industries";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Outcomes />
      <Advantage />
      <Solutions />
      <Lifecycle />
      <Industries />
      <FinalCta />
    </>
  );
}
