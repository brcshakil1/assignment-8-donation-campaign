import { PropTypes } from "prop-types";

const Banner = ({ handleFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.filter.value;
    handleFilter(searchValue);
  };

  return (
    <div className="banner md:mb-20 mb-14 py-10">
      <div className="h-[70vh] grid place-items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            I Grow By Helping People In Need
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-[290px] md:w-[520px] mx-auto flex justify-center mt-10 relative border rounded-md"
          >
            <input
              className="w-full border rounded-l-lg p-4 outline-none border-none"
              type="text"
              name="filter"
              placeholder="Search here...."
            />
            <button className="bg-[#FF444A] text-white font-semibold min-h-full px-7 rounded-r-md">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleFilter: PropTypes.func,
};

export default Banner;
