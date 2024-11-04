import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link
        href="/"
        className="text-4xl font-bold"
        style={{
          color: "red",
          marginBottom:"30px"
        }}
      >
        여기어때
      </Link>
      {/* 로그인/회원가입 텍스트와 구분선 */}
      <div className="text-center text-gray-500 mb-6">
        <p>로그인/회원가입</p>
        <hr className="border-t border-gray-300 w-64 mx-auto mt-2 mb-4" />
      </div>

      {/* 소셜 로그인 버튼 */}
      <div className="flex flex-col w-80 space-y-3">
        <Link href="/auth/kakao">
          <button className="w-full py-2 bg-yellow-400 text-black font-semibold rounded flex items-center justify-center">
            <span className="mr-2">💬</span> 카카오로 시작하기
          </button>
        </Link>

        <Link href="/auth/naver">
          <button className="w-full py-2 bg-green-500 text-white font-semibold rounded flex items-center justify-center">
            <span className="mr-2">N</span> 네이버로 시작하기
          </button>
        </Link>

        <Link href="/auth/apple">
          <button className="w-full py-2 bg-black text-white font-semibold rounded flex items-center justify-center">
            <span className="mr-2"></span> Apple로 시작하기
          </button>
        </Link>

        <Link href="/auth/facebook">
          <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded flex items-center justify-center">
            <span className="mr-2">📘</span> 페이스북으로 시작하기
          </button>
        </Link>

        <Link href="/auth/google">
          <button className="w-full py-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded flex items-center justify-center">
            <span className="mr-2">🔍</span> 구글로 시작하기
          </button>
        </Link>

        <Link href="/auth/email">
          <button className="w-full py-2 bg-blue-100 text-blue-700 font-semibold rounded flex items-center justify-center">
            <span className="mr-2">📧</span> 이메일로 시작하기
          </button>
        </Link>
      </div>

      {/* 비즈니스 로그인/회원가입 */}
      <div className="text-gray-500 mt-6">비즈니스 로그인/회원가입</div>
    </div>
  );
}
