import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SerachBar";

export default function Home() {
 return (
  <div className="bg-gray-800 h-full">
   <Jumbotron />
   <div className="text-6xl text-center text-gray-200 my-5 font-extrabold">
    <h1 className="hover:text-gray-500">
     ANI<span className="text-gray-500 hover:text-gray-200">ME SE</span>ARCH
    </h1>
   </div>

   <SearchBar />
   <Jumbotron />
  </div>
 );
}
