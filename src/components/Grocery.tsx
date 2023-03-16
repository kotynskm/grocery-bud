import { useState } from "react";
import GroceryItem from "./GroceryItem";

const Grocery = () => {
  const [itemList, setItems] = useState<any[]>([]);
  const [item, setItem] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
    };
    const newList = [...itemList, newItem];
    setItems(newList);
  };

  const handleDelete = (id: number) => {
    const newList = itemList.filter((item) => item.id !== id);
    setItems(newList);
  };

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <form>
        <label>Add a grocery item</label>
        <input
          type="text"
          value={item}
          onChange={(evt) => setItem(evt.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <div className="grocery-items">
        <h1>Grocery List</h1>
        {itemList.length
          ? itemList.map((item) => {
              return (
                <GroceryItem
                  name={item.name}
                  key={item.id}
                  id={item.id}
                  HandleDelete={handleDelete}
                />
              );
            })
          : "There are  no items in the list"}
      </div>
    </div>
  );
};
export default Grocery;
