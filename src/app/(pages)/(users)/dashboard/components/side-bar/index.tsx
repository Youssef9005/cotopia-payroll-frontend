"use client";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useCotopiaPayroll } from "@/src/context/cotopia-payroll-context";
import { motion } from "framer-motion";
import SideBarLinks from "./side-bar-links";
import { sideBarVariants } from "@/src/lib/utils/sidebar-links";


export default function SideBar() {
    const { sideBarOpen } = useCotopiaPayroll();
    return (
        <>
            {sideBarOpen && (
                <motion.div
                    initial={false}
                    animate={sideBarOpen ? "open" : "closed"}
                    variants={sideBarVariants}
                    className="h-screen flex flex-col justify-between p-2 z-10 bg-[#0D0D14] fixed left-0 top-0 shadow-lg"
                >
                    <SideBarLinks />

                    <Link href={"/dashboard"} className="p-3 flex items-center gap-x-2 hover:bg-gray-800 rounded transition-colors">
                        <LogOut color="red" />
                        <span className="text-gray-200">Log Out</span>
                    </Link>

                </motion.div>
            )}
        </>
    );
}
