import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";


const Banner = () => {
  
  const allData =useLoaderData();
  
  const [value,setValue] = useState('');
  const[searchResult,setSearchResult] =useState([])



 const onChange =(event) =>{
  setValue(event.target.value);
 }
  const onSearch =(value) =>{
    const filteredItem = allData.filter((item)=>
    item.category.toLowerCase().includes(value.toLowerCase())
    )
    setSearchResult(filteredItem)
  }
  
  //  console.log(searchResult);


  return (
    <div>
      <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/QFp42Nd/Screenshot-2023-09-25-011410.jpg)'}}>
  <div className="hero-overlay bg-opacity-0 "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   <div>
   <h2 className="text-4xl mb-3 text-black font-bold">I Grow By Helping People In Need</h2>
   </div>
 

  <div className="flex items-center justify-center">
    <div className="flex border border-red-200 rounded-lg">
      <input value={value} onChange={onChange} type="text" className="block w-full px-4 py-2 text-red-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Search..."/>
     <button onClick={()=>onSearch(value)}  className="px-4 text-white bg-red-600 border-l rounded-lg ">
      Search
      </button>
      </div>
      
  </div>
    </div>
  </div>
</div>

<div>
  {
    <Cards searchResult={searchResult}></Cards>
  }
</div>
    </div>
  );
};

export default Banner;