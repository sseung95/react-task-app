import { useDispatch } from 'react-redux';
import { taskActions } from '../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(taskActions.changeEditingItem(props.id));
  };

  const removeHandler = () => {
    dispatch(taskActions.removeItem(props.id));
  };

  return (
    <article data-id={props.id}>
      <p>{props.title}</p>
      <div>
        <button onClick={editHandler}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={removeHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </article>
  );
};

export default Item;
