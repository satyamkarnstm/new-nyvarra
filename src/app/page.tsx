import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />

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
          Nyvarra is a modern formalwear brand crafting elegant, empowering
          silhouettes for ambitious women who lead with confidence, style and
          purpose
        </p>
      </div>
      <Footer />
    </div>
  );
}
