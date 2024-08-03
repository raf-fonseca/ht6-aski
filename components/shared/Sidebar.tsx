"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Sidebar = () => {
    const pathname = usePathname();
    const isActive = (route: string) => pathname === route;

    return (
        <div className="max-md:hidden px-6 z-[100] py-6 bg-neutral-100 max-w-[20rem] md:min-w-[18rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col">
            <div className="flex space-x-2">
                <Image
                    src="/logos/logo-large.png"
                    alt="logo"
                    width={120}
                    height={120}
                    className="object-cover object-top rounded-full"
                />
            </div>
            <div className="flex flex-col space-y-1 my-10 relative z-[100]">
                {sidebarLinks.map((link) => (
                    <Link
                        key={link.route}
                        href={link.route}
                        className={twMerge(
                            "text-light-3 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                            isActive(link.route) && "bg-white shadow-lg"
                        )}
                    >
                        <link.imgURL
                            className={twMerge(
                                "h-4 w-4 flex-shrink-0",
                                isActive(link.route) && "text-primary"
                            )}
                        />
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
