import { CInputProps } from "@/src/types/c-input";
import clsx from "clsx";

export default function CInput({ type, id, name, label, placeholder, className, ...props }: CInputProps) {
    return (
        <label htmlFor={id} className="flex flex-col gap-y-1 flex-1">
            <span className="text-gray-400 text-sm font-semibold ml-1">{label}</span>
            <input
                type={type}
                name={name}
                id={id}
                className={clsx(
                    "w-full bg-[#000000]/15 border border-[#171717] rounded-md py-2 px-3 outline-none transition-all duration-200 ease-out focus:border-gray-400 text-gray-400 text-base",
                    className 
                )}
                placeholder={placeholder}
                {...props}
            />
        </label>
    )
}
