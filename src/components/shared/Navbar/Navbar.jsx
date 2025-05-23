import { useDispatch, useSelector } from "react-redux";
import { setShowRightSidebar } from "../../../redux/features/stateSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { balance, username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div
      style={{ zIndex: 999, maxWidth: "430px" }}
      className="fixed top-0 flex flex-col w-full autoAnimate translate-y-0 "
    >
      <div className="left-0 flex flex-col h-fit text-white bg-black/20 backdrop-blur-lg">
        <div className="flex items-center justify-between w-full gap-2 py-4 px-3 md:px-0">
          <svg
            onClick={() => navigate("/")}
            width={364}
            height={127}
            className="w-20 h-6"
            viewBox="0 0 364 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="#982B4D"
            />
            <path
              d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
              fill="#982B4D"
            />
            <path
              d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
              fill="#982B4D"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
              fill="#982B4D"
            />
            <path
              d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
              fill="#982B4D"
            />
            <path
              d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
              fill="url(#paint0_linear_2941_315)"
            />
            <path
              d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
              fill="#982B4D"
            />
            <path
              d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
              fill="#982B4D"
            />
            <path
              d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
              fill="url(#paint1_linear_2941_315)"
            />
            <path
              d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
              fill="url(#paint2_linear_2941_315)"
            />
            <path
              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
              fill="url(#paint3_linear_2941_315)"
            />
            <path
              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
              fill="url(#paint4_linear_2941_315)"
            />
            <path
              d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
              fill="url(#paint5_linear_2941_315)"
            />
            <path
              d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
              fill="url(#paint6_linear_2941_315)"
            />
            <path
              d="M204.937 117.252C202.801 117.252 200.929 116.832 199.321 115.992C197.737 115.128 196.501 113.952 195.613 112.464C194.749 110.976 194.317 109.284 194.317 107.388C194.317 105.468 194.737 103.776 195.577 102.312C196.441 100.824 197.617 99.66 199.105 98.82C200.617 97.98 202.333 97.56 204.253 97.56C206.125 97.56 207.793 97.968 209.257 98.784C210.721 99.6 211.873 100.752 212.713 102.24C213.553 103.728 213.973 105.48 213.973 107.496C213.973 107.688 213.961 107.904 213.937 108.144C213.937 108.384 213.925 108.612 213.901 108.828H197.881V105.84H211.525L209.761 106.776C209.785 105.672 209.557 104.7 209.077 103.86C208.597 103.02 207.937 102.36 207.097 101.88C206.281 101.4 205.333 101.16 204.253 101.16C203.149 101.16 202.177 101.4 201.337 101.88C200.521 102.36 199.873 103.032 199.393 103.896C198.937 104.736 198.709 105.732 198.709 106.884V107.604C198.709 108.756 198.973 109.776 199.501 110.664C200.029 111.552 200.773 112.236 201.733 112.716C202.693 113.196 203.797 113.436 205.045 113.436C206.125 113.436 207.097 113.268 207.961 112.932C208.825 112.596 209.593 112.068 210.265 111.348L212.677 114.12C211.813 115.128 210.721 115.908 209.401 116.46C208.105 116.988 206.617 117.252 204.937 117.252ZM230.5 117.36C228.532 117.36 226.72 117.048 225.064 116.424C223.432 115.776 222.004 114.876 220.78 113.724C219.556 112.548 218.608 111.168 217.936 109.584C217.264 108 216.928 106.272 216.928 104.4C216.928 102.528 217.264 100.8 217.936 99.216C218.608 97.632 219.556 96.264 220.78 95.112C222.028 93.936 223.48 93.036 225.136 92.412C226.792 91.764 228.604 91.44 230.572 91.44C232.708 91.44 234.628 91.788 236.332 92.484C238.06 93.18 239.512 94.2 240.688 95.544L237.736 98.424C236.752 97.44 235.684 96.72 234.532 96.264C233.404 95.784 232.156 95.544 230.788 95.544C229.468 95.544 228.244 95.76 227.116 96.192C225.988 96.624 225.016 97.236 224.2 98.028C223.384 98.82 222.748 99.756 222.292 100.836C221.86 101.916 221.644 103.104 221.644 104.4C221.644 105.672 221.86 106.848 222.292 107.928C222.748 109.008 223.384 109.956 224.2 110.772C225.016 111.564 225.976 112.176 227.08 112.608C228.184 113.04 229.408 113.256 230.752 113.256C232 113.256 233.2 113.064 234.352 112.68C235.528 112.272 236.644 111.6 237.7 110.664L240.364 114.156C239.044 115.212 237.508 116.016 235.756 116.568C234.028 117.096 232.276 117.36 230.5 117.36ZM235.936 113.544V104.112H240.364V114.156L235.936 113.544ZM257.948 117V113.112L257.696 112.284V105.48C257.696 104.16 257.3 103.14 256.508 102.42C255.716 101.676 254.516 101.304 252.908 101.304C251.828 101.304 250.76 101.472 249.704 101.808C248.672 102.144 247.796 102.612 247.076 103.212L245.312 99.936C246.344 99.144 247.568 98.556 248.984 98.172C250.424 97.764 251.912 97.56 253.448 97.56C256.232 97.56 258.38 98.232 259.892 99.576C261.428 100.896 262.196 102.948 262.196 105.732V117H257.948ZM251.9 117.252C250.46 117.252 249.2 117.012 248.12 116.532C247.04 116.028 246.2 115.344 245.6 114.48C245.024 113.592 244.736 112.596 244.736 111.492C244.736 110.412 244.988 109.44 245.492 108.576C246.02 107.712 246.872 107.028 248.048 106.524C249.224 106.02 250.784 105.768 252.728 105.768H258.308V108.756H253.052C251.516 108.756 250.484 109.008 249.956 109.512C249.428 109.992 249.164 110.592 249.164 111.312C249.164 112.128 249.488 112.776 250.136 113.256C250.784 113.736 251.684 113.976 252.836 113.976C253.94 113.976 254.924 113.724 255.788 113.22C256.676 112.716 257.312 111.972 257.696 110.988L258.452 113.688C258.02 114.816 257.24 115.692 256.112 116.316C255.008 116.94 253.604 117.252 251.9 117.252ZM292.236 97.56C293.772 97.56 295.128 97.86 296.304 98.46C297.504 99.06 298.44 99.984 299.112 101.232C299.784 102.456 300.12 104.04 300.12 105.984V117H295.62V106.56C295.62 104.856 295.248 103.584 294.504 102.744C293.76 101.904 292.692 101.484 291.3 101.484C290.316 101.484 289.44 101.7 288.672 102.132C287.928 102.564 287.34 103.2 286.908 104.04C286.5 104.88 286.296 105.948 286.296 107.244V117H281.796V106.56C281.796 104.856 281.424 103.584 280.68 102.744C279.936 101.904 278.868 101.484 277.476 101.484C276.492 101.484 275.616 101.7 274.848 102.132C274.104 102.564 273.516 103.2 273.084 104.04C272.676 104.88 272.472 105.948 272.472 107.244V117H267.972V97.776H272.256V102.888L271.5 101.376C272.148 100.128 273.084 99.18 274.308 98.532C275.556 97.884 276.972 97.56 278.556 97.56C280.356 97.56 281.916 98.004 283.236 98.892C284.58 99.78 285.468 101.124 285.9 102.924L284.136 102.312C284.76 100.872 285.792 99.72 287.232 98.856C288.672 97.992 290.34 97.56 292.236 97.56ZM305.87 117V97.776H310.37V117H305.87ZM308.138 94.608C307.298 94.608 306.602 94.344 306.05 93.816C305.522 93.288 305.258 92.652 305.258 91.908C305.258 91.14 305.522 90.504 306.05 90C306.602 89.472 307.298 89.208 308.138 89.208C308.978 89.208 309.662 89.46 310.19 89.964C310.742 90.444 311.018 91.056 311.018 91.8C311.018 92.592 310.754 93.264 310.226 93.816C309.698 94.344 309.002 94.608 308.138 94.608ZM327.184 97.56C328.72 97.56 330.088 97.86 331.288 98.46C332.512 99.06 333.472 99.984 334.168 101.232C334.864 102.456 335.212 104.04 335.212 105.984V117H330.712V106.56C330.712 104.856 330.304 103.584 329.488 102.744C328.696 101.904 327.58 101.484 326.14 101.484C325.084 101.484 324.148 101.7 323.332 102.132C322.516 102.564 321.88 103.212 321.424 104.076C320.992 104.916 320.776 105.984 320.776 107.28V117H316.276V97.776H320.56V102.96L319.804 101.376C320.476 100.152 321.448 99.216 322.72 98.568C324.016 97.896 325.504 97.56 327.184 97.56ZM349.668 124.236C347.892 124.236 346.152 123.996 344.448 123.516C342.768 123.06 341.388 122.388 340.308 121.5L342.324 118.116C343.164 118.812 344.22 119.364 345.492 119.772C346.788 120.204 348.096 120.42 349.416 120.42C351.528 120.42 353.076 119.928 354.06 118.944C355.044 117.984 355.536 116.532 355.536 114.588V111.168L355.896 106.812L355.752 102.456V97.776H360.036V114.084C360.036 117.564 359.148 120.12 357.372 121.752C355.596 123.408 353.028 124.236 349.668 124.236ZM349.092 116.136C347.268 116.136 345.612 115.752 344.124 114.984C342.66 114.192 341.496 113.1 340.632 111.708C339.792 110.316 339.372 108.684 339.372 106.812C339.372 104.964 339.792 103.344 340.632 101.952C341.496 100.56 342.66 99.48 344.124 98.712C345.612 97.944 347.268 97.56 349.092 97.56C350.724 97.56 352.188 97.884 353.484 98.532C354.78 99.18 355.812 100.188 356.58 101.556C357.372 102.924 357.768 104.676 357.768 106.812C357.768 108.948 357.372 110.712 356.58 112.104C355.812 113.472 354.78 114.492 353.484 115.164C352.188 115.812 350.724 116.136 349.092 116.136ZM349.776 112.32C350.904 112.32 351.912 112.092 352.8 111.636C353.688 111.156 354.372 110.508 354.852 109.692C355.356 108.852 355.608 107.892 355.608 106.812C355.608 105.732 355.356 104.784 354.852 103.968C354.372 103.128 353.688 102.492 352.8 102.06C351.912 101.604 350.904 101.376 349.776 101.376C348.648 101.376 347.628 101.604 346.716 102.06C345.828 102.492 345.132 103.128 344.628 103.968C344.148 104.784 343.908 105.732 343.908 106.812C343.908 107.892 344.148 108.852 344.628 109.692C345.132 110.508 345.828 111.156 346.716 111.636C347.628 112.092 348.648 112.32 349.776 112.32Z"
              fill="white"
              fillOpacity="0.5"
            />
            <path
              d="M190.5 67.4H165.8L159.4 81.4H150L178.5 20L206.1 81.4H196.6L190.5 67.4ZM187 59.2L178.4 39.5L169.4 59.2H187Z"
              fill="white"
            />
            <path
              d="M219.9 23.6V58.4C219.9 63.4 220.7 67 222.3 69.3C224.7 72.6 228.1 74.3 232.5 74.3C236.9 74.3 240.3 72.6 242.8 69.3C244.4 67.1 245.2 63.4 245.2 58.4V23.6H253.9V60.8C253.9 66.9 252 71.9 248.2 75.8C243.9 80.2 238.7 82.4 232.5 82.4C226.3 82.4 221.1 80.2 216.8 75.8C213 71.9 211.1 66.8 211.1 60.8V23.6H219.9Z"
              fill="white"
            />
            <path
              d="M287.3 56.8L305.2 81.4H294.5L278 57.7H276.5V81.4H267.8V23.6H278C285.6 23.6 291.2 25 294.5 27.9C298.2 31.1 300.1 35.3 300.1 40.6C300.1 44.7 298.9 48.2 296.6 51.2C294.3 54.1 291.2 56 287.3 56.8ZM276.5 50.2H279.3C287.6 50.2 291.7 47 291.7 40.7C291.7 34.8 287.7 31.8 279.6 31.8H276.5V50.2Z"
              fill="white"
            />
            <path
              d="M347.9 67.4H323.2L316.8 81.4H307.4L336 20L363.5 81.4H354L347.9 67.4ZM344.3 59.2L335.7 39.5L326.7 59.2H344.3Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2941_315"
                x1="32.9175"
                y1="18.6632"
                x2="114.616"
                y2="103.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#665ECD" />
                <stop offset={1} stopColor="#C23864" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2941_315"
                x1="-423.001"
                y1="62.9341"
                x2="273.603"
                y2="62.9341"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6060D4" />
                <stop offset="0.332" stopColor="#6060D4" />
                <stop offset={1} stopColor="#CD3256" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2941_315"
                x1="-242.695"
                y1="63.2206"
                x2="446.909"
                y2="63.2206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6060D4" />
                <stop offset="0.4483" stopColor="#6060D4" />
                <stop offset={1} stopColor="#CD3256" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2941_315"
                x1="-556.097"
                y1="63.8347"
                x2="176.29"
                y2="63.8347"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6060D4" />
                <stop offset="0.3362" stopColor="#6060D4" />
                <stop offset={1} stopColor="#CD3256" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_2941_315"
                x1="-373.769"
                y1="63.3372"
                x2="314.773"
                y2="63.3372"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6060D4" />
                <stop offset="0.5594" stopColor="#6060D4" />
                <stop offset={1} stopColor="#CD3256" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_2941_315"
                x1="-332.262"
                y1="62.5771"
                x2="470.999"
                y2="62.5771"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6060D4" />
                <stop offset="0.4215" stopColor="#6060D4" />
                <stop offset={1} stopColor="#CD3256" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_2941_315"
                x1="-24.1985"
                y1="76.1908"
                x2="125.67"
                y2="76.1908"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6060D4" />
                <stop offset="0.2799" stopColor="#6060D4" />
                <stop offset="0.4009" stopColor="#6060D4" />
                <stop offset={1} stopColor="#CD3256" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex items-center justify-center gap-1 px-2 py-1 mx-1 mr-auto text-sm leading-none rounded-lg h-fit bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4 h-4 text-white"
            >
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
            <span className>{username}</span>
          </div>

          <div className="flex items-center justify-between p-2 gap-2 border-gray/20 rounded-lg w-auto h-8 lg:border">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap items-center flex-grow gap-1 text-sm">
              <span className="ml-auto text-yellow">
                <span>₹{balance}</span>
              </span>
            </div>
            <svg
              onClick={() => dispatch(setShowRightSidebar(true))}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div style={{ zIndex: 999 }} className="w-full ">
          <div className="relative flex w-full bg-black/10  backdrop-blur-3xl">
            <button
              onClick={() => navigate("/")}
              style={{ zIndex: 998 }}
              className="flex justify-center w-full gap-1 py-2 text-sm items-center text-white whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-4 h-4"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              Home
            </button>
            <button
              onClick={() => navigate("/casino")}
              style={{ zIndex: 998 }}
              className="flex justify-center w-full gap-1 py-2 text-sm items-center text-white whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 rotate-12"
                width={74}
                height={108}
                viewBox="0 0 74 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_694_23)">
                  <path
                    d="M70.7 2.4L70.15 1.93C68.7 0.68 66.85 0 64.93 0H9.12C6.99 0 4.95 0.84 3.45 2.35L2.9 2.9L2.35 3.45C0.84 4.96 0 6.99 0 9.12V98.88C0 101.01 0.84 103.05 2.35 104.55L2.9 105.1L3.45 105.65C4.95 107.15 6.99 108 9.12 108H64.93C66.84 108 68.69 107.32 70.15 106.07L70.7 105.6C72.48 104.08 73.5 101.85 73.5 99.51V8.49C73.5 6.15 72.48 3.93 70.7 2.4ZM21.01 102.05C13.56 102.05 7.53 96.01 7.53 88.57H10.42C10.42 94.42 15.16 99.16 21.01 99.16V102.05ZM48 54.94L47.55 55.39L38.99 63.95C37.75 65.19 35.75 65.19 34.51 63.95L25.5 54.94L25.52 54.92C22.85 51.79 22.99 47.1 25.94 44.14C28.89 41.18 33.62 41.05 36.74 43.74C39.86 41.05 44.58 41.18 47.54 44.14C50.5 47.1 50.63 51.79 47.96 54.92L47.98 54.94H48ZM65.53 19.31C65.53 13.46 60.79 8.72 54.94 8.72V5.83C62.39 5.83 68.42 11.87 68.42 19.31H65.53Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_694_23">
                    <rect width="73.5" height={108} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Casino
            </button>
            <button
              onClick={() => navigate("/originals")}
              style={{ zIndex: 998 }}
              className="flex justify-center w-full gap-1 py-2 text-sm items-center text-white whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                width={25}
                height={24}
                viewBox="0 0 139 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
                  fill="#929292"
                />
                <path
                  d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
                  fill="#929292"
                />
                <path
                  d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
                  fill="#929292"
                />
                <path
                  d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
                  fill="#929292"
                />
                <path
                  d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
                  fill="#929292"
                />
                <path
                  d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
                  fill="white"
                />
                <path
                  d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
                  fill="#929292"
                />
                <path
                  d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
                  fill="#929292"
                />
                <path
                  d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
                  fill="white"
                />
                <path
                  d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
                  fill="white"
                />
                <path
                  d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
                  fill="white"
                />
                <path
                  d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
                  fill="url(#paint0_linear_693_22)"
                />
                <path
                  d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
                  fill="white"
                />
                <path
                  d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_693_22"
                    x1="-373.769"
                    y1="63.3372"
                    x2="314.773"
                    y2="63.3372"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="0.5594" stopColor="white" />
                    <stop offset={1} stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
              Originals
            </button>
            <button
              onClick={() => navigate("/fast-games")}
              style={{ zIndex: 998 }}
              className="flex justify-center w-full gap-1 py-2 text-sm items-center text-white whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-4 h-4"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              Fast Games
            </button>
            <div
              style={{
                zIndex: 996,
                width: "25%",
                left:
                  pathname === "/"
                    ? "0%"
                    : pathname === "/casino"
                    ? "25%"
                    : pathname === "/originals"
                    ? "50%"
                    : pathname === "/fast-games"
                    ? "75%"
                    : "0%",
              }}
              className="absolute h-full flex flex-col justify-end items-center transition-all ease-in-out"
            >
              <div className="w-full h-2/3 bg-gradient-to-t from-white/20 to-transparent" />
              <div className="z-10 w-full h-[2px] bg-gradient-to-r from-aura1 to-aura2" />
            </div>
          </div>
        </div>
        <span className="absolute bottom-0 w-full">
          <div
            style={{ zIndex: 1000 }}
            className="scale-y-0 fixed origin-bottom flex h-[70vh] flex-col items-center w-full overflow-y-scroll transition-all ease-in-out"
          >
            <div className="flex flex-col justify-center w-full gap-2 py-4 bg-black/90">
              <span className="px-5"> Search Results</span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
