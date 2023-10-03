import Image from "next/image";
import "./style.css";
import Navigation from "../Navigation/navigation";

function Header() {
  return (
    <nav className="header">
      <a href="/">
        <Image src="/logo.png" alt="Netflix" height={40} width={100} />
      </a>
      <Navigation />
    </nav>
  );
}

export default Header;
