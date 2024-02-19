import { useState } from "react";
import Button from "../../ui/Button";

function handleSubmit(event) {
  event.preventDefault();
}

export default function CreateUser() {
  const [userName, setUsername] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={userName}
        onChange={(event) => setUsername(event.target.value)}
        className="input mb-8 w-72"
      />
      {userName !== "" && (
        <div>
          <Button type="primary">Start ordering!</Button>
        </div>
      )}
    </form>
  );
}
