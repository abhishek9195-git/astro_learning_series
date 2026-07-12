import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    alert(`Subscribed: ${email}`);
  }

  return (
    <div>
      <h2>Newsletter</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}