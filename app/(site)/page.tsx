import Image from "next/image";
import { RiMessage2Fill, RiCheckboxCircleFill } from "react-icons/ri";

import { AnimeCard, MegaTextTitle, Jumbotron, SearchBar, Banner } from "../components";

import DataAnimeExample from "../dataAnimeExample";

export default function Home() {
 const animeDataExample = DataAnimeExample;
 const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Internet without borders.",
  "No specific time limits.",
 ];
 return (
  <div className="bg-gray-800 h-full">
   <Jumbotron />
   <MegaTextTitle text1="THE" text2=" ANI" text3="ME SE" text4="ARCH" />
   <SearchBar />
   <div className="md:mx-10 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {animeDataExample.map((anime) => (
     <AnimeCard
      key={anime?.mal_id}
      image_url={anime?.images?.webp?.image_url}
      title={anime?.title}
      year={anime?.year}
      season={anime?.season}
      aired={anime?.aired?.string}
     />
    ))}
   </div>
   <Banner variant="L" superText="Awesome ANIME DISCUSSION FLATFORM">
    More details about the study can be found in the book , click to learn more ...
   </Banner>

   <section>
    <div className="py-4">
     <MegaTextTitle text1="WHAT" text2=" YOU" text3=" GOT " text4="HERE?" />
     <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8 justify-center">
      <div className=" text-center py-5 px-4 cursor-pointer  ease-in duration-200">
       <div className="bg-color-secondary inline-block py-5 px-6">
        <RiMessage2Fill size={64} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
       </div>
       <h3 className="text-xl font-bold py-4 text-gray-200">CHAT DISCUSSION</h3>
       <p className="text-gray-500">We use an application designed a testing gnose to keep away</p>
      </div>
      <div className=" text-center py-5 px-4 cursor-pointer  ease-in duration-200">
       <div className="bg-color-secondary inline-block py-5 px-6">
        <RiMessage2Fill size={64} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
       </div>
       <h3 className="text-xl font-bold py-4 text-gray-200">CHAT DISCUSSION</h3>
       <p className="text-gray-500">We use an application designed a testing gnose to keep away</p>
      </div>
      <div className="text-center py-5 px-4 cursor-pointer">
       <div className="bg-color-secondary inline-block py-5 px-6">
        <RiMessage2Fill size={64} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
       </div>
       <h3 className="text-xl font-bold py-4 text-gray-200">POST DISSCUSSION</h3>
       <p className="text-gray-500">We use an application designed a testing gnose to keep away</p>
      </div>
      <div className=" text-center py-5 px-4 cursor-pointer  ease-in duration-200">
       <div className="bg-color-secondary inline-block py-5 px-6">
        <RiMessage2Fill size={64} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
       </div>
       <h3 className="text-xl font-bold py-4 text-gray-200">YOUR RATE IS MATTER</h3>
       <p className="text-gray-500">We use an application designed a testing gnose to keep away</p>
      </div>
     </div>
    </div>
   </section>
   <div className="max-w-5xl mx-auto md:flex items-center justify-center">
    <Image
     src={"/portrait_cherino.webp"}
     alt={"features-lasles-vpn"}
     height={500}
     width={400}
     className="md:px-8 px-16 mx-auto"
    />
    <div className="px-16 space-y-4 text-center md:text-left">
     <div className="font-bold text-gray-200 text-3xl">{"We've got your back"}</div>
     <div className="text-sm font-normal text-gray-500">
      You can explore the features that we provide with fun and have their own functions each feature.
     </div>

     {features.map((val, index) => {
      return (
       <div className="mx-auto md:mx-0 flex max-w-[12rem] md:w-full items-center space-x-3" key={index}>
        <RiCheckboxCircleFill size={24} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
        <div className="text-xs text-gray-200">{val}</div>
       </div>
      );
     })}
    </div>
   </div>

   <MegaTextTitle text1="PRI" text2="CING" text3=" LIST" text4="?" />
   <div className="px-16 space-y-4 text-center ">
    <div className="font-bold text-gray-200 text-3xl">Just kidding</div>
    <div className="text-sm font-normal text-gray-500">
     THE ANIME is free and open-source You can still make your contribution!
    </div>
   </div>

   <div className="transition-all ease-in-out duration-1000 flex justify-center mx-auto my-4">
    <div slot="middle-left" className="lg:max-w-5xl md:max-w-3xl mx-5">
     <div className="flex flex-row">
      <div className="w-1/3 bg-gray-200 text-gray-500 p-5 flex justify-center items-center"></div>
      <div className="w-2/3 bg-gray-500 p-5 text-gray-200 flex justify-center items-center h-48 text-3xl font-black uppercase"></div>
     </div>
    </div>
   </div>
   <Banner variant="R" superText="Awesome ANIME DISCUSSION FLATFORM">
    <button className="bg-gray-500 drop-shadow-3xl text-white p-3 ">Subscribe Now</button>
   </Banner>

   <footer className="footer footer-center  w-full py-5 text-gray-500">
    <div className="text-center">
     <p>Copyright © 2022 - Kurao Hikari</p>
    </div>
   </footer>
  </div>
 );
}
