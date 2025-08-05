import s from './UserList.module.css';
const UserList = ({ users }) => {
  
  if (!users || users.length === 0) {
    return <p>Немає користувачів для відображення</p>;
  }

  return (
    <ul className={s.userList}>
      {users.map(user => (
        <li className={s.list} key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  )
}

export default UserList;