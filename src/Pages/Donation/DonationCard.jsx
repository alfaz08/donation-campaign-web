

const DonationCard = ({item}) => {
  const {category,color_card_bg,color_category_bg,color_text_and_btn_bg,description,id,image,price,title} =item;

  return (
    <div className="flex" style={{ backgroundColor: color_card_bg}}>
      <div>
      <img className=" w-72 h-52" src={image} alt="" />
      </div>
      <div className=" mt-10 ml-6">
      <p className="font-bold inline" style={{ backgroundColor: color_category_bg,color:color_text_and_btn_bg}}>{category}</p>
       <h1 className="font-bold text-xl">{title}</h1>
       <h1 className="font-bold text-xl" style={{color:color_text_and_btn_bg}}>${price}</h1>
       <div >
       <button className="font-bold text-white rounded-lg p-2" style={{backgroundColor: color_text_and_btn_bg}}>View Details</button>
       </div>
       
      </div>
      
    </div>
  );
};

export default DonationCard;