import NavMenu from "@/components/auth/nav-menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipments",
};

export default function EquipmentsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-3/12">
        <NavMenu />
      </div>
      <div className="flex flex-col w-9/12 p-auto m-auto">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
