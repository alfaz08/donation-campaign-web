import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid justify-center items-center mt-24" >
      <h1 className="text-2xl">Opps!!!Error</h1>
      
      <button><Link to="/" className="bg-red-400 text-2xl rounded-lg" >Go Home</Link></button>
      </div>
    </div>
  );
};

export default ErrorPage;