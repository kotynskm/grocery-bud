type GroceryProps = {
  name: string;
  id: number;
  HandleDelete: (event: number) => void;
};

const GroceryItem = (props: GroceryProps) => {
  return (
    <div className="item">
      <h3>{props.name}</h3>
      <button onClick={() => props.HandleDelete(props.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};
export default GroceryItem;
