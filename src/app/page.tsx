import { CarouselOne } from "@/widgets/carousel";
import { Header } from "@/widgets/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header isLoggedIn={false} />
      <CarouselOne />
    </>
  );
}
