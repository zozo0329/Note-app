import "./ItemContent.css";
const ItemContent = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);

    console.log(props.value, "VALUE");
  };
  return (
    <div className="ItemContent-container">
      <h1 onClick={deleteHandler}>{props.value}</h1>
    </div>
  );
};

export default ItemContent;
