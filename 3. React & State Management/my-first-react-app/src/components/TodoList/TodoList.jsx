import s from './TodoList.module.css';

const TodoList = () => {

  const homework = [
    { id: 1, task: 'taskFirst' },
    { id: 2, task: 'taskSecond' },
    { id: 3, task: 'taskThird' },
  ];
  
  
      return (
        <ul>
          {homework.map((hw) => (
            <li key={hw.id} className={s.item}>{hw.task}</li>
          ))}
    </ul>
  )
}
export default TodoList;