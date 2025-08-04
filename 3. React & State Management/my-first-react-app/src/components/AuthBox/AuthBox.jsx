import s from './AuthBox.module.css';

const AuthBox = ({ isLoggidIn, name, onLogin }) => {
  return (
    <div className={s.authBox}>
      {isLoggidIn ? (
        <p>Привіт, {name}</p>) : (
        <button className={s.button} onClick={onLogin}>Увійти</button>
      )}
    </div>
  );
};

export default AuthBox;