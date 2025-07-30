// import LettersGlith from "@/components/onHover/letter-glitch/vanilla/LettersGlitch";
// import LetterStaggerCSSOnly from "@/components/onHover/letter-stagger/css-only/LetterStaggerCSSOnly";
// import LetterStagger from "@/components/onHover/letter-stagger/framer/LetterStaggerFramer";
// import dynamic from "next/dynamic";

import GridTrail from "@/components/core/background/pixel-trail/framer/PixelTrail";

// import LazyGrid from "@/components/background/grid-mouse/LazyGrid";

// Client Component that will only be rendered on the client side
// const ClientSideComponent = dynamic(
//   () => import("@/components/background/grid-mouse/GridTrail"),
//   {
//     ssr: false,
//   }
// );
// import ParticlesCloud from "@/components/background/particles-cloud/ParticlesCloud";
// import ImageTrail from "@/components/onMove/image-trail/ImageTrail";

// import ImageTrail from "@/components/onMove/image-trail/ImageTrail";

export default function Home() {
  // const urls = [
  //   "/img/low-res/lizgrin-f-1.jpg",
  //   "/img/low-res/lizgrin-f-2.jpg",
  //   "/img/low-res/lizgrin-f-3.jpg",
  //   "/img/low-res/lizgrin-f-4.jpg",
  //   "/img/low-res/lizgrin-f-5.jpg",
  //   "/img/low-res/lizgrin-f-1.jpg",
  //   "/img/low-res/lizgrin-f-2.jpg",
  //   "/img/low-res/lizgrin-f-3.jpg",
  //   "/img/low-res/lizgrin-f-4.jpg",
  //   "/img/low-res/lizgrin-f-5.jpg",
  // ];flex items-center justify-center w-screen h-screen
  return (
    <div className="">
      {/* <ParticlesCloud /> */}
      {/* <LazyGrid /> */}
      <GridTrail cols={20} />
      {/* <ImageTrail urls={urls} threshold={80} height={150} width={150} /> */}
    </div>
  );
}
