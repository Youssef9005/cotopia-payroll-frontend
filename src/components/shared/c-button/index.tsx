import { CButtonProps } from "@/src/types/c-button";
import clsx from "clsx";

export default function CButton({ title, className = '', ...props }: CButtonProps) {
    return (
        <button
            className={clsx(
                "bg-black/15 px-5 py-2 rounded-md text-base font-semibold text-white border border-secondary transition-all duration-200 ease-out hover:bg-white hover:text-black",
                className
            )}
            {...props}
        >
            {title}
        </button>
    );
}
