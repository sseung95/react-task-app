import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/task-slice';
import { alertActions } from '../store/alert-slice';

import Alert from './Alert';

const TaskForm = () => {
  const dispatch = useDispatch();
  const editingItem = useSelector((state) => state.task.editingItem);
  const alertMsg = useSelector((state) => state.alert.alertMsg);
  const [text, setText] = useState('');

  // 알림 메시지 1초 후 지우기
  useEffect(() => {
    if (!alertMsg) return;

    setTimeout(() => {
      dispatch(alertActions.removeAlertMsg());
    }, 1000);
  }, [alertMsg, dispatch]);

  // 수정할 아이템 input에 내용 채우기
  useEffect(() => {
    if (!editingItem) return;

    setText(editingItem.value);
  }, [editingItem]);

  const showMsg = (className, msg) => {
    dispatch(alertActions.changeAlertMsg({ className, msg }));
  };

  const addItemHandler = (e) => {
    e.preventDefault();

    const trimedText = text.trim();

    // 빈값일 때
    if (!trimedText) {
      showMsg('alert-danger', 'please enter value');
      return;
    }

    // 수정 모드일때
    if (editingItem) {
      dispatch(taskActions.editItem({ id: editingItem.id, value: trimedText }));
      showMsg('alert-success', 'value changed');
    } else {
      dispatch(taskActions.addItem(trimedText));
      showMsg('alert-success', 'item add to the list');
    }

    setText('');
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={addItemHandler}>
      {alertMsg && <Alert className={alertMsg.className}>{alertMsg.msg}</Alert>}
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
