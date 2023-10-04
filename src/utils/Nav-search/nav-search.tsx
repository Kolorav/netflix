"use client";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function reveal() {
  document.getElementById("search-reveal-btn")!.style.pointerEvents = `none`;
  const target = document.getElementById("search-input")!;
  target.style.pointerEvents = `auto`;
  target.style.paddingLeft = `40px`;
  target.style.width = `300px`;
  target.focus();
}
function hide() {
  document.getElementById("search-reveal-btn")!.style.pointerEvents = `auto`;
  const target = document.getElementById("search-input")!;
  (target as HTMLInputElement).value = "";
  target.style.pointerEvents = `none`;
  target.style.paddingLeft = `0px`;
  target.style.width = `40px`;
  target.blur();
}

function NavSearch() {
  // Hooks
  const [query, setQuery] = useState("");
  const [isQuery, setIsQuery] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (isQuery) {
      setPlaceholder("Type somsething to search !");
      reveal();
    } else {
      setPlaceholder("");
      setQuery("");
      hide();
    }
  }, [isQuery]);

  // Hooks - End

  const search = (event: any) => {
    event.preventDefault();
    const searched = query.split(" ").join("-");
    const url = "/search?query=" + searched;
    router.push(url);
  };

  return (
    <div className="search-box-container">
      <form
        onSubmit={(event: any) => {
          search(event);
        }}
      >
        <input
          type="text"
          id="search-input"
          aria-label="search-field"
          placeholder={placeholder}
          onChange={(event: any) => {
            setQuery(event.target.value);
          }}
          onBlur={() => {
            setIsQuery(false);
          }}
        />
        <button type="submit" hidden></button>
      </form>
      <button
        aria-label="search-reveal"
        onClick={() => {
          setIsQuery(true);
        }}
        id="search-reveal-btn"
      >
        <FiSearch />
      </button>
    </div>
  );
}

export default NavSearch;
