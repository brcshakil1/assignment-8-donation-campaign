import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const DonationCampaign = ({ campaign }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = campaign;
  return (
    <div>
      <Link to={`/donations/${id}`}>
        <div
          className="card card-compact rounded-md w-full cursor-pointer"
          style={{ backgroundColor: `${card_bg_color}` }}
        >
          <figure>
            <img className="w-full h-[194px]" src={picture} alt={title} />
          </figure>
          <div className="card-body">
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
            <p
              className="text-xl font-semibold"
              style={{
                color: `${text_button_bg_color}`,
              }}
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

DonationCampaign.propTypes = {
  campaign: PropTypes.object,
};

export default DonationCampaign;
