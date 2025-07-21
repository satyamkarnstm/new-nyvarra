import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

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
      <div className="m-10">
        <h2 className="text-center text-3xl">THE FABRIC FLEX (JOURNEY)</h2>
        <p className="text-lg">
          Our pieces are crafted from PET—recycled plastic bottles transformed
          into fabric that feels like luxury, performs with strength, and
          presents with the polish of high fashion. <br />
          <br />
          💧 Sweat-resistant <br />
          ✈️ Anti-crease <br />
          ☁️ Light but structured <br />
          🔥 Flatters like it was made just for you <br />
          ♻️ And yeah, zero guilt. <br />
          <br />
          Your old water bottle just became your sharpest blazer!
        </p>
        <div className="text-center border-3  m-auto rounded-xl bg-blue-400 w-2xs">
          <Link href="/story">Read More</Link>
        </div>
      </div>
      <div className="m-10">
        <h2 className="text-center text-3xl m-5"> THE WHY</h2>
        <p className="text-lg">
          Because you’ve outgrown outfits that play it safe. You know what power
          feels like and your clothes should too. Tailored, structured,
          breathable. Designed to move when you do. Made from recycled plastic
          bottles – seamlessly disguised as power dressing Feels like luxury.
          Performs like armour. Clean cuts, bold energy, and the kind of fit
          that says: “I’m not here to participate. I’m here to run it.”
        </p>
        <br />
        <p className="text-lg">
          This isn’t just a brand. It’s a callout. To every woman who’s done
          dressing down to be taken seriously. To every one of us choosing what
          we wear with intention. <br />
          Follow us. Tag us. Wear your why. Wear your rise. Wear your power.{" "}
        </p>
        <p className=" text-3xl text-center ">
          {" "}
          #Nyvarra | #WearYourWhy | <br /> #WearYourRise | #WearYourPower{" "}
        </p>
      </div>
      <div className="text-center">
        <Link  className=" rounded-xl border-3 bg-blue-400 p-2 text-lg " href="/about">
          JOIN THE COMMITTEE TODAY!
        </Link>
      </div>

      <Footer />
    </div>
  );
}
