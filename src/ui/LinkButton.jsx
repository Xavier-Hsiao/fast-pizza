import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const buttonClass =
    "text-sm text-blue-500 hover:text-blue-700 hover:underline";

  if (to === "-1")
    return (
      <button className={buttonClass} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={to} className={buttonClass}>
      {children}
    </Link>
  );
}
