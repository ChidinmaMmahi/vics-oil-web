import { useEffect, useState } from "react";
import PageAnimation from "~/components/PageAnimation";
import ProductsList from "./products/ProductsList";
import SpecialQualities from "./special-qualities/SpecialQualities";
import BgImageBlock from "~/components/BgImageBlock";

const heroImages = [
  "/images/palm-leaves.jpg",
  "/images/sky-n-leaves.jpg",
  "/images/palm-trees.jpg",
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageAnimation>
      <main className="">
        <section className="relative h-[70vh] overflow-hidden">
          {/* Image Layer */}
          <img
            src={heroImages[currentImage]}
            alt="Hero"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

          <div className="relative z-20 flex items-center h-full">
            <div className="lg:w-[60%] xl:w-[50%] w-full bg-black/50 text-amber-100 py-10 px-section">
              <h1 className="text-4xl font-bold mb-3 sm:mb-5">
                Welcome to <span className="text-green-800">VicsOil</span>
              </h1>
              <p>
                We are a leading provider of palm oil and other agricultural
                products.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-48 pt-40 px-section bg-white">
          <h2 className="text-4xl font-bold mb-3 sm:mb-5">
            <span className="text-xl block">WELCOME TO </span>The{" "}
            <span className="text-green-800">VicsOil </span>
            Company
          </h2>
          <p className="text-lg  text-justify lg:w-2/3 lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            eaque quas soluta ad hic eum esse sint rem aut fuga? Sunt blanditiis
            neque facilis molestias et fuga, suscipit maiores numquam. Nobis
            necessr molestias ea, autem rem beatae nulla dolorem atque optio
            impedit reprehenderit minus officiis veritatis qui architecto ut
            eaque eveniet quod, culpa reiciendis, deserunt placeat excepturi
            doloremque! Atque, fugit! Cumque optio nostrum unde ut numquam atque
            consequuntur quasi nulla ad repellat dolore nam in necessitatibus
            deserunt, explicabo mollitia, possimus earum expedita, reprehenderit
            dolor placeat fugit. Deleniti sed ex est. Placeat eveniet, ipsum
            impedit reprehenderit minus officiis veritatis qui architecto ut
            eaque eveniet quod, culpa reiciendis, deserunt placeat excepturi
            doloremque! Atque, fugit! Cumque optio nostrum unde ut numquam atque
            consequuntur quasi nulla ad repellat dolore nam in necessitatibus
            deserunt, explicabo mollitia, possimus earum expedita, reprehenderit
            dolor placeat fugit. Deleniti sed ex est. Placeat eveniet, ipsum
            unde odi
          </p>
        </section>

        <BgImageBlock imageUrl="url('/images/sunny-leaves.jpg')">
          <div className="relative z-10 mx-auto px-section py-52 text-center">
            <h2 className="text-4xl font-bold mb-3 sm:mb-5">
              Get <span className="text-red-400">Quality</span> Palm Oil At Very
              Affordable Prices
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </BgImageBlock>

        <section className="pt-24 pb-48 px-section bg-white">
          <ProductsList />
        </section>

        <SpecialQualities />
      </main>
    </PageAnimation>
  );
};

export default HomePage;
