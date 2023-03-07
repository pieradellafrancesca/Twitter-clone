import "./index.css";

const TrendItem = ({ trendData }) => {
  const { title, tags, reactions } = trendData;
  return (
    <div className="TrendItem">
      <p>Trending worldwide</p>
      <p>#{tags[0]}</p>
      <p>{title}</p>
      <p>{reactions} people are Tweeting about this</p>
    </div>
  );
};

export default TrendItem;
