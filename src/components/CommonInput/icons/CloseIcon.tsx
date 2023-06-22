import React from 'react';

interface CloseIconProps {
    size?: number;
    color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
    size = 24,
    color = 'currentColor',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    );
};

export default CloseIcon;
