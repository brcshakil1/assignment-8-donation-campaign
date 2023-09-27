import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-red-400 font-bold">404 Error</h2>
        <p className="text-2xl font-semibold">Page not Found</p>
        <Link to="/">
          <button className="text-xl flex items-center gap-2 font-bold border-2 text-orange-300 border-orange-400 rounded-md py-3 mt-2 px-6">
            Go Back To <AiFillHome className="text-2xl text " />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
