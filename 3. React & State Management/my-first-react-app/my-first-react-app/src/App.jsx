import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';

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
    </>
  )
}