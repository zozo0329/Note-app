import "./ItemContent.css";
const ItemContent = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.value);
  };
  return (
    <div className="ItemContent-container">
      <h1 onClick={deleteHandler}>{props.value}</h1>
    </div>
  );
};

export default ItemContent;
