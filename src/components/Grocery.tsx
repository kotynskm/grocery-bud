import { useState } from "react";
import GroceryItem from "./GroceryItem";

const Grocery = () => {
  const [itemList, setItems] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditID] = useState(0);
  const [editItemName, setEditItemName] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    if (inputValue && isEditing) {
      console.log(editItemName);
      setItems(
        itemList.map((item) => {
          if (item.id === editID) {
            return { ...item, name: inputValue };
          }
          return item;
        })
      );
      setInputValue("");
      setEditID(0);
      setEditing(false);
    } else {
      const newItem = {
        name: inputValue,
        id: Date.now(),
      };
      const newList = [...itemList, newItem];
      setItems(newList);
    }
  };

  const handleDelete = (id: number) => {
    const newList = itemList.filter((item) => item.id !== id);
    setItems(newList);
  };

  const handleEdit = (id: number) => {
    // set items with the renamed item
    const editItem = itemList.find((item) => item.id === id);
    setEditing(true);
    setEditID(id);
    setInputValue(editItem.name);
    // setEditItemName(editItem.name);
  };

  //   if (isEditing) {
  //     return (
  //       <>
  //         <h1>Grocery Bud</h1>
  //         <label>Edit grocery item</label>
  //         <form>
  //           <input
  //             type="text"
  //             value={item}
  //             onChange={(evt) => setItem(evt.target.value)}
  //           ></input>
  //           <button onClick={handleSubmit}>Submit</button>
  //         </form>
  //       </>
  //     );
  //   }

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <form>
        <label>Add a grocery item</label>
        <input
          type="text"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          {isEditing ? "Edit" : "Submit"}
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
                  HandleEdit={handleEdit}
                />
              );
            })
          : "There are  no items in the list"}
      </div>
    </div>
  );
};
export default Grocery;
