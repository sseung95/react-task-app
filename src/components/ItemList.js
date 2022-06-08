import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store';

import Item from './Item';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const clearHandler = () => {
    dispatch(taskActions.removeAllItem());
  };

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} id={item.id} title={item.value} />
      ))}
      <button onClick={clearHandler}>clear items</button>
    </div>
  );
};

export default ItemList;
