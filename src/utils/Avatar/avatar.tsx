import "./style.css";
import Image from "next/image";
import { FaUserGear, FaUserLarge } from "react-icons/fa6";

function Avatar(props: any) {
  const src = props.src;

  return (
    <div className="avatar">
      {src ? <Image src={src} alt="" fill /> : <FaUserGear />}
    </div>
  );
}

export default Avatar;
