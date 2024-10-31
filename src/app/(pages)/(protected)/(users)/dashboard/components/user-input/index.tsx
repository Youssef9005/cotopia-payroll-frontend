"use client";
import { ChangeEvent, useEffect, useState } from "react";
import CInput from "@/src/components/shared/c-input";
import { UserInputProps } from "@/src/types/user-input";
import { toast } from "sonner";
import { UserDataType } from "@/src/types/user-data";

export default function UserInput({ type, id, name, label }: UserInputProps) {
    const [data, setData] = useState<UserDataType | null>(null);
    const [userEmail, setUserEmail] = useState<string | undefined>(data?.userEmail);
    const [userName, setUserName] = useState<string | undefined>(data?.userName);
    const [ipAdders, setIpAdders] = useState<string>("TJUd6wGP8kKWM9xRaoL4RHoVrUx1KpW76s");

    useEffect(() => {
        const userData = localStorage.getItem("user-data");
        if (userData) {
            const parsedData = JSON.parse(userData) as UserDataType;
            setData(parsedData);
            setUserEmail(parsedData.userEmail);
            setUserName(parsedData.userName);
        }
    }, []);

    function handleValues(event: ChangeEvent<HTMLInputElement>, name: "userEmail" | "userName" | "ipAdders") {
        if (name === "userEmail") {
            setUserEmail(event.target.value);
        } else if (name === "userName") {
            setUserName(event.target.value);
        } else {
            setIpAdders(event.target.value);
        }
    }

    function handleBlur() {
        toast("Please don't forget to save your data!", {
            icon: '💁',
        });
    }

    return (
        <CInput
            type={type}
            id={id}
            name={name}
            label={label}
            value={name === "userEmail" ? userEmail : name === "userName" ? userName : ipAdders}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleValues(event, name)}
            onBlur={handleBlur}
        />
    );
}
