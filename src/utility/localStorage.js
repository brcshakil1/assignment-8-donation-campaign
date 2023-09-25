const getDonationFromLS = () => {
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation) {
        return JSON.parse(storedDonation)
    } 
    return [];
}

const saveDonationInLS = id => {
    const storedDonation  = getDonationFromLS();
    const isExists = storedDonation.find(donationId => donationId === id);
    if(!isExists) {
        storedDonation.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonation));
    }
}

export {
    getDonationFromLS, saveDonationInLS
}