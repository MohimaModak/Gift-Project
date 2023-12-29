const Banner = () => {
  return (
    <div>
      
      <label>Select Your Choice</label>
      <br />
      <select className="px-2 py-2 rounded-md" name="" id="">
        <option value="Occasion-based Gifts">Occasion-based Gifts</option>
        <option value="Recipient-specific Gifts">
          Recipient-specific Gifts
        </option>
        <option value="Interest-based Gifts">Interest-based Gifts</option>
        <option value="Personalized Gifts">Personalized Gifts</option>
        <option value="Experience Gifts">Experience Gifts</option>
        <option value="Subscription Boxes">Subscription Boxes</option>
        <option value="DIY and Handmade Gifts">DIY and Handmade Gifts</option>
        <option value="Charitable Gifts">Charitable Gifts</option>
        <option value="Luxury Gifts">Luxury Gifts</option>
        <option value="Seasonal Gifts">Seasonal Gifts</option>
      </select>
    </div>
  );
};

export default Banner;
