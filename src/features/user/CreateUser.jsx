import { useState } from "react";

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
        className="w-72"
      />
      {userName !== "" && (
        <div>
          <button>Start ordering!</button>
        </div>
      )}
    </form>
  );
}
