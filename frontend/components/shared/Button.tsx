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
    let coreClasses = ` py-2 px-6 rounded-md ${` ${customClass}` || ""}`;

    switch (variant) {
        case 'primary':
            coreClasses += ' bg-primary text-white bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out';
            break;
        case 'secondary':
            coreClasses += ' bg-secondary';
            break;
        case 'error':
            coreClasses += ' bg-error';
            break;
        case 'link':
            coreClasses += ' bg-link p-0 text-left';
            break;
        case 'disabled':
            coreClasses += ' bg-disabled';
            break;
        case 'ghost':
            coreClasses += ' bg-ghost bg-opacity-50 hover:bg-opacity-100 transition duration-300 ease-in-out';
            break;
        default:
            break;
    }

    switch (size) {
        case 'extra-small':
            coreClasses += ' btn-xs';
            break;
        case 'small':
            coreClasses += ' btn-sm';
            break;
        case 'large':
            coreClasses += ' btn-lg';
            break;
        default:
            break;
    }

    outline && (coreClasses += ' btn-outline');


    const handleOnClickMethod = link ? () => window.open(link, '_blank') : onClick;
    return (
        <button type={type} className={coreClasses} onClick={handleOnClickMethod} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
