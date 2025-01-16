import "./footer.css";

function Footer() {
  return (
    <footer className="flex space-between">
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
      <span className="thankU">
        <p>Thank you for your interest</p>
      </span>
    </footer>
  );
}

export default Footer;
