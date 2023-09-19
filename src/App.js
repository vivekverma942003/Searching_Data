import "./styles.css";
import Mock from "./Mock.json";
import { useState } from "react";
export default function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <input
        placeholder="search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div>
        {Mock.filter((v) => {
          if (search === "") {
            return v;
          } else if (
            v.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return v;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{val.first_name}:</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
