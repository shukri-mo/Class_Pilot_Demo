import {
  HiOutlineBookOpen,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-[1.2rem]">
        <li>
          <Link to="/dashboard"  className="flex items-center gap-[1.2rem]">
            <HiOutlineHome />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/students"  className="flex items-center gap-[1.2rem]">
            <HiOutlineUsers />
            <span>Students</span>
          </Link>
        </li>
        <li>
          <Link to="/classes"  className="flex items-center gap-[1.2rem]">
            <HiOutlineBookOpen />
            <span>Classes</span>
          </Link>
        </li>
        <li>
          <Link to="/messages"  className="flex items-center gap-[1.2rem]">
            <BsChat />
            <span>Messages</span>
          </Link>
        </li>

        <li>
          <Link to="/profile"  className="flex items-center gap-[1.2rem]">
            <HiOutlineCog6Tooth />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
