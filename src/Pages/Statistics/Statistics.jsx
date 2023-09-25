import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import PieChartShow from "./PieChartShow";

const Statistics = () => {
  const [donateMoney,setDonateMoney] = useState(0);
  const [totalAmount,setTotalAmount] =useState(0)
  const allData = useLoaderData()
 
  useEffect(()=>{
    const allTotal = allData.reduce((preValue,currentItem)=> preValue + currentItem.price,0)
    setTotalAmount(allTotal);

    const donateItem = JSON.parse(localStorage.getItem("donation"))
    if(donateItem){
    setDonateMoney(donateItem)
    const total = donateItem.reduce((preValue,currentItem)=> preValue + currentItem.price,0)
    setDonateMoney(total) 
  }
  },[])


console.log(donateMoney);
console.log(totalAmount);




  return (
    <div>
      <PieChartShow donateMoney={donateMoney} totalAmount={totalAmount}></PieChartShow>
      
      <div className="flex justify-center items-center gap-5">
      <h2 className="text-center font-bold">Your Donation</h2>
      <div className="bg-[#00C49F] h-2 w-16"></div>
      </div>
      <div className="flex justify-center items-center gap-5">
      <h2 className="text-center font-bold">Total Donation</h2>
      <div className="bg-[#FF444A] h-2 w-16"></div>
      </div>

    </div>
   
  );
};

export default Statistics;