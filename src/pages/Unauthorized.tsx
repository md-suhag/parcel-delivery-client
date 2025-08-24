import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className="flex justify-center items-center size-full min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl text-red-300"> You are not authorized!</h1>
        <Link className="underline p-2 " to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
