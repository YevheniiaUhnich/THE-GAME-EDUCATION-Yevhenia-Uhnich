import s from './RoleButton.module.css';

const RoleButton = ({ role }) => {
  let buttonMessage;
  switch (role) {
    case 'admin':
      buttonMessage = 'Панель керування';
      break;
    case 'user':
      buttonMessage = 'Мій профіль';
      break;
    case 'guest':
      buttonMessage = 'Зареєструватися';
      break;
    default:
      buttonMessage = 'Невідома роль';
  }
  return (
    <button className={s.btnRole}>
      {buttonMessage}
    </button>
  )
}

export default RoleButton;