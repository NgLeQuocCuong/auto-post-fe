import * as React from 'react';

function TrashIcon(props: any) {
    return (
        <svg
            width={32}
            height={34}
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5 4.188a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v3.25h1v-3.25a1.5 1.5 0 00-1.5-1.5h-8a1.5 1.5 0 00-1.5 1.5v3.25h1v-3.25zM32 9h-5.522l-.893 19.924a2.5 2.5 0 01-2.497 2.389H8.912a2.5 2.5 0 01-2.497-2.389L5.522 9H0V8h32v1zM6.523 9h18.954l-.89 19.88a1.5 1.5 0 01-1.5 1.433H8.913a1.5 1.5 0 01-1.498-1.433L6.523 9z"
                fill="#686868"
            />
        </svg>
    );
}

export default TrashIcon;
