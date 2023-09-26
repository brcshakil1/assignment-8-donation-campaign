import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold">Oops!</h2>
        <p className="text-2xl font-semibold">Page not Found</p>
        <Link to="/">
          <button className="text-xl font-bold border-2 border-orange-500 rounded-md py-3 mt-2 px-6">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
