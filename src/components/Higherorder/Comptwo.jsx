import Higher from "./Higher";

function Comptwo(props) {
  const { count, increment } = props;

  return (
    <div>
      <h2>{count}</h2>
      <div onMouseOver={increment} style={{ background: "gold" }}>
        Hover
      </div>
    </div>
  );
}

export default Higher(Comptwo);
