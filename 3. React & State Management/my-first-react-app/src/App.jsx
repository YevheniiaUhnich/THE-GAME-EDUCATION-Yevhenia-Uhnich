import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Toggle from './components/Toggle/Toggle';
import UserCard from './components/UserCard/UserCard';
import Form from './components/Form/Form';
import ColorButton from './components/ColorButton/ColorButton';

export default function App() {
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
    </>
  )
}