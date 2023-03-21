type GroceryProps = {
  name: string;
  id: number;
  HandleDelete: (id: number) => void;
  HandleEdit: (id: number) => void;
};

const GroceryItem = (props: GroceryProps) => {
  return (
    <div className="item">
      <h3>{props.name}</h3>
      <button onClick={() => props.HandleDelete(props.id)}>Delete</button>
      <button onClick={() => props.HandleEdit(props.id)}>Edit</button>
    </div>
  );
};
export default GroceryItem;
