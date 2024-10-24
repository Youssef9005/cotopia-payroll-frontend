import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center justify-center gap-x-3">
            <Image
                src={`/assets/logo.png`}
                alt="Cotopia Payroll Logo"
                width={45}
                height={45}
            />
            <span className="text-white text-lg font-semibold">Cotopia Payroll</span>
        </div>
    )
}