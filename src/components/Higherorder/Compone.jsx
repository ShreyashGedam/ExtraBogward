import Higher from "./Higher";

function Compone(props) {
  const { count, increment } = props;

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default Higher(Compone);
