import React from "react";

export interface CInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    id: string;
    label: string;
    placeholder?: string;
}