function ShareIcon(props: any) {
    return (
        <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.86 4.483c0-.852.69-1.542 1.543-1.542h3.966V1.913H4.403a2.57 2.57 0 00-2.571 2.57v15.938a2.57 2.57 0 002.57 2.57h15.939a2.57 2.57 0 002.57-2.57v-3.966h-1.028v3.966c0 .852-.69 1.543-1.542 1.543H4.403c-.852 0-1.543-.691-1.543-1.543V4.483zm12.596-2.57h5.913c.852 0 1.542.69 1.542 1.542v6.427h-1.028V3.667l-9.919 9.92-.727-.727 9.919-9.92h-6.214V1.914h.514z"
                fill="#111"
            />
        </svg>
    );
}

export default ShareIcon;
