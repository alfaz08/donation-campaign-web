import { useLoaderData } from "react-router-dom";
import Card from "../card/card";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

const Cards = ({searchResult}) => {
 console.log(searchResult);
  const allData = useLoaderData();
  console.log(allData);
  const [value,setValue]= useState([])
   
 useEffect(()=>{
  if(searchResult){
    setValue(searchResult)
  }
  else{
   
     setValue(allData)  
  }
  
 },[searchResult,allData])
 
  console.log(value);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mt-10">
      {
        value.map(data =>
          <Card key={data.id} data={data}></Card>
          )
      }
    </div>
  );
};

export default Cards;