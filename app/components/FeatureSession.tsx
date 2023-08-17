interface FeatureSessionProps {
 icon: any;
 outline: string;
 description: string;
}

export const FeatureSession: React.FC<FeatureSessionProps> = ({ description, outline, icon: Icon }) => {
 return (
  <div className=" text-center py-5 px-4 cursor-pointer  ease-in duration-200">
   <div className="bg-color-secondary inline-block py-5 px-6">
    <Icon size={64} color="rgb(229 231 235 / var(--tw-bg-opacity))" aria-hidden="true" />
   </div>
   <h3 className="text-xl font-bold py-4 text-gray-200">{outline}</h3>
   <p className="text-gray-500">{description}</p>
  </div>
 );
};
