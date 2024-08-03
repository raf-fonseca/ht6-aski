"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { sidebarLinks } from "@/constants";

function Bottombar() {
    const pathname = usePathname();
    const isActive = (route: string) => pathname === route;

    return (
        <section className="bottombar">
            <div className="bottombar_container">
                {sidebarLinks.map((link) => {
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={twMerge(
                                "text-light-3 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                                isActive(link.route) && "bg-white shadow-lg"
                            )}
                        >
                            <link.imgURL
                                className={twMerge(
                                    "object-contain h-6 w-6 flex-shrink-0",
                                    isActive(link.route) && "text-primary"
                                )}
                            />
                            <p className="text-subtle-large text-dark-1 max-sm:hidden">
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default Bottombar;
