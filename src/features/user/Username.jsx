import { useSelector } from "react-redux";

export default function Username() {
  const name = useSelector((store) => store.user.userName);

  if (!name) return null;

  return <div className="hidden text-sm font-semibold md:block">{name}</div>;
}
