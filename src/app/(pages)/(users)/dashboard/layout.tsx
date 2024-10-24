import Header from "@/src/components/layout/header";
import SideBar from "./components/side-bar";
import { ContextPayrollProvider } from "@/src/context/cotopia-payroll-context";
import WaterMark from "@/src/components/shared/water-mark";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ContextPayrollProvider>
                <Header />
                <SideBar />
                {children}
            </ContextPayrollProvider>
            <WaterMark />
        </>
    );
}
