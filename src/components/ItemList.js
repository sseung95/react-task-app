import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/task-slice';
import { alertActions } from '../store/alert-slice';

import Item from './Item';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.task.items);

  const clearHandler = () => {
    dispatch(taskActions.removeAllItem());

    dispatch(
      alertActions.changeAlertMsg({
        className: 'alert-danger',
        msg: 'empty list',
      })
    );
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
