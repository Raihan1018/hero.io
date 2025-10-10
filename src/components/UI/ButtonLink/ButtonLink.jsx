import { Link } from "react-router-dom";

const ButtonLink = ({ to, text }) => {
  return (
    <div className="mx-auto text-center py-2 md:py-5">
      <Link to={to}>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ButtonLink;
