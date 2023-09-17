import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Nav from "./Nav";

export default function MainContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-black">
        {/* ----Header Section---- */}
        <div className="relative md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto font-sans">
          <div
            className={
              !isOpen
                ? "text-white px-5 absolute pt-16 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
                : "absolute px-5 pt-16 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
            }
          >
            <div className="text-2xl font-bold">
              {isOpen ? (
                <a aria-label="Home" href="/">
                  <svg
                    viewBox="0 0 130 32"
                    aria-hidden="true"
                    className="group/logo h-8 max-sm:hidden"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      preserveAspectRatio="xMinYMid meet"
                    >
                      <rect
                        clipPath="url(#:rn:-clip)"
                        className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"
                      ></rect>
                      <use
                        href="#:rn:-path"
                        className="stroke-neutral-950"
                        fill="none"
                        strokeWidth="1.5"
                      ></use>
                      <defs>
                        <path
                          id=":rn:-path"
                          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                        ></path>
                        <clipPath id=":rn:-clip">
                          <use href="#:rn:-path"></use>
                        </clipPath>
                      </defs>
                    </svg>
                    <path
                      className="fill-neutral-950"
                      d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
                    ></path>
                  </svg>
                </a>
              ) : (
                <a aria-label="Home" href="/">
                  <svg
                    viewBox="0 0 130 32"
                    aria-hidden="true"
                    className="group/logo h-8 max-sm:hidden"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      preserveAspectRatio="xMinYMid meet"
                    >
                      <rect
                        clipPath="url(#:rn:-clip)"
                        className="h-8 transition-all duration-300 fill-neutral-50 w-0 group-hover/logo:w-8"
                      ></rect>
                      <use
                        href="#:rn:-path"
                        className="stroke-neutral-50"
                        fill="none"
                        strokeWidth="1.5"
                      ></use>
                      <defs>
                        <path
                          id=":rn:-path"
                          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                        ></path>
                        <clipPath id=":rn:-clip">
                          <use href="#:rn:-path"></use>
                        </clipPath>
                      </defs>
                    </svg>
                    <path
                      className="fill-neutral-50"
                      d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
                    ></path>
                  </svg>
                </a>
              )}

              {isOpen ? (
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-8 sm:hidden"
                >
                  <rect
                    clipPath="url(#:r8:-clip)"
                    className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"
                  ></rect>
                  <use
                    href="#:r8:-path"
                    className="stroke-neutral-950"
                    fill="none"
                    strokeWidth="1.5"
                  ></use>
                  <defs>
                    <path
                      id=":r8:-path"
                      d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    ></path>
                    <clipPath id=":r8:-clip">
                      <use href="#:r8:-path"></use>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-8 sm:hidden"
                >
                  <rect
                    clipPath="url(#:ra:-clip)"
                    className="h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8"
                  ></rect>
                  <use
                    href="#:ra:-path"
                    className="stroke-white"
                    fill="none"
                    strokeWidth="1.5"
                  ></use>
                  <defs>
                    <path
                      id=":ra:-path"
                      d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    ></path>
                    <clipPath id=":ra:-clip">
                      <use href="#:ra:-path"></use>
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>

            <div className="flex justify-center gap-5 md:gap-10">
              <button
                onClick={() => navigate("/contact")}
                className={
                  isOpen
                    ? "bg-gray-900 text-white px-5 py-1 md:py-2 rounded-full font-medium hover:bg-gray-600"
                    : "bg-white text-black px-5 py-1 md:py-2 rounded-full font-medium hover:bg-gray-100"
                }
              >
                Contact us
              </button>
              <button className="" onClick={toggleMenu}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="h-[55rem] md:h-[48rem] lg:h-[43rem] xl:h-[53rem] 2xl:h-[60rem] relative text-black bg-neutral-950">
          {/* ----Navigation Section---- */}
          <Nav />

          <div
            className={
              !isOpen
                ? "bg-white h-[50rem] md:h-[43rem] lg:h-[40rem] xl:h-[50rem] 2xl:h-[55rem] absolute top-0 translate-y-full w-full ease-in-out duration-500 rounded-t-[2rem]"
                : "bg-white h-[50rem] md:h-[43rem] lg:h-[40rem] xl:h-[50rem] 2xl:h-[55rem] absolute top-2  w-full ease-in-out duration-500 translate-y-0 rounded-t-[2rem]"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.array.isRequired,
};
