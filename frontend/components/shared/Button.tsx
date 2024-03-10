import React from 'react';


interface ButtonProps {
    customClass?: string;
    label: string | React.ReactNode;
    variant?: "primary" | "secondary" | "error" | "link" | "disabled" | "ghost"; // Add more variants as needed
    size?: "extra-small" | "small" | "medium" | "large";
    outline?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    link?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ customClass, type = "button", label, variant = 'primary', size, outline, link, onClick, disabled = false }) => {
    const coreClasses = `bg-primary text-white py-2 px-5 mb-5 rounded-md ${` ${customClass}` || ""}`;


    const handleOnClickMethod = link ? () => window.open(link, '_blank') : onClick;
    return (
        <button type={type} className={coreClasses} onClick={handleOnClickMethod} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
