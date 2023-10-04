"use client";
import "./style.css";
import Link from "next/link";
import Avatar from "../Avatar/avatar";
import { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { FaBell, FaHouse } from "react-icons/fa6";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiSolidBookBookmark, BiSolidMoviePlay } from "react-icons/bi";
import NavSearch from "../Nav-search/nav-search";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

function Navigation() {
  // Hooks
  const [dimensions, setDimensions] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  const [notify, setNotify] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Hooks - End

  const currentPathStyle = {
    color: "white",
    fontWeight: 800,
  };

  return dimensions.width <= 1100 ? (
    ""
  ) : (
    <div className="navigation">
      <Link
        className="nav-link"
        href="/"
        style={pathname == "/" ? currentPathStyle : {}}
      >
        <FaHouse />
        Home
      </Link>
      <Link
        className="nav-link"
        href="/movies"
        style={pathname == "/movies" ? currentPathStyle : {}}
      >
        <BiSolidMoviePlay />
        Movies
      </Link>
      <Link
        className="nav-link"
        href="/shows"
        style={pathname == "/shows" ? currentPathStyle : {}}
      >
        <PiTelevisionSimpleFill /> Shows
      </Link>
      <Link
        className="nav-link"
        href="/latest"
        style={pathname == "/latest" ? currentPathStyle : {}}
      >
        <HiNewspaper />
        Latest
      </Link>
      <Link
        className="nav-link"
        href="/watchlist"
        style={pathname == "/watchlist" ? currentPathStyle : {}}
      >
        <BiSolidBookBookmark />
        Watchlist
      </Link>
      <div className="navigation-right-section">
        <NavSearch />
        <button
          aria-label="notification"
          style={notify ? { color: "#dc2626" } : {}}
          onClick={() => {
            setNotify(false);
          }}
        >
          <FaBell />
        </button>
        <button aria-label="user-account">
          <Avatar />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
