import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SerachBar";

export default function Home() {
 return (
  <div className="bg-gray-800 h-full">
   <Jumbotron />
   <div className="text-6xl text-center text-gray-200 my-5 font-extrabold">
    <h1 className="hover:text-gray-500">
     <span className="text-gray-500 hover:text-gray-200">THE</span> ANI
     <span className="text-gray-500 hover:text-gray-200">ME SE</span>ARCH
    </h1>
   </div>

   <SearchBar />
   <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
     <div className="cursor-pointer">
      <figure>
       <img src="/suzuran.webp" className="rounded-t h-72 w-full object-cover" />

       <figcaption className="p-4">
        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">aisjoakjskljjans</p>

        <small className="leading-5 text-gray-500 dark:text-gray-400">aslma;ls;ams aknsklanslkaksl</small>
       </figcaption>
      </figure>
     </div>
    </div>
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
     <div className="cursor-pointer">
      <figure>
       <img src="/suzuran.webp" className="rounded-t h-72 w-full object-cover" />

       <figcaption className="p-4">
        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">aisjoakjskljjans</p>

        <small className="leading-5 text-gray-500 dark:text-gray-400">aslma;ls;ams aknsklanslkaksl</small>
       </figcaption>
      </figure>
     </div>
    </div>
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
     <div className="cursor-pointer">
      <figure>
       <img src="/suzuran.webp" className="rounded-t h-72 w-full object-cover" />

       <figcaption className="p-4">
        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">aisjoakjskljjans</p>

        <small className="leading-5 text-gray-500 dark:text-gray-400">aslma;ls;ams aknsklanslkaksl</small>
       </figcaption>
      </figure>
     </div>
    </div>
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
     <div className="cursor-pointer">
      <figure>
       <img src="/suzuran.webp" className="rounded-t h-72 w-full object-cover" />

       <figcaption className="p-4">
        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">aisjoakjskljjans</p>

        <small className="leading-5 text-gray-500 dark:text-gray-400">aslma;ls;ams aknsklanslkaksl</small>
       </figcaption>
      </figure>
     </div>
    </div>
   </div>
  </div>
 );
}
