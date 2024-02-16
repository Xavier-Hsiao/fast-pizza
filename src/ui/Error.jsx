import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const errorObj = useRouteError();

  return (
    <div>
      <h1>Something went wrong: {errorObj.statusText} 😥</h1>
      <p>{errorObj.error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
