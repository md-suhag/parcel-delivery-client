import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <nav>nav</nav>
      <main className="grow-1">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
