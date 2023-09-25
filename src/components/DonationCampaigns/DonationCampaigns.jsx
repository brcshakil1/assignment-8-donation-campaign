import PropTypes from "prop-types";
import DonationCampaign from "../DonationCampaign/DonationCampaign";

const DonationCampaigns = ({ donationCampaigns }) => {
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb:10 md:mb-20">
        {donationCampaigns.map((campaign) => (
          <DonationCampaign key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

DonationCampaigns.propTypes = {
  donationCampaigns: PropTypes.array,
};

export default DonationCampaigns;
