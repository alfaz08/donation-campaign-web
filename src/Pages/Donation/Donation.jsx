import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import CardDetails from "../CardDetails.jsx/CardDetails";

const Donation = () => {

   const [donation,setDonation] = useState([])
   const [noFound,setNoFound] = useState(false);
   const [isShow,setIsShow] = useState(false)

  useEffect(()=>{
    const donateItems = JSON.parse(localStorage.getItem("donation"));
   if(donateItems)
   {
    setDonation(donateItems)
   }
  else{
    setNoFound("No Data Found")
  }
  },[])
  

  return (
    <div>
       {noFound ? (
        <p className="h-[80vh] flex justify-center items-center font-extrabold text-4xl">{noFound}</p>
      ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {
        isShow ? donation.map((item)=>
        <DonationCard key={item.id} item={item}></DonationCard>
        ):
        donation.slice(0,4).map((item)=>
        <DonationCard key={item.id} item={item}></DonationCard>
        )
      }
      </div>
      )}
      <div>
      {
        donation.length>4 && <button onClick={()=>setIsShow(!isShow)} className={`font-bold text-xl mt-4 rounded-lg p-2 ${isShow ? 'hidden' : 'bg-red-400 block mx-auto'}`}>
        {isShow ? 'hidden' : "See More"}
        </button>
      }
      </div>
      
      
      
    </div>
  );
};

export default Donation;