"use client";
import CTable from '@/src/components/ui/table';
import { paymentsColDefs, paymentsRowData } from '@/src/lib/utils/payments-table';
import { PaymentsRowData } from '@/src/types/payments-table';

export default function Payments() {
  return (
    <CTable<PaymentsRowData> rowData={paymentsRowData} colData={paymentsColDefs} />
  );
}
