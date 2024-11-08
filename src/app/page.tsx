import { SectionLayout } from "@/shared/sectionlayout/ui";
import { CarouselOne } from "@/widgets/carousel";
import { Header } from "@/widgets/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header isLoggedIn={true} />
      <SectionLayout>
        <CarouselOne />
      </SectionLayout>
    </>
  );
}
