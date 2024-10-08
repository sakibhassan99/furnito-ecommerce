import { Feature } from "../components/home/Feature";
import { Hero } from "../components/home/Hero";
import { HomePageCarousel } from "../components/home/HomePageCarousel";
import { HomePageProducts } from "../components/home/HomePageProducts";
import { Range } from "../components/home/Range";

export const Home = () => {
  return (
    <>
      <Hero />
      <Range />
      <section className="mx-4 xsm:mx-8 my-14 2xl:mx-auto max-w-screen-2xl">
        <h2 className="text-[#3A3A3A] font-bold text-4xl text-center">
          Our Product
        </h2>
        <HomePageProducts />
        <a
          href="/shop"
          className="py-3 text-[#B88E2F] font-semibold hover:scale-105 transition-all hover:bg-[#B88E2F] hover:text-white ease-in-out rounded max-md:text-sm duration-200 px-12 md:px-16 block w-max mx-auto my-8 border border-[#B88E2F]"
        >
          Show More
        </a>
      </section>
      <HomePageCarousel />
      <Feature />
    </>
  );
};
