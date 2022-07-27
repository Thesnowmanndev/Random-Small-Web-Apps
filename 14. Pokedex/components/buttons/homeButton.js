import Link from "next/link";

export default function homeButton() {
  return (
    <div className="px-10 py-5 text-center">
      <Link href="/">
        <a>
          <button className="flex-shrink-0 px-10 py-2 text-white rounded-lg shadow-xl font-inset bg-sky-500 hover:bg-sky-700">
            Home
          </button>
        </a>
      </Link>
    </div>
  );
}
