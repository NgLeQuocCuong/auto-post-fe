import * as React from 'react';

function SvgComponent(props) {
    return (
        <svg
            width={474}
            height={224}
            viewBox="0 0 474 224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 224c53.605-72.789 139.801-120 237-120 97.199 0 183.395 47.211 237 120H0z"
                fill="url(#paint0_linear_12696_45182)"
            />
            <path
                d="M57 108.71h62.45V133h22.628v-24.29h16.747V89.215h-16.747V2.09h-29.531L57 89.854v18.856zm62.706-19.495H81.29v-1.023l37.393-59.254h1.023v60.276zM315.175 108.71h62.45V133h22.628v-24.29H417V89.215h-16.747V2.09h-29.531l-55.547 87.763v18.856zm62.706-19.495h-38.417v-1.023l37.394-59.254h1.023v60.276z"
                fill="#D8D8D8"
            />
            <g clipPath="url(#clip0_12696_45182)">
                <path
                    d="M238.344 0c-37.498 0-68 30.505-68 68 0 37.495 30.502 68 68 68 37.497 0 68-30.505 68-68 0-37.495-30.503-68-68-68zm48.572 96.087h-17.833c1.868-7.634 2.983-16.11 3.187-25.13h22.1c-.479 9.12-3.116 17.662-7.454 25.13zm-38.875 27.191a56.152 56.152 0 01-6.741.748V102h19.827c-3.264 9.552-7.823 17.047-13.086 21.278zM215.561 102h19.826v22.023a56.198 56.198 0 01-6.741-.748c-5.262-4.228-9.821-11.723-13.085-21.275zm-33.24-31.043h22.1c.204 9.02 1.315 17.496 3.187 25.13h-17.837c-4.337-7.468-6.974-16.01-7.45-25.13zm7.45-31.044h17.834c-1.869 7.634-2.983 16.11-3.187 25.13h-22.097c.476-9.12 3.113-17.662 7.45-25.13zm38.875-27.191a56.177 56.177 0 016.741-.748V34h-19.826c3.264-9.552 7.823-17.047 13.085-21.278zM261.127 34H241.3V11.977c2.286.121 4.536.36 6.741.748 5.263 4.228 9.822 11.723 13.086 21.275zm1.806 5.913c2.002 7.58 3.199 16.134 3.424 25.13H241.3v-25.13h21.633zm-27.546 0v25.13h-25.056c.224-8.996 1.422-17.55 3.423-25.13h21.633zm-25.056 31.044h25.056v25.13h-21.633c-2.001-7.58-3.199-16.134-3.423-25.13zm30.969 25.13v-25.13h25.057c-.225 8.996-1.422 17.55-3.424 25.13H241.3zm30.967-31.044c-.204-9.02-1.316-17.496-3.187-25.13h17.833c4.335 7.468 6.972 16.01 7.451 25.13h-22.097zM282.955 34h-15.522c-2.253-7.146-5.201-13.34-8.689-18.283C268.406 19.5 276.749 25.878 282.955 34zm-65.011-18.283c-3.489 4.943-6.437 11.134-8.689 18.283h-15.522c6.206-8.122 14.549-14.499 24.211-18.283zM193.733 102h15.522c2.252 7.146 5.2 13.34 8.689 18.283-9.662-3.784-18.005-10.161-24.211-18.283zm65.011 18.283c3.488-4.943 6.436-11.134 8.689-18.283h15.522c-6.206 8.122-14.549 14.499-24.211 18.283z"
                    fill="#696969"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_12696_45182"
                    x1={237}
                    y1={104}
                    x2={237}
                    y2={224}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F0F0F0" />
                    <stop offset={1} stopColor="#fff" />
                </linearGradient>
                <clipPath id="clip0_12696_45182">
                    <path
                        fill="#fff"
                        transform="translate(170.344)"
                        d="M0 0H136V136H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export default React.memo(SvgComponent);
