import InfoCard from "@/src/app/(pages)/(users)/dashboard/components/info-card";
import UserForm from "@/src/app/(pages)/(users)/dashboard/components/user-form";
import UserProfile from "@/src/app/(pages)/(users)/dashboard/components/user-profile";

export default function AccountInformation() {
    return (
        <div className="h-screen flex flex-1 flex-col items-center justify-between">

            <div className="w-full flex flex-col items-center justify-center gap-y-5">
                <UserProfile />
                <UserForm />
            </div>

            <div className="absolute bottom-2 flex items-center justify-center gap-x-5">
                <InfoCard label="Total Hours" value="1150" />
                <InfoCard label="Total Salary" value="8000 USDT" />
                <InfoCard label="Start Work" value="2024-02-14" />
            </div>

        </div>
    )
}