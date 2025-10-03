import s from './Footer.module.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={s.footer}>{currentYear}</footer>
  )
}

export default Footer;