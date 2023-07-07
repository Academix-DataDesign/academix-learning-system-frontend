import { Link } from "react-router-dom";
import "./Home.scss";
import { Button } from "../../UI/Button/Button";

const Home = () => {
  return (
    <div className="index">
      <div className="div">
        <footer className="footer">
          <div className="overlap">
            <svg
              className="line-22"
              style={{
                height: "1px",
                left: "100px",
                objectFit: "cover",
                position: "absolute",
                top: "350px",
                width: "1720px",
              }}
              fill="none"
              height="2"
              viewBox="0 0 1721 2"
              width="1721"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="line"
                opacity="0.7"
                stroke="white"
                x1="0.996094"
                x2="1721"
                y1="0.507324"
                y2="0.507324"
              />
            </svg>
            <div className="socialne">
              <div className="group">
                <div className="text-wrapper">Twitter</div>

                <svg
                  className="vector-13"
                  style={{
                    height: "20px",
                    left: "1px",
                    position: "absolute",
                    top: "91px",
                    width: "20px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M3.68421 9L9.47368 0L15.2632 9H3.68421ZM15.2632 20C13.9474 20 12.8288 19.5623 11.9074 18.687C10.986 17.8117 10.5256 16.7493 10.5263 15.5C10.5263 14.25 10.987 13.1873 11.9084 12.312C12.8298 11.4367 13.9481 10.9993 15.2632 11C16.5789 11 17.6975 11.4377 18.6189 12.313C19.5404 13.1883 20.0007 14.2507 20 15.5C20 16.75 19.5393 17.8127 18.6179 18.688C17.6965 19.5633 16.5782 20.0007 15.2632 20ZM0 19.5V11.5H8.42105V19.5H0Z"
                    fill="white"
                  />
                </svg>
                <div className="text-wrapper-2">GitHub</div>

                <svg
                  className="vector-2"
                  style={{
                    height: "20px",
                    left: "1px",
                    position: "absolute",
                    top: "61px",
                    width: "20px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    clipRule="evenodd"
                    d="M13.369 0.622005C13.7674 0.223735 14.3077 0 14.871 0C15.4343 0 15.9746 0.223735 16.373 0.622005L19.378 3.62701C19.7763 4.0254 20 4.56566 20 5.12898C20 5.69231 19.7763 6.23257 19.378 6.63096L16.373 9.63596C15.9746 10.0342 15.4343 10.258 14.871 10.258C14.3077 10.258 13.7674 10.0342 13.369 9.63596L10.364 6.63096C9.96577 6.23257 9.74203 5.69231 9.74203 5.12898C9.74203 4.56566 9.96577 4.0254 10.364 3.62701L13.369 0.622005ZM6.37329 0.880123C6.93673 0.880123 7.47708 1.10395 7.87549 1.50235C8.2739 1.90076 8.49772 2.44112 8.49772 3.00455V7.25342C8.49772 7.81685 8.2739 8.35721 7.87549 8.75561C7.47708 9.15402 6.93673 9.37785 6.37329 9.37785H2.12443C1.561 9.37785 1.02064 9.15402 0.622231 8.75561C0.223823 8.35721 0 7.81685 0 7.25342V3.00455C0 2.44112 0.223823 1.90076 0.622231 1.50235C1.02064 1.10395 1.561 0.880123 2.12443 0.880123H6.37329ZM19.1199 13.6267C19.1199 13.0633 18.8961 12.5229 18.4976 12.1245C18.0992 11.7261 17.5589 11.5023 16.9954 11.5023H12.7466C12.1832 11.5023 11.6428 11.7261 11.2444 12.1245C10.846 12.5229 10.6222 13.0633 10.6222 13.6267V17.8756C10.6222 18.439 10.846 18.9794 11.2444 19.3778C11.6428 19.7762 12.1832 20 12.7466 20H16.9954C17.5589 20 18.0992 19.7762 18.4976 19.3778C18.8961 18.9794 19.1199 18.439 19.1199 17.8756V13.6267ZM6.37329 11.5023C6.93673 11.5023 7.47708 11.7261 7.87549 12.1245C8.2739 12.5229 8.49772 13.0633 8.49772 13.6267V17.8756C8.49772 18.439 8.2739 18.9794 7.87549 19.3778C7.47708 19.7762 6.93673 20 6.37329 20H2.12443C1.561 20 1.02064 19.7762 0.622231 19.3778C0.223823 18.9794 0 18.439 0 17.8756V13.6267C0 13.0633 0.223823 12.5229 0.622231 12.1245C1.02064 11.7261 1.561 11.5023 2.12443 11.5023H6.37329Z"
                    fill="white"
                    fillRule="evenodd"
                  />
                </svg>
                <div className="text-wrapper-3">Linkedln</div>

                <svg
                  className="vector-3"
                  style={{
                    height: "20px",
                    left: "0",
                    position: "absolute",
                    top: "31px",
                    width: "22px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 22 20"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M11 0C10.5877 -6.5189e-09 10.1794 0.0861673 9.79848 0.253582C9.41755 0.420997 9.07144 0.666381 8.77989 0.975724C8.48834 1.28507 8.25707 1.65231 8.09928 2.05648C7.9415 2.46066 7.86029 2.89385 7.86029 3.33133C7.86029 3.76881 7.9415 4.202 8.09928 4.60617C8.25707 5.01035 8.48834 5.37759 8.77989 5.68693C9.07144 5.99628 9.41755 6.24166 9.79848 6.40908C10.1794 6.57649 10.5877 6.66266 11 6.66266C11.8327 6.66266 12.6313 6.31168 13.2201 5.68693C13.8089 5.06219 14.1397 4.21485 14.1397 3.33133C14.1397 2.44781 13.8089 1.60047 13.2201 0.975724C12.6313 0.350978 11.8327 0 11 0ZM18.0714 1.664C17.4463 1.664 16.8467 1.92749 16.4047 2.39652C15.9626 2.86555 15.7143 3.50169 15.7143 4.16499C15.7143 4.8283 15.9626 5.46444 16.4047 5.93347C16.8467 6.4025 17.4463 6.66599 18.0714 6.66599C18.6966 6.66599 19.2961 6.4025 19.7382 5.93347C20.1802 5.46444 20.4286 4.8283 20.4286 4.16499C20.4286 3.50169 20.1802 2.86555 19.7382 2.39652C19.2961 1.92749 18.6966 1.664 18.0714 1.664ZM3.92857 1.664C3.30342 1.664 2.70387 1.92749 2.26182 2.39652C1.81977 2.86555 1.57143 3.50169 1.57143 4.16499C1.57143 4.8283 1.81977 5.46444 2.26182 5.93347C2.70387 6.4025 3.30342 6.66599 3.92857 6.66599C4.55372 6.66599 5.15327 6.4025 5.59532 5.93347C6.03737 5.46444 6.28571 4.8283 6.28571 4.16499C6.28571 3.50169 6.03737 2.86555 5.59532 2.39652C5.15327 1.92749 4.55372 1.664 3.92857 1.664ZM6.28571 9.98899C6.28862 9.54881 6.45546 9.12771 6.74985 8.81754C7.04423 8.50738 7.44227 8.33331 7.85714 8.33332H14.1429C14.5596 8.33332 14.9593 8.50899 15.254 8.82168C15.5487 9.13436 15.7143 9.55845 15.7143 10.0007V15.0027C15.7142 15.5274 15.6368 16.0489 15.4849 16.5483C15.1369 17.6799 14.4201 18.6428 13.4632 19.2642C12.5064 19.8855 11.372 20.1246 10.264 19.9384C9.15593 19.7522 8.14673 19.153 7.41759 18.2484C6.68844 17.3438 6.28713 16.193 6.28571 15.0027V9.98899ZM4.71429 10.0007C4.71429 9.39208 4.86671 8.82352 5.13543 8.33332H1.57143C1.15466 8.33332 0.754961 8.50899 0.460261 8.82168C0.165561 9.13436 2.17506e-07 9.55845 2.17506e-07 10.0007V14.169C-0.000213789 14.8514 0.157498 15.5235 0.459286 16.1262C0.761074 16.7288 1.19771 17.2437 1.73084 17.6254C2.26397 18.0072 2.87729 18.2443 3.51695 18.3158C4.1566 18.3873 4.80302 18.291 5.39943 18.0355C4.94714 17.0961 4.71228 16.0559 4.71429 15.001V10.0007ZM17.2857 10.0007V15.0027C17.2857 16.0948 17.039 17.1252 16.6006 18.0355C17.197 18.291 17.8434 18.3873 18.4831 18.3158C19.1227 18.2443 19.736 18.0072 20.2692 17.6254C20.8023 17.2437 21.2389 16.7288 21.5407 16.1262C21.8425 15.5235 22.0002 14.8514 22 14.169V10.0007C22 9.55845 21.8344 9.13436 21.5397 8.82168C21.245 8.50899 20.8453 8.33332 20.4286 8.33332H16.8646C17.1317 8.82352 17.2857 9.39208 17.2857 10.0007Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <div className="text-wrapper-4">Instagram</div>

                <svg
                  className="vector-4"
                  style={{
                    height: "20px",
                    left: "0",
                    position: "absolute",
                    top: "1px",
                    width: "22px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 23 20"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M8.64347 18.7992V12.795H13.4468V18.7992C13.4468 19.4596 13.9872 20 14.6477 20H18.2502C18.9107 20 19.451 19.4596 19.451 18.7992V10.3933H21.4925C22.0449 10.3933 22.309 9.7088 21.8887 9.34854L11.8497 0.306214C11.3934 -0.102071 10.6969 -0.102071 10.2406 0.306214L0.201563 9.34854C-0.206722 9.7088 0.0454541 10.3933 0.597841 10.3933H2.63927V18.7992C2.63927 19.4596 3.17965 20 3.84011 20H7.44263C8.10309 20 8.64347 19.4596 8.64347 18.7992Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </div>
              <svg
                className="line-21"
                style={{
                  height: "1px",
                  left: "0",
                  position: "absolute",
                  top: "41px",
                  width: "170px",
                }}
                fill="none"
                height="23"
                viewBox="0 0 190 23"
                width="190"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="g" filter="url(#filter0_d_132_307)" opacity="0.5">
                  <line
                    className="line"
                    stroke="white"
                    strokeWidth="3"
                    x1="6"
                    x2="176"
                    y1="7.5"
                    y2="7.5"
                  />
                </g>
                <defs className="defs">
                  <filter
                    className="filter"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="23"
                    id="filter0_d_132_307"
                    width="190"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      className="fe_flood"
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      className="fe_color_matrix"
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset className="fe_offset" dx="4" dy="4" />
                    <feGaussianBlur
                      className="fe_gaussian_blur"
                      stdDeviation="5"
                    />
                    <feComposite
                      className="fe_composite"
                      in2="hardAlpha"
                      operator="out"
                    />
                    <feColorMatrix
                      className="fe_color_matrix"
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                    />
                    <feBlend
                      className="fe_blend"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_132_307"
                    />
                    <feBlend
                      className="fe_blend"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_132_307"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="text-wrapper-5">Social Media</div>
            </div>
            <div className="contact">
              <div className="group-2">
                <div className="courses">Support</div>

                <svg
                  className="vector-13"
                  style={{
                    height: "20px",
                    left: "1px",
                    position: "absolute",
                    top: "91px",
                    width: "20px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M3.68421 9L9.47368 0L15.2632 9H3.68421ZM15.2632 20C13.9474 20 12.8288 19.5623 11.9074 18.687C10.986 17.8117 10.5256 16.7493 10.5263 15.5C10.5263 14.25 10.987 13.1873 11.9084 12.312C12.8298 11.4367 13.9481 10.9993 15.2632 11C16.5789 11 17.6975 11.4377 18.6189 12.313C19.5404 13.1883 20.0007 14.2507 20 15.5C20 16.75 19.5393 17.8127 18.6179 18.688C17.6965 19.5633 16.5782 20.0007 15.2632 20ZM0 19.5V11.5H8.42105V19.5H0Z"
                    fill="white"
                  />
                </svg>
                <div className="categories">FAQ</div>

                <svg
                  className="vector-2"
                  style={{
                    height: "20px",
                    left: "1px",
                    position: "absolute",
                    top: "61px",
                    width: "20px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    clipRule="evenodd"
                    d="M13.369 0.622005C13.7674 0.223735 14.3077 0 14.871 0C15.4343 0 15.9746 0.223735 16.373 0.622005L19.378 3.62701C19.7763 4.0254 20 4.56566 20 5.12898C20 5.69231 19.7763 6.23257 19.378 6.63096L16.373 9.63596C15.9746 10.0342 15.4343 10.258 14.871 10.258C14.3077 10.258 13.7674 10.0342 13.369 9.63596L10.364 6.63096C9.96577 6.23257 9.74203 5.69231 9.74203 5.12898C9.74203 4.56566 9.96577 4.0254 10.364 3.62701L13.369 0.622005ZM6.37329 0.880123C6.93673 0.880123 7.47708 1.10395 7.87549 1.50235C8.2739 1.90076 8.49772 2.44112 8.49772 3.00455V7.25342C8.49772 7.81685 8.2739 8.35721 7.87549 8.75561C7.47708 9.15402 6.93673 9.37785 6.37329 9.37785H2.12443C1.561 9.37785 1.02064 9.15402 0.622231 8.75561C0.223823 8.35721 0 7.81685 0 7.25342V3.00455C0 2.44112 0.223823 1.90076 0.622231 1.50235C1.02064 1.10395 1.561 0.880123 2.12443 0.880123H6.37329ZM19.1199 13.6267C19.1199 13.0633 18.8961 12.5229 18.4976 12.1245C18.0992 11.7261 17.5589 11.5023 16.9954 11.5023H12.7466C12.1832 11.5023 11.6428 11.7261 11.2444 12.1245C10.846 12.5229 10.6222 13.0633 10.6222 13.6267V17.8756C10.6222 18.439 10.846 18.9794 11.2444 19.3778C11.6428 19.7762 12.1832 20 12.7466 20H16.9954C17.5589 20 18.0992 19.7762 18.4976 19.3778C18.8961 18.9794 19.1199 18.439 19.1199 17.8756V13.6267ZM6.37329 11.5023C6.93673 11.5023 7.47708 11.7261 7.87549 12.1245C8.2739 12.5229 8.49772 13.0633 8.49772 13.6267V17.8756C8.49772 18.439 8.2739 18.9794 7.87549 19.3778C7.47708 19.7762 6.93673 20 6.37329 20H2.12443C1.561 20 1.02064 19.7762 0.622231 19.3778C0.223823 18.9794 0 18.439 0 17.8756V13.6267C0 13.0633 0.223823 12.5229 0.622231 12.1245C1.02064 11.7261 1.561 11.5023 2.12443 11.5023H6.37329Z"
                    fill="white"
                    fillRule="evenodd"
                  />
                </svg>
                <div className="text-wrapper-6">Email</div>

                <svg
                  className="vector-3"
                  style={{
                    height: "20px",
                    left: "0",
                    position: "absolute",
                    top: "31px",
                    width: "22px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 22 20"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M11 0C10.5877 -6.5189e-09 10.1794 0.0861673 9.79848 0.253582C9.41755 0.420997 9.07144 0.666381 8.77989 0.975724C8.48834 1.28507 8.25707 1.65231 8.09928 2.05648C7.9415 2.46066 7.86029 2.89385 7.86029 3.33133C7.86029 3.76881 7.9415 4.202 8.09928 4.60617C8.25707 5.01035 8.48834 5.37759 8.77989 5.68693C9.07144 5.99628 9.41755 6.24166 9.79848 6.40908C10.1794 6.57649 10.5877 6.66266 11 6.66266C11.8327 6.66266 12.6313 6.31168 13.2201 5.68693C13.8089 5.06219 14.1397 4.21485 14.1397 3.33133C14.1397 2.44781 13.8089 1.60047 13.2201 0.975724C12.6313 0.350978 11.8327 0 11 0ZM18.0714 1.664C17.4463 1.664 16.8467 1.92749 16.4047 2.39652C15.9626 2.86555 15.7143 3.50169 15.7143 4.16499C15.7143 4.8283 15.9626 5.46444 16.4047 5.93347C16.8467 6.4025 17.4463 6.66599 18.0714 6.66599C18.6966 6.66599 19.2961 6.4025 19.7382 5.93347C20.1802 5.46444 20.4286 4.8283 20.4286 4.16499C20.4286 3.50169 20.1802 2.86555 19.7382 2.39652C19.2961 1.92749 18.6966 1.664 18.0714 1.664ZM3.92857 1.664C3.30342 1.664 2.70387 1.92749 2.26182 2.39652C1.81977 2.86555 1.57143 3.50169 1.57143 4.16499C1.57143 4.8283 1.81977 5.46444 2.26182 5.93347C2.70387 6.4025 3.30342 6.66599 3.92857 6.66599C4.55372 6.66599 5.15327 6.4025 5.59532 5.93347C6.03737 5.46444 6.28571 4.8283 6.28571 4.16499C6.28571 3.50169 6.03737 2.86555 5.59532 2.39652C5.15327 1.92749 4.55372 1.664 3.92857 1.664ZM6.28571 9.98899C6.28862 9.54881 6.45546 9.12771 6.74985 8.81754C7.04423 8.50738 7.44227 8.33331 7.85714 8.33332H14.1429C14.5596 8.33332 14.9593 8.50899 15.254 8.82168C15.5487 9.13436 15.7143 9.55845 15.7143 10.0007V15.0027C15.7142 15.5274 15.6368 16.0489 15.4849 16.5483C15.1369 17.6799 14.4201 18.6428 13.4632 19.2642C12.5064 19.8855 11.372 20.1246 10.264 19.9384C9.15593 19.7522 8.14673 19.153 7.41759 18.2484C6.68844 17.3438 6.28713 16.193 6.28571 15.0027V9.98899ZM4.71429 10.0007C4.71429 9.39208 4.86671 8.82352 5.13543 8.33332H1.57143C1.15466 8.33332 0.754961 8.50899 0.460261 8.82168C0.165561 9.13436 2.17506e-07 9.55845 2.17506e-07 10.0007V14.169C-0.000213789 14.8514 0.157498 15.5235 0.459286 16.1262C0.761074 16.7288 1.19771 17.2437 1.73084 17.6254C2.26397 18.0072 2.87729 18.2443 3.51695 18.3158C4.1566 18.3873 4.80302 18.291 5.39943 18.0355C4.94714 17.0961 4.71228 16.0559 4.71429 15.001V10.0007ZM17.2857 10.0007V15.0027C17.2857 16.0948 17.039 17.1252 16.6006 18.0355C17.197 18.291 17.8434 18.3873 18.4831 18.3158C19.1227 18.2443 19.736 18.0072 20.2692 17.6254C20.8023 17.2437 21.2389 16.7288 21.5407 16.1262C21.8425 15.5235 22.0002 14.8514 22 14.169V10.0007C22 9.55845 21.8344 9.13436 21.5397 8.82168C21.245 8.50899 20.8453 8.33332 20.4286 8.33332H16.8646C17.1317 8.82352 17.2857 9.39208 17.2857 10.0007Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <div className="text-wrapper-7">Phone</div>

                <svg
                  className="vector-4"
                  style={{
                    height: "20px",
                    left: "0",
                    position: "absolute",
                    top: "1px",
                    width: "22px",
                  }}
                  fill="none"
                  height="20"
                  viewBox="0 0 23 20"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M8.64347 18.7992V12.795H13.4468V18.7992C13.4468 19.4596 13.9872 20 14.6477 20H18.2502C18.9107 20 19.451 19.4596 19.451 18.7992V10.3933H21.4925C22.0449 10.3933 22.309 9.7088 21.8887 9.34854L11.8497 0.306214C11.3934 -0.102071 10.6969 -0.102071 10.2406 0.306214L0.201563 9.34854C-0.206722 9.7088 0.0454541 10.3933 0.597841 10.3933H2.63927V18.7992C2.63927 19.4596 3.17965 20 3.84011 20H7.44263C8.10309 20 8.64347 19.4596 8.64347 18.7992Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </div>

              <svg
                className="line-21-1"
                style={{
                  height: "1px",
                  left: "0",
                  position: "absolute",
                  top: "41px",
                  width: "150px",
                }}
                fill="none"
                height="23"
                viewBox="0 0 170 23"
                width="170"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="g" filter="url(#filter0_d_132_319)" opacity="0.5">
                  <line
                    className="line"
                    stroke="white"
                    strokeWidth="3"
                    x1="6"
                    x2="156"
                    y1="7.5"
                    y2="7.5"
                  />
                </g>
                <defs className="defs">
                  <filter
                    className="filter"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="23"
                    id="filter0_d_132_319"
                    width="170"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      className="fe_flood"
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      className="fe_color_matrix"
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset className="fe_offset" dx="4" dy="4" />
                    <feGaussianBlur
                      className="fe_gaussian_blur"
                      stdDeviation="5"
                    />
                    <feComposite
                      className="fe_composite"
                      in2="hardAlpha"
                      operator="out"
                    />
                    <feColorMatrix
                      className="fe_color_matrix"
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                    />
                    <feBlend
                      className="fe_blend"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_132_319"
                    />
                    <feBlend
                      className="fe_blend"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_132_319"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="text-wrapper-8">Contact</div>
            </div>
            <div className="osnovno">
              <div className="group-3">
                <div className="text-wrapper-9">Courses</div>

                <div className="text-wrapper-10">Categories</div>

                <div className="text-wrapper-11">About</div>

                <div className="text-wrapper-12">Home</div>
              </div>

              <svg
                className="line-21-2"
                style={{
                  height: "1px",
                  left: "0",
                  position: "absolute",
                  top: "41px",
                  width: "150px",
                }}
                fill="none"
                height="23"
                viewBox="0 0 170 23"
                width="170"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="g" filter="url(#filter0_d_132_331)" opacity="0.5">
                  <line
                    className="line"
                    stroke="white"
                    strokeWidth="3"
                    x1="6"
                    x2="156"
                    y1="7.5"
                    y2="7.5"
                  />
                </g>
                <defs className="defs">
                  <filter
                    className="filter"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="23"
                    id="filter0_d_132_331"
                    width="170"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      className="fe_flood"
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      className="fe_color_matrix"
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset className="fe_offset" dx="4" dy="4" />
                    <feGaussianBlur
                      className="fe_gaussian_blur"
                      stdDeviation="5"
                    />
                    <feComposite
                      className="fe_composite"
                      in2="hardAlpha"
                      operator="out"
                    />
                    <feColorMatrix
                      className="fe_color_matrix"
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                    />
                    <feBlend
                      className="fe_blend"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_132_331"
                    />
                    <feBlend
                      className="fe_blend"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_132_331"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="text-wrapper-13">Navigation</div>
            </div>
            <div className="made-by-academix">All rights reserved 2023</div>
            <div className="logo">
              <div className="overlap-group-2">
                <div className="text-wrapper-14">Academix</div>
                <img
                  className="img"
                  alt="Logo"
                  src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/logo-2@2x.png"
                />
              </div>
            </div>
          </div>
        </footer>
        <div className="sponsors-partners">
          <div className="group-4">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
        </div>
        <div className="courses-2">
          <div className="cards">
            <div className="element">
              <div className="overlap-group-3">
                <div className="element-2">
                  <img
                    className="card"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/card@2x.png"
                  />
                  <img
                    className="card-2"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/card-2@2x.png"
                  />
                  <img
                    className="card-3"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/card-1@2x.png"
                  />
                  <img
                    className="card-4"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/card-9@2x.png"
                  />
                </div>
                <img
                  className="arrows"
                  alt="Arrows"
                  src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/arrows.png"
                />
              </div>
            </div>
          </div>
          <div className="txt">
            <div className="text-wrapper-15">Most Listened Courses</div>
            <div className="text-wrapper-16">Courses</div>
          </div>
        </div>
        <div className="register">
          <div className="overlap-2">
            <Button
              style={{
                width: "215px",
                height: "65px",
                left: "1471px",
                position: "absolute",
                top: "539px",
              }}
              className="log-in"
            >
              Register Here
            </Button>

            <div className="text-wrapper-17">Register today!</div>
            <p className="p">
              Unlock boundless knowledge and elevate your learning journey.
              Register to our website today and embark on a transformative
              educational experience!
            </p>
            <img
              className="image-removebg"
              alt="Image removebg"
              src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/image-removebg-preview--1--1.png"
            />
          </div>
        </div>
        <div className="categories-2">
          <div className="main">
            <div className="overlap-3">
              <div className="cards-2">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-4">
                    <div className="rectangle-6">
                      <svg
                        style={{
                          position: "relative",
                          top: "15px",
                          left: "15px",
                        }}
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 37.1875C8.75 22.75 20.5625 10.9375 35 10.9375C49.4375 10.9375 61.25 22.75 61.25 37.1875"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.9375 35H6.5625V39.375H10.9375V35Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M63.4375 35H59.0625V39.375H63.4375V35Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M37.1875 8.75H32.8125V13.125H37.1875V8.75Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.75 13.125C9.95812 13.125 10.9375 12.1456 10.9375 10.9375C10.9375 9.72938 9.95812 8.75 8.75 8.75C7.54188 8.75 6.5625 9.72938 6.5625 10.9375C6.5625 12.1456 7.54188 13.125 8.75 13.125Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M61.25 13.125C62.4581 13.125 63.4375 12.1456 63.4375 10.9375C63.4375 9.72938 62.4581 8.75 61.25 8.75C60.0419 8.75 59.0625 9.72938 59.0625 10.9375C59.0625 12.1456 60.0419 13.125 61.25 13.125Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.75 10.9375H61.25"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M35 21.875L21.875 42C25.375 45.9375 28 50.9687 29.3125 56.875H35H40.6875C42 50.9687 44.625 45.7188 48.125 42L35 21.875Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M35 37.1875V22.5312"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M35 45.9375C37.4162 45.9375 39.375 43.9787 39.375 41.5625C39.375 39.1463 37.4162 37.1875 35 37.1875C32.5838 37.1875 30.625 39.1463 30.625 41.5625C30.625 43.9787 32.5838 45.9375 35 45.9375Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M41.5625 56.875H28.4375V63.4375H41.5625V56.875Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-wrapper-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-wrapper-19">Design</div>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-4">
                    <div className="rectangle-7">
                      <svg
                        style={{
                          position: "relative",
                          left: "15px",
                          top: "15px",
                        }}
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_168_1866)">
                          <path
                            d="M40.833 29.167H46.6663V31.3749C48.6429 30.0543 50.9409 29.2953 53.3151 29.1788C55.6894 29.0624 58.0507 29.593 60.1469 30.7138C62.2432 31.8347 63.9956 33.5039 65.2172 35.543C66.4388 37.5822 67.0837 39.9149 67.083 42.292V58.3337H61.2497V42.292C61.2497 38.1212 57.8226 35.0003 53.958 35.0003C50.0934 35.0003 46.6663 38.1212 46.6663 42.292V58.3337H40.833V29.167ZM34.9997 11.667V17.5003H11.6663V32.0837H34.9997V37.917H11.6663V52.5003H34.9997V58.3337H5.83301V11.667H34.9997Z"
                            fill="#235284"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_168_1866">
                            <rect width="70" height="70" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-wrapper-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-wrapper-21">English</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-5">
                    <div className="rectangle-8">
                      <svg
                        style={{
                          position: "relative",
                          left: "15px",
                          top: "15px",
                        }}
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5625 24.0625H63.4375"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.3125 19.6875C14.6562 19.6875 14.2188 19.4687 13.7813 19.0312C13.3438 18.5937 13.125 18.1563 13.125 17.5C13.125 16.8437 13.3438 16.4063 13.7813 15.9688L14 15.75C14.2188 15.75 14.2187 15.5312 14.4375 15.5312C14.6562 15.3125 14.6563 15.3125 14.875 15.3125C15.0938 15.3125 15.5312 15.3125 15.75 15.3125C15.9687 15.3125 15.9688 15.3125 16.1875 15.5312C16.4063 15.5312 16.4062 15.75 16.625 15.75L16.8437 15.9688C17.0625 16.1875 17.2813 16.4062 17.2813 16.625C17.5 16.8437 17.5 17.2812 17.5 17.5C17.5 17.7188 17.5 18.1562 17.2813 18.375C17.2813 18.5937 17.0625 18.8125 16.8437 19.0312C16.4062 19.4687 15.9688 19.6875 15.3125 19.6875Z"
                          fill="#235284"
                        />
                        <path
                          d="M21.875 19.6876C21.2187 19.6876 20.7813 19.4688 20.3438 19.0313C19.9063 18.5938 19.6875 18.1563 19.6875 17.5001C19.6875 17.2813 19.6875 16.8438 19.9063 16.6251C20.125 16.4063 20.125 16.1876 20.3438 15.9688C20.5625 15.7501 20.7813 15.5313 21 15.5313C21.875 15.0938 22.75 15.3126 23.4062 15.9688C23.625 16.1876 23.8437 16.4063 23.8437 16.6251C24.0625 16.8438 24.0625 17.2813 24.0625 17.5001C24.0625 18.1563 23.8437 18.5938 23.4062 19.0313C22.9687 19.4688 22.5313 19.6876 21.875 19.6876Z"
                          fill="#235284"
                        />
                        <path
                          d="M28.4375 19.6875C28.2187 19.6875 27.7813 19.6875 27.5625 19.4687C27.3438 19.25 27.125 19.25 26.9063 19.0312C26.6875 18.8125 26.4688 18.5937 26.4688 18.375C26.25 18.1562 26.25 17.7187 26.25 17.5C26.25 17.2812 26.25 16.8437 26.4688 16.625C26.6875 16.4062 26.6875 16.1875 26.9063 15.9688C27.7813 15.0938 29.0937 15.0938 29.9687 15.9688C30.1875 16.1875 30.4062 16.4062 30.4062 16.625C30.625 16.8437 30.625 17.2812 30.625 17.5C30.625 17.7187 30.625 18.1562 30.4062 18.375C30.1875 18.5937 30.1875 18.8125 29.9687 19.0312C29.5312 19.4687 29.0938 19.6875 28.4375 19.6875Z"
                          fill="#235284"
                        />
                        <path
                          d="M59.0625 10.9375H10.9375C8.53125 10.9375 6.5625 12.9062 6.5625 15.3125V54.6875C6.5625 57.0938 8.53125 59.0625 10.9375 59.0625H59.0625C61.4688 59.0625 63.4375 57.0938 63.4375 54.6875V15.3125C63.4375 12.9062 61.4688 10.9375 59.0625 10.9375Z"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24.0625 35L17.5 41.5625L24.0625 48.125"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45.9375 35L52.5 41.5625L45.9375 48.125"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39.375 32.8125L30.625 50.3125"
                          stroke="#235284"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-wrapper-22">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-wrapper-23">Programing</div>
                  </div>
                </div>
                <div className="card-5">
                  <div className="overlap-6">
                    <div className="rectangle-9">
                      <svg
                        style={{
                          position: "relative",
                          left: "15px",
                          top: "15px",
                        }}
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_168_1881)">
                          <path
                            d="M68.9062 55.7812H64.4328V54.4797C65.3004 54.2782 66.0733 53.787 66.6241 53.087C67.1749 52.3871 67.4707 51.5203 67.4625 50.6297C67.4625 50.5203 66.5766 39.6922 63.6344 39.6922C60.6922 39.6922 59.8063 50.5641 59.8063 50.6297C59.7981 51.5203 60.0938 52.3871 60.6446 53.087C61.1954 53.787 61.9684 54.2782 62.8359 54.4797V55.7812H55.1797V37.1109L58.625 41.1906C59.5328 42.2844 61.1406 40.7859 60.2219 39.7469L31.5875 5.84063C31.4862 5.72533 31.3618 5.63263 31.2224 5.56856C31.0829 5.5045 30.9316 5.47049 30.7781 5.46875C30.4824 5.47915 30.2014 5.60015 29.9906 5.80781L19.25 17.5H5.30469C5.01461 17.5 4.73641 17.6152 4.53129 17.8204C4.32617 18.0255 4.21094 18.3037 4.21094 18.5938V55.7812H1.09375C0.803669 55.7812 0.52547 55.8965 0.320352 56.1016C0.115234 56.3067 0 56.5849 0 56.875C0 57.1651 0.115234 57.4433 0.320352 57.6484C0.52547 57.8535 0.803669 57.9688 1.09375 57.9688H68.9062C69.1963 57.9688 69.4745 57.8535 69.6796 57.6484C69.8848 57.4433 70 57.1651 70 56.875C70 56.5849 69.8848 56.3067 69.6796 56.1016C69.4745 55.8965 69.1963 55.7812 68.9062 55.7812ZM61.3703 50.6297C61.3703 48.6063 62.6281 42.2625 63.5578 41.3437C64.5313 42.2625 65.7453 48.6063 65.7453 50.6297C65.7565 51.098 65.6241 51.5586 65.3661 51.9496C65.108 52.3406 64.7366 52.6433 64.3016 52.8172C64.3016 52.15 64.575 50.6297 63.5031 50.6297C62.4313 50.6297 62.7484 52.15 62.7047 52.8172C62.2971 52.6204 61.9565 52.3081 61.7251 51.9191C61.4936 51.5302 61.3817 51.0818 61.4031 50.6297H61.3703ZM53.025 36.0938V55.7812H38.1828V36.0938H53.025ZM30.7234 8.19219L52.5 33.9062H27.5734V18.5938C27.5734 18.3037 27.4582 18.0255 27.2531 17.8204C27.048 17.6152 26.7698 17.5 26.4797 17.5H22.1047L30.7234 8.19219ZM6.36563 19.6875H25.4516V55.7812H23.3297V25.1562C23.3297 24.8662 23.2145 24.588 23.0093 24.3829C22.8042 24.1777 22.526 24.0625 22.2359 24.0625H12.7313C12.4412 24.0625 12.163 24.1777 11.9579 24.3829C11.7527 24.588 11.6375 24.8662 11.6375 25.1562V55.7812H6.36563V19.6875ZM21.2078 45.9375H13.7922V26.25H21.2078V45.9375ZM13.7922 55.7812V48.125H21.2078V55.7812H13.7922ZM27.5734 55.7812V36.0938H36.0938V55.7812H27.5734Z"
                            fill="#235284"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_168_1881">
                            <rect width="70" height="70" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-wrapper-24">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-wrapper-25">Architecture</div>
                  </div>
                </div>
              </div>
              <img
                className="arrows-2"
                alt="Arrows"
                src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/arrows-1.png"
              />
            </div>
          </div>
          <div className="txt-2">
            <div className="text-wrapper-26">Our Top Categories</div>
            <div className="text-wrapper-27">Cateogories</div>
          </div>
        </div>
        <div className="overlap-7">
          <div className="home">
            <div className="overlap-8">
              <div className="BG">
                <div className="overlap-group-5">
                  <div className="BG-2" />
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                </div>
              </div>
              <div className="milestones">
                <div className="br-wrapper">
                  <div className="br">
                    <svg
                      width="60"
                      height="61"
                      viewBox="0 0 60 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M38.965 7.23368C39.9026 6.29806 41.1742 5.77246 42.5 5.77246C43.8258 5.77246 45.0974 6.29806 46.035 7.23368L53.1075 14.2931C54.0449 15.229 54.5714 16.4982 54.5714 17.8215C54.5714 19.1449 54.0449 20.4141 53.1075 21.35L46.035 28.4094C45.0974 29.345 43.8258 29.8706 42.5 29.8706C41.1742 29.8706 39.9026 29.345 38.965 28.4094L31.8925 21.35C30.9551 20.4141 30.4286 19.1449 30.4286 17.8215C30.4286 16.4982 30.9551 15.229 31.8925 14.2931L38.965 7.23368ZM22.5 7.84006C23.8261 7.84006 25.0978 8.36587 26.0355 9.30181C26.9732 10.2378 27.5 11.5072 27.5 12.8308V22.8123C27.5 24.1359 26.9732 25.4053 26.0355 26.3413C25.0978 27.2772 23.8261 27.803 22.5 27.803H12.5C11.1739 27.803 9.90215 27.2772 8.96447 26.3413C8.02678 25.4053 7.5 24.1359 7.5 22.8123V12.8308C7.5 11.5072 8.02678 10.2378 8.96447 9.30181C9.90215 8.36587 11.1739 7.84006 12.5 7.84006H22.5ZM52.5 37.7845C52.5 36.4609 51.9732 35.1915 51.0355 34.2555C50.0978 33.3196 48.8261 32.7938 47.5 32.7938H37.5C36.1739 32.7938 34.9021 33.3196 33.9645 34.2555C33.0268 35.1915 32.5 36.4609 32.5 37.7845V47.766C32.5 49.0896 33.0268 50.359 33.9645 51.295C34.9021 52.2309 36.1739 52.7567 37.5 52.7567H47.5C48.8261 52.7567 50.0978 52.2309 51.0355 51.295C51.9732 50.359 52.5 49.0896 52.5 47.766V37.7845ZM22.5 32.7938C23.8261 32.7938 25.0978 33.3196 26.0355 34.2555C26.9732 35.1915 27.5 36.4609 27.5 37.7845V47.766C27.5 49.0896 26.9732 50.359 26.0355 51.295C25.0978 52.2309 23.8261 52.7567 22.5 52.7567H12.5C11.1739 52.7567 9.90215 52.2309 8.96447 51.295C8.02678 50.359 7.5 49.0896 7.5 47.766V37.7845C7.5 36.4609 8.02678 35.1915 8.96447 34.2555C9.90215 33.3196 11.1739 32.7938 12.5 32.7938H22.5Z"
                        fill="#235284"
                      />
                    </svg>

                    <div className="ok">
                      <div className="overlap-group-6">
                        <div className="text-wrapper-28">
                          Number of Instructors
                        </div>
                        <div className="text-wrapper-29">100+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories-3">
                  <div className="br-2">
                    <svg
                      width="60"
                      height="64"
                      viewBox="0 0 60 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0526 28.7258L28.4211 0.357422L45.7895 28.7258H11.0526ZM45.7895 63.3984C41.8421 63.3984 38.4863 62.0188 35.7221 59.2597C32.9579 56.5006 31.5768 53.1521 31.5789 49.2141C31.5789 45.2741 32.9611 41.9245 35.7253 39.1654C38.4895 36.4063 41.8442 35.0278 45.7895 35.0299C49.7368 35.0299 53.0926 36.4095 55.8568 39.1686C58.6211 41.9277 60.0021 45.2762 60 49.2141C60 53.1542 58.6179 56.5038 55.8537 59.2629C53.0895 62.022 49.7347 63.4005 45.7895 63.3984ZM0 61.8223V36.606H25.2632V61.8223H0Z"
                        fill="#235284"
                      />
                    </svg>

                    <div className="ok-2">
                      <div className="overlap-group-7">
                        <div className="text-wrapper-30">
                          Number of Instructors
                        </div>
                        <div className="text-wrapper-31">100+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="learners">
                  <div className="br-3">
                    <div className="ok-3">
                      <div className="overlap-group-8">
                        <div className="text-wrapper-32">
                          Number of Instructors
                        </div>
                        <div className="text-wrapper-33">100+</div>
                      </div>
                    </div>

                    <svg
                      width="60"
                      height="58"
                      viewBox="0 0 60 58"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.4216 9.68338L30.7295 0.469782C30.2558 0.312156 29.7437 0.312156 29.2699 0.469782L1.57787 9.68338C1.11837 9.83627 0.718717 10.1296 0.435525 10.5218C0.152334 10.914 -3.58909e-05 11.3853 6.34137e-09 11.8687V34.9027C6.34137e-09 35.5136 0.243129 36.0995 0.675902 36.5315C1.10867 36.9634 1.69564 37.2061 2.30767 37.2061C2.91971 37.2061 3.50667 36.9634 3.93944 36.5315C4.37222 36.0995 4.61535 35.5136 4.61535 34.9027V15.0647L14.3047 18.2866C11.7304 22.4379 10.9117 27.4392 12.0286 32.1925C13.1454 36.9457 16.1064 41.0623 20.2614 43.6384C15.0691 45.6711 10.5807 49.3479 7.29801 54.3751C7.12729 54.6283 7.00871 54.913 6.94915 55.2124C6.8896 55.5118 6.89027 55.82 6.95112 56.1192C7.01196 56.4184 7.13178 56.7025 7.3036 56.955C7.47541 57.2075 7.6958 57.4234 7.95196 57.5902C8.20811 57.757 8.49492 57.8713 8.79572 57.9264C9.09651 57.9816 9.40529 57.9765 9.7041 57.9115C10.0029 57.8465 10.2858 57.7228 10.5363 57.5477C10.7868 57.3726 11 57.1496 11.1634 56.8915C15.5104 50.2347 22.3758 46.4197 29.9997 46.4197C37.6237 46.4197 44.489 50.2347 48.8361 56.8915C49.1746 57.3937 49.6974 57.7427 50.2916 57.8631C50.8858 57.9835 51.5036 57.8656 52.0115 57.535C52.5193 57.2044 52.8764 56.6876 53.0055 56.0962C53.1346 55.5049 53.0254 54.8867 52.7015 54.3751C49.4188 49.3479 44.9131 45.6711 39.7381 43.6384C43.8891 41.0624 46.8473 36.9485 47.964 32.1988C49.0806 27.449 48.2646 22.4511 45.6948 18.301L58.4216 14.0685C58.8812 13.9157 59.281 13.6224 59.5643 13.2301C59.8476 12.8379 60 12.3667 60 11.8831C60 11.3996 59.8476 10.9283 59.5643 10.5361C59.281 10.1439 58.8812 9.85058 58.4216 9.69777V9.68338ZM43.8458 27.9925C43.8464 30.1775 43.328 32.3314 42.3331 34.2776C41.3383 36.2239 39.8953 37.9069 38.1225 39.1887C36.3498 40.4705 34.2979 41.3145 32.1351 41.6515C29.9723 41.9885 27.7603 41.8088 25.6805 41.1272C23.6007 40.4456 21.7125 39.2815 20.1708 37.7305C18.629 36.1795 17.4776 34.2857 16.8111 32.2045C16.1446 30.1233 15.982 27.914 16.3365 25.7579C16.6911 23.6018 17.5527 21.5604 18.8508 19.8011L29.2699 23.2562C29.7437 23.4138 30.2558 23.4138 30.7295 23.2562L41.1487 19.8011C42.9019 22.1736 43.8472 25.0445 43.8458 27.9925Z"
                        fill="#235284"
                      />
                    </svg>
                  </div>
                </div>
                <div className="instructors">
                  <div className="br-4">
                    <svg
                      width="60"
                      height="51"
                      viewBox="0 0 60 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.8824 0.344727H4.11765C3.02558 0.344727 1.97824 0.777746 1.20603 1.54852C0.433823 2.3193 0 3.3647 0 4.45475V46.7293C0 47.8193 0.433823 48.8647 1.20603 49.6355C1.97824 50.4063 3.02558 50.8393 4.11765 50.8393H8.05588C8.38982 50.8392 8.71688 50.7445 8.99906 50.5663C9.28124 50.388 9.50696 50.1335 9.65 49.8323C10.8417 47.3203 12.7234 45.1976 15.0763 43.7111C17.4292 42.2246 20.1566 41.4355 22.9412 41.4355C25.7258 41.4355 28.4531 42.2246 30.806 43.7111C33.1589 45.1976 35.0407 47.3203 36.2324 49.8323C36.3754 50.1335 36.6011 50.388 36.8833 50.5663C37.1655 50.7445 37.4925 50.8392 37.8265 50.8393H55.8824C56.9744 50.8393 58.0218 50.4063 58.794 49.6355C59.5662 48.8647 60 47.8193 60 46.7293V4.45475C60 3.3647 59.5662 2.3193 58.794 1.54852C58.0218 0.777746 56.9744 0.344727 55.8824 0.344727ZM15.2941 30.2892C15.2941 28.7795 15.7426 27.3038 16.5829 26.0486C17.4231 24.7933 18.6175 23.815 20.0148 23.2373C21.4121 22.6596 22.9497 22.5084 24.433 22.8029C25.9164 23.0975 27.279 23.8244 28.3485 24.8919C29.4179 25.9594 30.1462 27.3194 30.4413 28.8001C30.7364 30.2807 30.5849 31.8154 30.0061 33.2102C29.4274 34.6049 28.4472 35.797 27.1897 36.6357C25.9321 37.4744 24.4536 37.9221 22.9412 37.9221C20.9131 37.9221 18.968 37.1179 17.5339 35.6864C16.0998 34.255 15.2941 32.3135 15.2941 30.2892ZM56.4706 46.7293C56.4706 46.885 56.4086 47.0343 56.2983 47.1444C56.188 47.2545 56.0384 47.3164 55.8824 47.3164H38.9029C36.8452 43.6298 33.5743 40.7664 29.6441 39.2109C31.5214 37.8064 32.9084 35.848 33.6084 33.613C34.3085 31.3779 34.2862 28.9797 33.5447 26.758C32.8032 24.5363 31.38 22.6039 29.4769 21.2345C27.5738 19.8652 25.2872 19.1283 22.9412 19.1283C20.5951 19.1283 18.3085 19.8652 16.4054 21.2345C14.5023 22.6039 13.0792 24.5363 12.3377 26.758C11.5961 28.9797 11.5738 31.3779 12.2739 33.613C12.974 35.848 14.3609 37.8064 16.2382 39.2109C12.308 40.7664 9.03712 43.6298 6.97941 47.3164H4.11765C3.96164 47.3164 3.81202 47.2545 3.7017 47.1444C3.59139 47.0343 3.52941 46.885 3.52941 46.7293V4.45475C3.52941 4.29903 3.59139 4.14968 3.7017 4.03957C3.81202 3.92946 3.96164 3.8676 4.11765 3.8676H55.8824C56.0384 3.8676 56.188 3.92946 56.2983 4.03957C56.4086 4.14968 56.4706 4.29903 56.4706 4.45475V46.7293ZM50.5882 11.5005V39.6835C50.5882 40.1507 50.4023 40.5987 50.0714 40.929C49.7404 41.2594 49.2916 41.4449 48.8235 41.4449H44.1176C43.6496 41.4449 43.2008 41.2594 42.8698 40.929C42.5389 40.5987 42.3529 40.1507 42.3529 39.6835C42.3529 39.2163 42.5389 38.7683 42.8698 38.438C43.2008 38.1076 43.6496 37.9221 44.1176 37.9221H47.0588V13.2619H12.9412V16.1977C12.9412 16.6648 12.7553 17.1129 12.4243 17.4432C12.0934 17.7735 11.6445 17.9591 11.1765 17.9591C10.7084 17.9591 10.2596 17.7735 9.92864 17.4432C9.59769 17.1129 9.41177 16.6648 9.41177 16.1977V11.5005C9.41177 11.0333 9.59769 10.5853 9.92864 10.255C10.2596 9.92464 10.7084 9.73906 11.1765 9.73906H48.8235C49.2916 9.73906 49.7404 9.92464 50.0714 10.255C50.4023 10.5853 50.5882 11.0333 50.5882 11.5005Z"
                        fill="#235284"
                      />
                    </svg>

                    <div className="ok-4">
                      <div className="overlap-group-9">
                        <div className="text-wrapper-34">
                          Number of Instructors
                        </div>
                        <div className="text-wrapper-35">100+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-2">
                <h1 className="h-1">Academix</h1>
                <div className="text-wrapper-36">Learn more, get more!</div>

                <img
                  className="picture"
                  alt="Picture"
                  src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/picture.png"
                />
              </div>
              <header className="header">
                <div
                  className="avatar"
                  style={{
                    backgroundImage:
                      "url(https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/ikonica@2x.png)",
                  }}
                >
                  <div className="ellipse-4" />
                </div>
                <div className="navbar">
                  <div className="text-wrapper-37">Courses</div>
                  <div className="text-wrapper-38">Categories</div>
                  <div className="text-wrapper-39">About</div>
                  <div className="text-wrapper-40">Home</div>
                </div>
                <img
                  className="logo-2"
                  alt="Logo"
                  src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/logo-1@2x.png"
                />
              </header>
            </div>
          </div>
          <Link className="l-d" to="/index">
            <svg
              className="vector-18"
              style={{
                height: "40px",
                left: "18px",
                position: "absolute",
                top: "16px",
                width: "40px",
              }}
              fill="none"
              height="40"
              viewBox="0 0 40 40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="path"
                d="M39.9207 25.5193C38.6536 29.6566 36.1142 33.2887 32.6638 35.8989C29.6345 38.1794 26.0297 39.5702 22.254 39.9153C18.4783 40.2604 14.6812 39.5462 11.2888 37.8526C7.89643 36.1591 5.04308 33.5534 3.04904 30.328C1.05499 27.1026 -0.000822213 23.3851 9.59898e-05 19.5928C-0.0135359 15.1665 1.42511 10.8578 4.09532 7.32797C6.70493 3.87685 10.3363 1.33687 14.4726 0.0694949C14.7453 -0.0144675 15.0356 -0.0225076 15.3125 0.0462395C15.5893 0.114987 15.8422 0.25792 16.0439 0.459667C16.2456 0.661414 16.3885 0.914342 16.4572 1.19125C16.5259 1.46816 16.5179 1.75857 16.434 2.03125C15.5295 5.02376 15.4536 8.20565 16.2145 11.2379C16.9754 14.2701 18.5445 17.039 20.7546 19.2496C22.9648 21.4602 25.7331 23.0297 28.7646 23.7907C31.7962 24.5518 34.9774 24.4759 37.9692 23.5713C38.2418 23.4873 38.5322 23.4793 38.809 23.548C39.0859 23.6168 39.3387 23.7597 39.5404 23.9614C39.7421 24.1632 39.885 24.4161 39.9538 24.693C40.0225 24.9699 40.0145 25.2603 39.9305 25.533L39.9207 25.5193Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
