"use client";
import { linksArr, linkVariants } from "@/src/lib/utils/sidebar-links";
import UserProfile from "../../user-profile";
import { useCotopiaPayroll } from "@/src/context/cotopia-payroll-context";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarLinks() {
    const { sideBarOpen, setSideBarOpen } = useCotopiaPayroll();
    const pathname = usePathname();

    return (
        <div>
            <div className="py-3 px-8 border-b border-secondary">
                <UserProfile sideBar={true} />
            </div>

            <ul className="flex flex-col gap-y-8 p-3 mt-14">
                {linksArr.map((link, i) => {
                    const isActive = pathname === link.link;

                    return (
                        <motion.li
                            key={link.label}
                            custom={i}
                            initial="hidden"
                            animate={sideBarOpen ? "visible" : "hidden"}
                            variants={linkVariants}
                            className={`transition-all duration-300 ease-out p-3 rounded-md 
                                        ${isActive ? "bg-primary" : "hover:bg-primary hover:pl-9"}`}
                        >
                            <Link href={link.link} className="flex items-center gap-x-2 text-white text-base font-medium" onClick={() => setSideBarOpen(false)}>
                                {link.icon} {link.label}
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
}
