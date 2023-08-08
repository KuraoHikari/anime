import Image from "next/image";

const Jumbotron = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        height: "500px",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-full relative">
          <div className="text-white absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="text-sm font-normal">Subheading</span>
            <h2 className="mb-4 text-4xl font-semibold">Weebs never Die</h2>
          </div>
          <Image
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src="/suzuran.webp"
            width={400}
            height={400}
            alt="sujuran"
          />
          <div className="md:flex justify-between text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full">
            <div className="text-sm font-normal md:mx-20 md:mb-5 md:w-1/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="font-semibold mx-20 md:mb-5">Weebs never Die</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
