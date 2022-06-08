import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskActions } from '../store';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addItemHandler = (e) => {
    e.preventDefault();

    // 빈값일 때 추가 X
    if (!text.trim()) {
      alert('내용을 입력해주세요.');
    }

    dispatch(taskActions.addItem(text.trim()));
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
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default TaskForm;
