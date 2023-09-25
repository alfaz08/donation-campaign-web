
import swal from "sweetalert";

const SingleCardDetails = ({singleCard}) => {


  const {category,color_card_bg,color_category_bg,color_text_and_btn_bg,description,id,image,price,title} =singleCard;
 
  const handleAdded =() =>{
    const addedToDonateList = [];
     
    const donateItems =JSON.parse(localStorage.getItem("donation"))

    if(!donateItems){
      addedToDonateList.push(singleCard);
      localStorage.setItem("donation",JSON.stringify(addedToDonateList))
      swal("Good job!", "Donation added successfully!", "success");
    }
    else{
       const isExists = donateItems.find(card=>card.id ===id)
     if(!isExists){
      addedToDonateList.push(...donateItems,singleCard)
      localStorage.setItem("donation",JSON.stringify(addedToDonateList));
      swal("Good job!", "Donation added successfully!", "success");
     }
     else{
      swal("Error!", "No duplicate !", "error");
     }
    }
  }
  





  return (
    <div>
      <div className="relative">
      <img  src={image} alt="Your Image" className="w-full h-[65vh]" />

     <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-left p-4">
    <button onClick={handleAdded} className=" text-white font-bold py-2 px-4 rounded " style={{ backgroundColor: color_text_and_btn_bg}}>
      Donate ${price}
    </button>
  </div>
</div>
      
      <div>
        <h2 className="text-4xl font-bold">{category}</h2>
      </div>


      <div>
        <p className="text-xl">{description}</p>
      </div>
      
    </div>
  );
};

export default SingleCardDetails;