const GameYearAndPeriod = (props) => {
  return (
    <div>
      <h1 style={{ margin: 0, padding: "12px" }}>
        {props.year}年目第{props.period}期
      </h1>
    </div>
  );
};

export default GameYearAndPeriod;