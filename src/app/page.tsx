import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <h1>hello</h1>
      <div className="border-3 text-center bg-orange-300 p-5 font-(family-name:Hello Paris) text-5xl font-[Hello Paris] italic font-black ">
      <h1>NYVARRA</h1>
    </div>
    <div className="flex m-5 border-3 flex-col  sm:flex-row">
       <Image
       className="flex-1 m-auto w-100% h-100%"
      src="/1.png"
      alt="Picture of the author"
      width={500}
      height={500}
      priority
    />
    <p className="flex-1 m-auto p-5 text-3xl italic   ">
      Nyvarra is a modern formalwear brand crafting elegant, 
      empowering silhouettes for ambitious women who lead with 
      confidence, style  and  purpose
      </p>
    </div>
    </div>
  );
}
