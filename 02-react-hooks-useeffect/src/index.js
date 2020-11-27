import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0")
      .then(response => response.json())
      .then(data => { console.log(data); return data.dataseries; } )
      .then(dataseries => {
        setData(dataseries);
      });
  }, []);

  return (
    <div className="App">
      <div>
        {data.map((item, i) => (
          <div key={i}>
            {item.timepoint} {item.cloudcover}
          </div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
