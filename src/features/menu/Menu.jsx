import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return <h1>Menu</h1>;
}
