import Link from "next/link";
import Image from "next/image";

// Logo
import logo from "../../../public/images/logo_black.png";

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image alt="logo" src={logo} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">Lorem ipsum dolor sit amet</p>
    </div>
  </header>
);
