import { SideBarLinksType } from "@/src/types/side-bar-link";
import { BellRing, DollarSign, FilePen, UserCircle2 } from "lucide-react";

export const linksArr = [
    { label: "Account Information", icon: <UserCircle2 size={20} color="white" />, link: "/dashboard" },
    { label: "Payments", icon: <DollarSign size={20} color="white" />, link: "/dashboard/payments" },
    { label: "Advance", icon: <FilePen size={20} color="white" />, link: "/dashboard/advance" },
    { label: "Notifications", icon: <BellRing size={20} color="white" />, link: "/dashboard/notifications" },
] as SideBarLinksType[];

export const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};

export const sideBarVariants = {
    open: { x: 0, transition: { duration: 0.5 } },
    closed: { x: "-100%", transition: { duration: 0.5 } },
};