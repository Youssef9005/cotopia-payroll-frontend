import { PaymentsRowData } from "@/src/types/payments-table";
import { ColDef } from "ag-grid-community";

export const paymentsColDefs: ColDef<PaymentsRowData>[] = [
  { headerName: "ID", field: "id", checkboxSelection: true },
  { headerName: "Date", field: "date" },  { headerName: "Total Hours", field: "totalHours" },
  { headerName: "DEB", field: "deb" },
  { headerName: "Bonus", field: "bonus" },
  { headerName: "Salary", field: "salary" },
  { headerName: "Status", field: "status" },
];

export const paymentsRowData: PaymentsRowData[] = [
  {
    id: "1",
    date: "2024-02-14",
    totalHours: 180,
    deb: 0,
    bonus: 0,
    round: 2.0,
    salary: 300,
    status: "Paid",
  },
  {
    id: "2",
    date: "2024-03-14",
    totalHours: 400,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 200,
    status: "Paid",
  },
  {
    id: "3",
    date: "2024-04-14",
    totalHours: 350,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 350,
    status: "Paid",
  },
  {
    id: "4",
    date: "2024-05-14",
    totalHours: 110,
    deb: 80,
    bonus: 0,
    round: 0,
    salary: 400,
    status: "Paid",
  },
  {
    id: "5",
    date: "2024-06-14",
    totalHours: 150,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 800,
    status: "Paid",
  },
  {
    id: "6",
    date: "2024-07-14",
    totalHours: 200,
    deb: 150,
    bonus: 80,
    round: 2.5,
    salary: 1000,
    status: "Paid",
  },
  {
    id: "7",
    date: "2024-08-14",
    totalHours: 100,
    deb: 0,
    bonus: 0,
    round: 4.4,
    salary: 1500,
    status: "Not Yet",
  },
  {
    id: "8",
    date: "2024-02-14",
    totalHours: 180,
    deb: 0,
    bonus: 0,
    round: 2.0,
    salary: 300,
    status: "Paid",
  },
  {
    id: "9",
    date: "2024-03-14",
    totalHours: 400,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 200,
    status: "Paid",
  },
  {
    id: "10",
    date: "2024-04-14",
    totalHours: 350,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 350,
    status: "Paid",
  },
  {
    id: "11",
    date: "2024-05-14",
    totalHours: 110,
    deb: 80,
    bonus: 0,
    round: 0,
    salary: 400,
    status: "Paid",
  },
  {
    id: "12",
    date: "2024-06-14",
    totalHours: 150,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 800,
    status: "Paid",
  },
  {
    id: "13",
    date: "2024-07-14",
    totalHours: 200,
    deb: 150,
    bonus: 80,
    round: 2.5,
    salary: 1000,
    status: "Paid",
  },
  {
    id: "14",
    date: "2024-08-14",
    totalHours: 100,
    deb: 0,
    bonus: 0,
    round: 4.4,
    salary: 1500,
    status: "Not Yet",
  },
  {
    id: "15",
    date: "2024-02-14",
    totalHours: 180,
    deb: 0,
    bonus: 0,
    round: 2.0,
    salary: 300,
    status: "Paid",
  },
  {
    id: "16",
    date: "2024-03-14",
    totalHours: 400,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 200,
    status: "Paid",
  },
  {
    id: "17",
    date: "2024-04-14",
    totalHours: 350,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 350,
    status: "Paid",
  },
  {
    id: "18",
    date: "2024-05-14",
    totalHours: 110,
    deb: 80,
    bonus: 0,
    round: 0,
    salary: 400,
    status: "Paid",
  },
  {
    id: "19",
    date: "2024-06-14",
    totalHours: 150,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 800,
    status: "Paid",
  },
  {
    id: "20",
    date: "2024-07-14",
    totalHours: 200,
    deb: 150,
    bonus: 80,
    round: 2.5,
    salary: 1000,
    status: "Paid",
  },
  {
    id: "21",
    date: "2024-08-14",
    totalHours: 100,
    deb: 0,
    bonus: 0,
    round: 4.4,
    salary: 1500,
    status: "Not Yet",
  },
  {
    id: "22",
    date: "2024-02-14",
    totalHours: 180,
    deb: 0,
    bonus: 0,
    round: 2.0,
    salary: 300,
    status: "Paid",
  },
  {
    id: "23",
    date: "2024-03-14",
    totalHours: 400,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 200,
    status: "Paid",
  },
  {
    id: "24",
    date: "2024-04-14",
    totalHours: 350,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 350,
    status: "Paid",
  },
  {
    id: "25",
    date: "2024-05-14",
    totalHours: 110,
    deb: 80,
    bonus: 0,
    round: 0,
    salary: 400,
    status: "Paid",
  },
  {
    id: "26",
    date: "2024-06-14",
    totalHours: 150,
    deb: 0,
    bonus: 0,
    round: 0,
    salary: 800,
    status: "Paid",
  },
  {
    id: "27",
    date: "2024-07-14",
    totalHours: 200,
    deb: 150,
    bonus: 80,
    round: 2.5,
    salary: 1000,
    status: "Paid",
  },
  {
    id: "28",
    date: "2024-08-14",
    totalHours: 100,
    deb: 0,
    bonus: 0,
    round: 4.4,
    salary: 1500,
    status: "Not Yet",
  },
];
