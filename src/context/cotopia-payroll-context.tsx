"use client";
import React, { createContext, useContext, useState } from "react";
import { CotopiaContextProps, CotopiaContextType } from "../types/cotopia-context";

const CotopiaPayrollContext = createContext<CotopiaContextType | undefined>(
    undefined
);

export function ContextPayrollProvider({ children }: CotopiaContextProps) {
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

    return (
        <CotopiaPayrollContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
            {children}
        </CotopiaPayrollContext.Provider>
    );
}

export function useCotopiaPayroll() {
    const context = useContext(CotopiaPayrollContext);
    if (!context) {
        throw new Error("useCotopiaPayroll must be used within a ContextPayrollProvider");
    }
    return context;
}
