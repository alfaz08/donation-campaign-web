import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardDetails from "./SingleCardDetails";
const CardDetails = () => {
  const[singleCard,setSingleCard] = useState({});
  const {id} = useParams();
  const allCard = useLoaderData()
  
 

  useEffect(()=>{
    const findCard = allCard?.find((data)=>data.id===id)
    setSingleCard(findCard)
  },[id,allCard])
  console.log(singleCard); 

  return (
    <div>
      <SingleCardDetails singleCard={singleCard}></SingleCardDetails>
    </div>
  );
};

export default CardDetails;