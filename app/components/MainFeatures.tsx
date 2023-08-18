interface MainFeaturesProps {
 label: string;
 icon: any;
 desc: string;
}

export const MainFeatures: React.FC<MainFeaturesProps> = ({ label, icon: Icon, desc }) => {
 return (
  <div className=" text-center py-5 px-4 cursor-pointer  ease-in duration-200">
   <div className="bg-color-secondary inline-block py-5 px-6">
    <Icon size={64} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
   </div>
   <h3 className="text-xl font-bold py-4 text-gray-200">{label}</h3>
   <p className="text-gray-500">{desc}</p>
  </div>
 );
};
