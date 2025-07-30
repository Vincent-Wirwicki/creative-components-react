// import dynamic from "next/dynamic";
// import { ComponentType, Suspense } from "react";

// // Define prop types for each component
// type LettersGlitchProps = {
//   text: string;
//   duration?: number;
// };

// // Static imports for all components
// const LettersGlitchGSAP = dynamic<LettersGlitchProps>(
//   () => import("@/components/core/onHover/letter-glitch/gsap/LettersGlitch")
// );
// const LettersGlitchFramer = dynamic<LettersGlitchProps>(
//   () =>
//     import(
//       "@/components/core/onHover/letter-stagger/framer/LetterStaggerFramer"
//     )
// );

// // Mapping of component names to their dynamic imports, including prop types
// const componentMap: {
//   [key: string]: ComponentType<any>;
// } = {
//   LettersGlitchGSAP: LettersGlitchGSAP,
//   LettersGlitchFramer: LettersGlitchFramer,
// };

// interface ComponentData {
//   componentName: string;
//   title: string;
//   library: string;
//   props: any; // This will hold the props for each component
// }

// export default function Content() {
//   const data: ComponentData[] = [
//     {
//       componentName: "LettersGlitchGSAP",
//       title: "letter glitch",
//       library: "gsap",
//       props: { text: "GSAP Glitch" },
//     },
//     {
//       componentName: "LettersGlitchFramer",
//       title: "letter stagger",
//       library: "framer",
//       props: { text: "Framer Stagger", duration: 0.3 },
//     },
//   ];

//   return (
//     <section className="w-full flex flex-col gap-5 h-full p-5">
//       <div className="w-full border-b">
//         <h2 className="uppercase font-bold text-2xl">Components</h2>
//       </div>
//       <div className="grid grid-cols-2 gap-2 pr-2 h-fit overflow-y-auto scrollbar">
//         {data.map((item, index) => (
//           <DynamicCard key={index} componentData={item} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function DynamicCard({ componentData }: { componentData: ComponentData }) {
//   const Component = componentMap[componentData.componentName];

//   if (!Component) {
//     return <div>Component not found</div>;
//   }

//   return (
//     <div className="min-w-[200px] h-[250px] border border-neutral-800">
//       <Suspense fallback={<div>Loading...</div>}>
//         <Component {...componentData.props} />
//       </Suspense>
//     </div>
//   );
// }
