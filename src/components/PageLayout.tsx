import { PropsWithChildren } from "react";
import Sidebar from "./Menu/Sidebar";
import { BOTTOM_MENU, TOP_MENU } from "@/utils/const";

interface PageLayoutProps extends PropsWithChildren {}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Sidebar topMenu={TOP_MENU} bottomMenu={BOTTOM_MENU} />

      <div className="p-4 sm:ml-64">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default PageLayout;
