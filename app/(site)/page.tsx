import Image from "next/image";
import { RiMessage2Fill, RiCheckboxCircleFill } from "react-icons/ri";

import { AnimeCard, MegaTextTitle, Jumbotron, SearchBar, Banner, MainFeatures } from "../components";

import DataAnimeExample from "../dataAnimeExample";

export default function Home() {
 const animeDataExample = DataAnimeExample;
 const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Internet without borders.",
  "No specific time limits.",
 ];
 const mainFeatures = [
  {
   id: 1,
   label: "CHAT DISCUSSION",
   desc: "We use an application designed a testing gnose to keep away",
   icon: RiMessage2Fill,
  },
  {
   id: 2,
   label: "CHAT DISCUSSION",
   desc: "We use an application designed a testing gnose to keep away",
   icon: RiMessage2Fill,
  },
  {
   id: 3,
   label: "CHAT DISCUSSION",
   desc: "We use an application designed a testing gnose to keep away",
   icon: RiMessage2Fill,
  },
  {
   id: 4,
   label: "CHAT DISCUSSION",
   desc: "We use an application designed a testing gnose to keep away",
   icon: RiMessage2Fill,
  },
 ];
 return (
  <div className="bg-gray-800 ">
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
      {mainFeatures.map((feature) => (
       <MainFeatures key={feature.id} label={feature.label} desc={feature.desc} icon={feature.icon} />
      ))}
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
