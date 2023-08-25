import { AnimeCard, MegaTextTitle, SearchBar } from "../components";
import DataAnimeExample from "../dataAnimeWEX";

const AnimeWorld = () => {
 const animeDataExample = DataAnimeExample;
 return (
  <div className="block ps-2 h-full">
   <MegaTextTitle text1="THE" text2=" ANI" text3="ME SE" text4="ARCH" />
   <SearchBar />
   <div className="md:mx-10 mt-10 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
    {animeDataExample.map((anime) => (
     <AnimeCard
      key={anime?.mal_id}
      image_url={anime?.images?.webp?.image_url}
      title={anime?.title}
      year={anime?.year}
      season={anime?.season}
      aired={anime?.aired?.string}
      animeWorld
     />
    ))}
   </div>
  </div>
 );
};

export default AnimeWorld;
