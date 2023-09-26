import ShowCardDetails from "./ShowCardDetails";

const ShowCard = ({searchResult}) => {
  console.log(searchResult);
  return (
    <div>
      {
        searchResult.map((item)=>{
       <ShowCardDetails key={item.id} item={item}></ShowCardDetails>
        })
      }
    </div>
  );
};

export default ShowCard;