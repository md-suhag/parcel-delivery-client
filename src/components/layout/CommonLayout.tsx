import type { ReactNode } from "react";
import Navbar from "./nav/Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="grow-1">{children}</main>
      <Footer />
    </div>
  );
}
