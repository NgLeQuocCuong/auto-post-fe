function CommentIcon(props: any) {
    return (
        <svg
            width={26}
            height={25}
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.386 4.503a2.57 2.57 0 012.57-2.57h15.82a2.57 2.57 0 012.57 2.57v18.983a.514.514 0 01-.799.428l-6.515-4.343H4.956a2.57 2.57 0 01-2.57-2.57V4.502zm2.57-1.542c-.851 0-1.542.69-1.542 1.542V17c0 .852.69 1.543 1.542 1.543h11.232c.102 0 .2.03.285.086l5.845 3.897V4.503c0-.852-.69-1.542-1.542-1.542H4.956zm12.339 5.537h-8.86V7.47h8.86v1.028zm-8.86 5.536h4.43v-1.028h-4.43v1.028z"
                fill="#111"
            />
        </svg>
    );
}

export default CommentIcon;
