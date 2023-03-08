import "./index.css";
import trendList from "../../mocks/trendList";
import TrendItem from "../trendItem";
import { BsGear } from "react-icons/bs";
import { useState } from "react";

const TrendList = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="TrendList">
      <input
        type="text"
        placeholder="🔍 Search Twitter"
        className="TrendList__input"
        onInput={handleInput}
      />
      <div className="TrendList__content">
        <div className="TrendList__first-line">
          <h3>Trends for you</h3>
          <BsGear className="gear" />
        </div>

        {trendList.map((trend) =>
          trend.title.toLowerCase().includes(inputValue) ? (
            <TrendItem trendData={trend} key={trend.id} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default TrendList;
