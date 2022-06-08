import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store';

const TaskForm = () => {
  const dispatch = useDispatch();
  const editingItem = useSelector((state) => state.editingItem);
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingItem) {
      setText(editingItem.value);
    }
  }, [editingItem]);

  const addItemHandler = (e) => {
    e.preventDefault();

    // 빈값일 때 추가 X
    if (!text.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    // 수정 모드일때
    if (editingItem) {
      dispatch(
        taskActions.editItem({ id: editingItem.id, value: text.trim() })
      );
    } else {
      dispatch(taskActions.addItem(text.trim()));
    }

    setText('');
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={addItemHandler}>
      <p></p>
      <h3>grocery bud</h3>
      <div>
        <input
          type="text"
          placeholder="e.g. eggs"
          onChange={textChangeHandler}
          value={text}
        />
        <button type="submit">{editingItem ? 'Edit' : 'Submit'}</button>
      </div>
    </form>
  );
};

export default TaskForm;
