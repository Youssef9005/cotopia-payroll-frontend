"use client"
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import CInput from "@/src/components/shared/c-input";
import { UserInputProps } from "@/src/types/user-input";

export default function UserInput({ type, id, name, label }: UserInputProps) {
    const [userEmail, setUserEmail] = useState<string>("youssefsameh905@gmail.com");
    const [userName, setUserName] = useState<string>("youssefsameh80");
    const [ipAdders, setIpAdders] = useState<string>("TJUd6wGP8kKWM9xRaoL4RHoVrUx1KpW76s");

    function handleValues(event: ChangeEvent<HTMLInputElement>, name: "userEmail" | "userName" | "ipAdders") {
        if (name === "userEmail") {
            setUserEmail(event.target.value);
        } else if (name === "userName") {
            setUserName(event.target.value);
        } else {
            setIpAdders(event.target.value)
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