const Banner = () => {
  return (
    <div className="h-[70vh] border">
      <h1 className="">I Grow By Helping People In Need</h1>
      <div className="">
        <input className="w-[470px]" type="text" placeholder="Search...." />
        <button className="bg-red-400 text-white py-4 px-6 rounded-r-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
