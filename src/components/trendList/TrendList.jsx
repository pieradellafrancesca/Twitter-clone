import "./index.css";
import trendList from "../../mocks/trendList";
import TrendItem from "../trendItem";
import { BsGear } from "react-icons/bs";

const TrendList = () => {
  return (
    <div className="TrendList">
      <input
        type="text"
        placeholder="🔍 Search Twitter"
        className="TrendList__input"
      />
      <div className="TrendList__content">
        <div className="TrendList__first-line">
          <h3>Trends for you</h3>
          <BsGear className="gear" />
        </div>

        {trendList.map((trend, index) => (
          <TrendItem trendData={trend} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendList;
