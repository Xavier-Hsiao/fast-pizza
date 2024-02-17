import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const errorObj = useRouteError();
  // Handle errorResponse and other custom error message threw from apiRestaurant.js
  const error = errorObj.error || errorObj;

  return (
    <div>
      <h1>Something went wrong: {errorObj.statusText} 😥</h1>
      <p>{error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
