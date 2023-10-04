import "./style.css";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../Navigation/navigation"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("../Sidebar/sidebar"), {
  ssr: false,
});

function Header() {
  return (
    <nav className="header">
      <Link href="/">
        <Image src="/logo.png" alt="Netflix" height={35} width={90} />
      </Link>
      <Navigation />
      <Sidebar />
    </nav>
  );
}

export default Header;
