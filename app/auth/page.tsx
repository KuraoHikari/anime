import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function AuthPage() {
 return (
  <div
   className="
     flex
     h-full
     flex-col
     justify-center
     py-12
     sm:px-6
     lg:px-8
    
     "
   style={{
    backgroundImage: 'url("/anime-bg.jpg")',
   }}
  >
   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    {/* Auth Form */}
    <AuthForm />
   </div>
  </div>
 );
}
