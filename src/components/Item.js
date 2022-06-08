import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
  return (
    <article>
      <p>{props.title}</p>
      <div>
        <button>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </article>
  );
};

export default Item;
