import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
  const buttonClass =
    "rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4 inline-block";

  if (to)
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
}
