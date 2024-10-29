import Link from "next/link";
import "../globals.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-white shadow-md">
      <Link
        href="/"
        className="text-xl font-bold"
        style={{ paddingLeft: "250px", paddingRight: "100px" }}
      >
        여기어때
      </Link>

      <div className="flex space-x-4">
      <Link
  href="/login"
  className="text-xs font-bold px-5 py-2 bg-white-300 text-white rounded"
  style={{ color: "black", marginLeft: "100px", marginRight: "250px" }}
>
  로그인/회원가입
</Link>


      </div>
    </header>
  );
}
