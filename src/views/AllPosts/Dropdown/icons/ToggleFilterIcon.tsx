import { memo } from 'react';

const ToggleFilterIcon = memo(props => {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '12px' }}
            {...props}
        >
            <path
                d="M3.25 8h9.5M.75 2.5h8.5M6 13.5h4"
                stroke="#686868"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <circle cx={14} cy={2.6665} r={2} fill="#FF885C" />
        </svg>
    );
});

ToggleFilterIcon.displayName = 'ToggleFilterIcon';
export default ToggleFilterIcon;
