import { useState, useEffect } from "react";
import "./styles.css";
import Img from "./Img";

function Youtube(props) {
  const [query, setResult] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "eb31a0e555msha5baa5175d99932p1f5a85jsna18c063b3625",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
      }
    };

    fetch(
      `https://youtube138.p.rapidapi.com/search/?q=${props.q}&hl=en&gl=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setResult(response.contents))
      .catch((err) => console.error(err));
  }, [props.q]);
  console.log(query);
  return (
    <div>
      {query.map((item) => (
        <div>
          <Img u={item.video} />
        </div>
      ))}
    </div>
  );
}

export default Youtube;
