function AvatarHolder(props: any) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <circle cx={24} cy={24} r={24} fill="url(#patt)" />
            <defs>
                <pattern
                    id="patt"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#image0_273_26289"
                        transform="matrix(.00585 0 0 .00585 0 -.249)"
                    />
                </pattern>
                <image
                    id="image0_273_26289"
                    width={171}
                    height={256}
                    xlinkHref="data:image/jpeg;base64,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"
                />
            </defs>
        </svg>
    );
}

export default AvatarHolder;
