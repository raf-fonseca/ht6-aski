import Image from "next/image";
import Link from "next/link";

function Topbar() {
    return (
        <nav className="topbar md:hidden">
            <Link href="/" className="flex items-center gap-4">
                <Image
                    src="/logos/logo-large.png"
                    alt="logo"
                    width={100}
                    height={60}
                />
            </Link>
        </nav>
    );
}

export default Topbar;
