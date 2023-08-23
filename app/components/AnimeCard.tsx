import clsx from "clsx";
import Image from "next/image";

interface AnimeCardProps {
 image_url: string;
 title: string;
 year: number;
 season: string;
 aired: string;
 animeWorld?: boolean;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ image_url, title, year, season, aired, animeWorld = false }) => {
 return (
  <div
   className={clsx(
    animeWorld && "xl:w-72 lg:w-40 md:w-80 sm:w-80 my-0",
    !animeWorld && "xl:w-72 lg:w-64 md:w-80 sm:w-80 my-2",
    "duration-300 hover:-translate-y-1 mx-auto"
   )}
  >
   <div className="cursor-pointer">
    <figure>
     <Image
      width={animeWorld ? 115 : 225}
      height={animeWorld ? 211 : 321}
      src={image_url}
      alt={title}
      className={clsx(
       animeWorld && "md:h-[400px] lg:h-[250px] h-[500px]",
       !animeWorld && "md:h-[400px] lg:h-[400px] h-[500px]",
       "w-full object-cover"
      )}
     />

     <figcaption className="p-2 text-center">
      <p
       className="text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-300"
       style={{
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
        whiteSpace: "pre-wrap",
       }}
      >
       {title}
      </p>

      <small className="leading-5 text-gray-500 dark:text-gray-400">
       <span>{year}</span> <span>{season}</span> (<span>{aired}</span>)
      </small>
     </figcaption>
    </figure>
   </div>
  </div>
 );
};
