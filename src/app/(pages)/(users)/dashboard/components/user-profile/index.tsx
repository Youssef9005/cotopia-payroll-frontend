import Image from "next/image";

interface Props {
    sideBar?: boolean;
}

export default function UserProfile({ sideBar = false }: Props) {
    return (
        <div className={`flex ${sideBar ? "flex-row-reverse gap-x-4" : "flex-col gap-y-5"} items-center justify-center`}>
            <h1 className={`text-center text-white ${sideBar ? "text-lg" : "text-3xl"} font-semibold`}>{!sideBar && "Welcome Back"} youssefsameh80</h1>

            <div className="border border-secondary p-2 rounded-full">
                <div className={`relative ${sideBar ? "w-12 h-12" : "w-40 h-40"}`}>
                    <Image src={`/assets/user-avatar.png`} alt="User Avatar" layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>
    )
}