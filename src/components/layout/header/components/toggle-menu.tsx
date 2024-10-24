"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCotopiaPayroll } from "@/src/context/cotopia-payroll-context";

export default function ToggleMenu() {
    const { sideBarOpen, setSideBarOpen } = useCotopiaPayroll()

    const iconVariants = {
        open: { rotate: 0, transition: { duration: 0.3 } },
        closed: { rotate: 180, transition: { duration: 0.4 } },
    };

    return (
        <div
            className="w-9 h-9 p-2 rounded-md shadow-xl shadow-gray-700 flex items-center justify-center bg-white cursor-pointer"
            onClick={() => setSideBarOpen(!sideBarOpen)}
        >
            <motion.div
                initial={false}
                variants={iconVariants}
                animate={sideBarOpen ? "open" : "closed"}
            >
                {sideBarOpen ? <X size={25} /> : <Menu size={25} />}
            </motion.div>
        </div>
    )
}