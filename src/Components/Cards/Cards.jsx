import { useLoaderData } from "react-router-dom";
import Card from "../card/card";

const Cards = () => {

  const allData = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mt-10">
      {
        allData.map(data =>
          <Card key={data.id} data={data}></Card>
          )
      }
    </div>
  );
};

export default Cards;