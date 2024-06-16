import { MenuItemType } from "@/types/Menu";

interface MenuItemProps extends MenuItemType {}

function MenuItem({ label, href = "#" }: MenuItemProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <span className="ms-3">{label}</span>
      </a>
    </li>
  );
}

export default MenuItem;
