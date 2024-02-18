import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Error() {
  const errorObj = useRouteError();
  // Handle errorResponse and other custom error message threw from apiRestaurant.js
  const error = errorObj.error || errorObj;

  return (
    <div>
      <h1>Something went wrong: {errorObj.statusText} 😥</h1>
      <p>{error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
