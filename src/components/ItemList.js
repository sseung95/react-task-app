import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} title={item.value} />
      ))}
      <button>clear items</button>
    </div>
  );
};

export default ItemList;
