import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Toggle from './components/Toggle/Toggle';
import UserCard from './components/UserCard/UserCard';
import Form from './components/Form/Form';
import ColorButton from './components/ColorButton/ColorButton';
import AuthBox from './components/AuthBox/AuthBox';
import InputText from './components/InputText/InputText';
import RoleButton from './components/RoleButton/RoleButton';
import TodoList from './components/TodoList/TodoList';
import UserList from './components/UserList/UserList';
import { useState } from 'react';


export default function App() {
  const [isLoggidIn, setIsLoggidIn] = useState(false);
  const handleLogin = () => {
    setIsLoggidIn(true);
  }
  const user = {
    name: "Yevhenia",
    city: "Kyiv",
  };
  return (
    <>
      <Header />
      <UserCard user={user} />
      <Footer />
      <Button />
      <Toggle />
      <Form />
      <ColorButton />
      <AuthBox isLoggidIn={isLoggidIn} name="Yevheniia" onLogin={handleLogin} />
      <InputText />
      <RoleButton role="admin" />
      <h2>Мій список завдань</h2>
      <TodoList />
      <h2>Список користувачів</h2>
      <UserList />
    </>
  )
}