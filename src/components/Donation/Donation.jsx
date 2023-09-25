import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    price,
  } = donation;
  return (
    <div
      className="flex flex-col md:flex-row gap-6 items-center rounded-md"
      style={{ backgroundColor: `${card_bg_color}` }}
    >
      <figure>
        <img src={picture} alt={title} className="w-56 h-56 rounded-md" />
      </figure>
      <div className="">
        <h2 className="card-title text-sm">
          <span
            className=" py-1 px-2.5 rounded-md"
            style={{
              backgroundColor: `${category_bg_color}`,
              color: `${text_button_bg_color}`,
            }}
          >
            {category}
          </span>
        </h2>
        <p className="text-2xl font-semibold py-2">{title}</p>
        <p
          className="font-semibold"
          style={{ color: `${text_button_bg_color}` }}
        >
          ${price}
        </p>
        <Link to={`/donations/${id}`}>
          <button
            className="text-white font-semibold text-[18px] py-2.5 px-4 rounded-md mt-3"
            style={{ backgroundColor: `${text_button_bg_color}` }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object,
};

export default Donation;
