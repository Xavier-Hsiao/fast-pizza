import { Link, useNavigate } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((store) => store.user.userName);

  function handleClick() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
      {userName && (
        <Button type="small" callback={handleClick}>
          Logout
        </Button>
      )}
    </header>
  );
}
