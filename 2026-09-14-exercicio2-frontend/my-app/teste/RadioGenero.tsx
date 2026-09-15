"use client";

import { useState } from "react";

export default function RadioGenero() {
  const [genero, setGenero] = useState("");

  return (
    <form>
      <div>
        <label>
          <input
            type="radio"
            name="genero"
            value="Female"
            checked={genero === "Female"}
            onChange={(event) => setGenero(event.target.value)}
          />
          Female
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="genero"
            value="Male"
            checked={genero === "Male"}
            onChange={(event) => setGenero(event.target.value)}
          />
          Male
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="genero"
            value="Other"
            checked={genero === "Other"}
            onChange={(event) => setGenero(event.target.value)}
          />
          Other
        </label>
      </div>
    </form>
  );
}
