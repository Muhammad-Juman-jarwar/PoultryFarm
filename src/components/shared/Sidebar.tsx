import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

interface SidebarProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setOpen }: SidebarProps) {
  const handleSidebarClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className={classNames("bg-neutral-900 w-60 p-3 lg:flex flex-col", {
          hidden: !isOpen,
        })}
      >
        <div className="flex items-center gap-2 px-1 py-3">
          <FcBullish fontSize={24} />
          <span className="text-neutral-200 text-lg">OpenShop</span>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <div
            className={classNames(linkClass, "cursor-pointer text-red-500")}
            onClick={handleSidebarClick}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarLink({ link }: any) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
