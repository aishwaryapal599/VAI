import Link from "next/link";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" mt-8 flex items-center gap-4  bg-gray-950 p-4  text-indigo-50">
      <div className="container mx-auto flex grow flex-col items-center justify-between p-3">
        <p>Contact Us: 9732989328</p>
        <p className="">© aishwarya.pal@stu.adamasuniversity.ac.in</p>
        <div className="flex gap-4 p-4 text-3xl">
          <Link
            target="_blank"
            className="hover:text-indigo-600hover: rounded-lg transition-all duration-300   ease-in-out hover:bg-indigo-50 hover:text-indigo-500"
            href="https://www.instagram.com/__dream__girl24__/"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            target="_blank"
            className="hover:text-indigo-600hover: rounded-lg transition-all duration-300  ease-in-out hover:bg-indigo-50 hover:text-indigo-500"
            href="https://www.linkedin.com/in/aishwarya-pal-954a82275/"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            className="hover:text-indigo-600hover: rounded-lg transition-all duration-300  ease-in-out hover:bg-indigo-50 hover:text-indigo-500"
            href="https://github.com/aishwaryapal599"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
    </footer>
  );
}
