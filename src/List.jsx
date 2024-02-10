import PropTypes from "prop-types";
const List = (props) => {
  const itemLists = props.items;
  //   itemLists.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical Order
  //   itemLists.sort((a,b) => b.name.localeCompare(a.name)) Reverse Alphabetical Order
  //   itemLists.sort((a, b) => a.calories - b.calories); smaller
  //   itemLists.sort((a, b) => b.calories - a.calories); bigger

  //   const lowcalFruits = itemLists.filter((item) => item.calories < 100);
  const listItems = itemLists.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));
  return (
    <div>
      <h3>{props.category}</h3>
      <ol>{listItems}</ol>
    </div>
  );
};
List.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string,
};
export default List;
