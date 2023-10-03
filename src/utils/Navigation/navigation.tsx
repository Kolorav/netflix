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
import { FaSearch } from "react-icons/fa";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

function Navigation() {
  // Hooks
  const [dimensions, setDimensions] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  const [notify, setNotify] = useState(true);

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

  return dimensions.width <= 1000 ? (
    ""
  ) : (
    <div className="navigation">
      <Link
        className="nav-link"
        href="/"
        style={pathname == "/" ? { color: "white" } : {}}
      >
        <FaHouse />
        Home
      </Link>
      <Link
        className="nav-link"
        href="/movies"
        style={pathname == "/movies" ? { color: "white" } : {}}
      >
        <BiSolidMoviePlay />
        Movies
      </Link>
      <Link
        className="nav-link"
        href="/shows"
        style={pathname == "/shows" ? { color: "white" } : {}}
      >
        <PiTelevisionSimpleFill /> Shows
      </Link>
      <Link
        className="nav-link"
        href="/latest"
        style={pathname == "/latest" ? { color: "white" } : {}}
      >
        <HiNewspaper />
        Latest
      </Link>
      <Link
        className="nav-link"
        href="/playlist"
        style={pathname == "/playlist" ? { color: "white" } : {}}
      >
        <BiSolidBookBookmark />
        Playlist
      </Link>
      <div className="navigation-right-section">
        {pathname !== "/search" && (
          <Link className="search-page-link" href="/search">
            <FaSearch />
          </Link>
        )}
        <button
          style={notify ? { color: "#dc2626" } : {}}
          onClick={() => {
            setNotify(false);
          }}
        >
          <FaBell />
        </button>
        <button>
          <Avatar />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
