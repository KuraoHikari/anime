interface MegaTextTitleProps {
 text1: string;
 text2: string;
 text3: string;
 text4: string;
}

export const MegaTextTitle: React.FC<MegaTextTitleProps> = ({ text1, text2, text3, text4 }) => {
 return (
  <div className="text-6xl text-center text-gray-200 my-5 font-extrabold">
   <h1 className="hover:text-gray-500">
    <span className="text-gray-500 hover:text-gray-200">{text1}</span>
    {text2}
    <span className="text-gray-500 hover:text-gray-200">{text3}</span>
    {text4}
   </h1>
  </div>
 );
};
