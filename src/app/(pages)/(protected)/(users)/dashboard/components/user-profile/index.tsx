"use client";
import { UserDataType } from "@/src/types/user-data";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    sideBar?: boolean;
}

export default function UserProfile({ sideBar = false }: Props) {
    const [data, setData] = useState<UserDataType | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem("user-data");
        if (userData) {
            setData(JSON.parse(userData));
        }
    }, []);


    return (
        <div className={`flex ${sideBar ? "flex-row-reverse gap-x-4" : "flex-col gap-y-5"} items-center justify-center`}>
            <h1 className={`text-center text-white ${sideBar ? "text-lg" : "text-3xl"} font-semibold`}>
                {!sideBar && "Welcome Back"} {data?.name}
            </h1>

            <div className="border border-secondary p-2 rounded-full">
                <div className={`relative ${sideBar ? "w-12 h-12" : "w-40 h-40"}`}>
                    <Image src={data?.userProfile || `/assets/user-avatar.png`} alt="User Avatar" layout="fill" objectFit="cover" className="rounded-full" />
                </div>
            </div>
        </div>
    );
}
