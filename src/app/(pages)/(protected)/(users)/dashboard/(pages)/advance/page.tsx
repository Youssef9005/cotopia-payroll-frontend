"use client";
import NewAdvanceForm from "@/src/components/ui/dialog";
import CTable from "@/src/components/ui/table";
import { advanceColDefs, advanceRowData } from "@/src/lib/utils/advance-table";
import { AdvanceRowData } from "@/src/types/advance-table";

export default function Advance() {
    return (
        <div className="flex flex-col items-center">
            <NewAdvanceForm />
            <CTable<AdvanceRowData> rowData={advanceRowData} colData={advanceColDefs} />
        </div>
    )
}