const Banner = () => {
  return (
    <div className="h-[70vh] grid place-items-center">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="w-[290px] md:w-[520px] mx-auto flex justify-center mt-10 relative">
          <input
            className="w-full border rounded-l-lg p-4 outline-none"
            type="text"
            placeholder="Search...."
          />
          <button className="bg-[#FF444A] text-white font-semibold py-4 px-7 rounded-r-lg absolute -right-2 z-30">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
