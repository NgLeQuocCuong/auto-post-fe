import * as React from "react"
function FacebookIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="url(#pattern0)" d="M0 0H24V24H0z" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_273_28832" transform="scale(.00308)" />
        </pattern>
        <image
          id="image0_273_28832"
          width={325}
          height={325}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default FacebookIcon;