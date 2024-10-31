interface Props {
    label: string;
    value: string;
}

export default function InfoCard({ label, value }: Props) {
    return (
        <div className="flex items-center justify-center gap-x-2">
            <span className="text-gray-200 font-medium text-sm">{label}</span>
            <div className="py-3 px-12 rounded-md text-center text-sm font-semibold bg-black/15 text-gray-50 border border-secondary">{value}</div>
        </div>
    )
}