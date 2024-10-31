"use client";
import { toast } from "sonner";
import UserInput from "../user-input";
import CButton from "@/src/components/shared/c-button";

export default function UserForm() {
    function handleSaveData() {
        toast.success("Your Information saved!")
    }

    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-5">

            <div className="w-1/2 flex items-center justify-center gap-x-5 ">
                <UserInput type="email" id="user-email" name="userEmail" label="Your Email" />
                <UserInput type="text" id="user-name" name="userName" label="Your Name" />
            </div>

            <div className="w-1/2 flex items-center justify-center gap-x-5">
                <UserInput type="text" id="ip-address" name="ipAdders" label="IP Address" />

                <div className="w-1/3">
                    <CButton title="Save" className="w-full mt-5" onClick={handleSaveData} />
                </div>
            </div>

        </div>
    )
}