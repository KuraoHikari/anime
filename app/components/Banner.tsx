interface BannerProps {
 children: React.ReactNode;
 variant: Variant;
 superText: string;
}

type Variant = "L" | "R";

export const Banner: React.FC<BannerProps> = ({ variant, children, superText }) => {
 return (
  <div className="transition-all ease-in-out duration-1000 flex justify-center mx-auto my-4">
   <div className="lg:max-w-5xl md:max-w-3xl mx-5">
    <div className="flex flex-row">
     {variant === "L" ? (
      <>
       <div className="w-2/3 bg-gray-500 p-5 text-gray-200 flex justify-center items-center h-48 text-3xl font-black uppercase">
        {superText}
       </div>
       <div className="w-1/3 bg-gray-200 text-gray-500 p-5 flex justify-center items-center">{children}</div>
      </>
     ) : (
      <>
       <div className="w-1/3 bg-gray-200 text-gray-500 p-5 flex justify-center items-center">{children}</div>
       <div className="w-2/3 bg-gray-500 p-5 text-gray-200 flex justify-center items-center h-48 text-3xl font-black uppercase">
        {superText}
       </div>
      </>
     )}
    </div>
   </div>
  </div>
 );
};
