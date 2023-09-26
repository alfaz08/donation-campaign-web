import { Link } from "react-router-dom";


const Card = ({data}) => {
 const {category,color_card_bg,color_category_bg,color_text_and_btn_bg,description,id,image,price,title} =data;
 


 
  return (
    <Link to={`/cards/${id}`}>
    <div className="mb-4" >
      <div className="card w-[305px] shadow-xl"  style={{ backgroundColor: color_card_bg}}>
  <figure><img className=" h-48 w-80 " src={image} /></figure>
  <div className="card-body">
   <div  >
   <h2 className="card-title inline"   style={{ backgroundColor: color_category_bg,color:color_text_and_btn_bg}}>{category}</h2>
   </div>
   
   
    <p className=" font-bold" style={{color:color_text_and_btn_bg}}>{title}</p>
    
    
  </div>
</div>
    </div>
    </Link>
  );
};

export default Card;



