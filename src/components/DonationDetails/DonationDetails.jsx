import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationInLS } from "../../utility/localStorage";

const DonationDetails = () => {
  const [donationDetails, setDonationDetails] = useState([]);
  const donationCampaigns = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const handleDonate = () => {
    toast("You've donated successfully!");
    saveDonationInLS(idInt);
  };

  useEffect(() => {
    const findDonationCampaign = donationCampaigns.find(
      (campaign) => campaign.id === idInt
    );
    setDonationDetails(findDonationCampaign);
  }, [idInt, donationCampaigns]);

  const { picture, title, description, price, text_button_bg_color } =
    donationDetails;

  console.log(donationDetails);

  return (
    <div className="my-10 md:mt-10 md:mb-10 px-4 max-w-7xl mx-auto">
      <ToastContainer />
      <div className="relative">
        <img
          className="w-full h-auto rounded-md relative"
          src={picture}
          alt=""
        />
        <div className="absolute bottom-0 bg-[#0b0b0b80] w-full rounded-b-md z-50">
          <button
            onClick={handleDonate}
            className="text-base md:text-xl text-white font-semibold py-2 md:py-4 px-4 md:px-6 rounded-md m-3 md:m-9"
            style={{ backgroundColor: `${text_button_bg_color}` }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="pt-14">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-6">
          {title}
        </h3>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
