import { useState } from "react";
import "./App.css";

type Wine = {
  id: number;
  name: string;
  year: number;
  variety: string;
};

const App = () => {
  const [wines, setWines] = useState<Wine[]>([
    {
    id: 1,
    name: "title",
    year: 2004,
    variety: "content",

  },

  {
    id: 1,
    name: "title",
    year: 2004,
    variety: "content",

  },

  {
    id: 1,
    name: "title",
    year: 2004,
    variety: "content",

  },

  {
    id: 1,
    name: "title",
    year: 2004,
    variety: "content",

  },
])
  return (
    <div className="app-container">
      <form className="note-form">
        <input
          placeholder="Wine name"
          required
        ></input>
        <input
          placeholder="year"
          type="number"
          minLength={4}
          maxLength={4}
          required
        ></input>
        <input 
          placeholder="variety"
          type="text"
          required
        ></input>
        <button className="submit">Save selection</button>
      </form>
      <div className="notes-grid">
        {wines.map((wines) => (
          <div className="note-item">
          <button>x</button>
         <h2>{wines.name}</h2>
         <p>{wines.year}</p>
         <p>{wines.variety}</p>
        </div> 
        ))}
      </div>
    </div>
  );
};

export default App;
