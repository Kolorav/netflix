"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { BiSolidMoviePlay, BiSolidBookBookmark } from "react-icons/bi";
import { FaBell, FaHouse } from "react-icons/fa6";
import { HiNewspaper } from "react-icons/hi2";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import Avatar from "../Avatar/avatar";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

function Sidebar() {
  // Hooks
  const [dimensions, setDimensions] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  const [notify, setNotify] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    setOpen(false);
  }, []);

  useEffect(() => {
    const target = document.getElementById("sidebar");
    if (open && target) {
      target.style.width = `270px`;
      target.style.paddingRight = `40px`;
      target.style.paddingLeft = `40px`;
    } else if (!open && target) {
      target.style.width = `0px`;
      target.style.paddingRight = `0px`;
      target.style.paddingLeft = `0px`;
    }
  }, [open]);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Hooks - End

  const currentPathStyle = {
    color: "white",
    fontWeight: 700,
  };

  return dimensions.width > 1100 ? (
    ""
  ) : (
    <div className="sidebar-btn">
      <button
        aria-label="sidebar-hamburger"
        onClick={() => {
          setOpen((current) => !current);
        }}
      >
        {open ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div className="sidebar" id="sidebar">
        <Link
          className="side-nav-link"
          href="/"
          style={pathname == "/" ? currentPathStyle : {}}
          onClick={() => setOpen(false)}
        >
          <span>
            <FaHouse />
          </span>
          Home
        </Link>
        <Link
          className="side-nav-link"
          href="/movies"
          style={pathname == "/movies" ? currentPathStyle : {}}
          onClick={() => setOpen(false)}
        >
          <span>
            <BiSolidMoviePlay />
          </span>
          Movies
        </Link>
        <Link
          className="side-nav-link"
          href="/shows"
          style={pathname == "/shows" ? currentPathStyle : {}}
          onClick={() => setOpen(false)}
        >
          <span>
            <PiTelevisionSimpleFill />
          </span>
          Shows
        </Link>
        <Link
          className="side-nav-link"
          href="/latest"
          style={pathname == "/latest" ? currentPathStyle : {}}
          onClick={() => setOpen(false)}
        >
          <span>
            <HiNewspaper />
          </span>
          Latest
        </Link>
        <Link
          className="side-nav-link"
          href="/watchlist"
          style={pathname == "/watchlist" ? currentPathStyle : {}}
          onClick={() => setOpen(false)}
        >
          <span>
            <BiSolidBookBookmark />
          </span>
          Watchlist
        </Link>
        <Link
          href="/notifications"
          className="side-nav-link"
          onClick={() => {
            setNotify(false);
            setOpen(false);
          }}
        >
          <span style={notify ? { color: "#dc2626" } : {}}>
            <FaBell />
          </span>
          Notifications
        </Link>
        <div className="sidebar-bottom-section">
          <Link
            href="/account"
            className="sidebar-account-link"
            style={pathname == "/account" ? currentPathStyle : {}}
            onClick={() => setOpen(false)}
          >
            <Avatar />
            Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
