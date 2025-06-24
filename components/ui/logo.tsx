import * as React from "react"

export default function Logo() {
    return (
        <div className="flex items-center gap-2 select-none">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16" cy="16" rx="14" ry="14" fill="#22c55e" fillOpacity="0.15"/>
                <path d="M16 25C21 19 25 10 16 7C7 10 11 19 16 25Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-bold text-green-700 tracking-tight">Ogrody</span>
        </div>
    )
} 