import { useEffect, useState } from "react";
import "./NewRegister.scss";
import { Button } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../../UI/Input/Input";

export default function NewRegister() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const imgBtn = document.querySelector(".img__btn");
    const cont = document.querySelector(".cont");

    const handleClick = () => {
      if (cont) {
        cont.classList.toggle("s--signup");
      }
    };

    if (imgBtn && cont) {
      imgBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (imgBtn && cont) {
        imgBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <div className="vector" onClick={() => navigate("/home")}>
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 38L20.5 20.5L38 38M38 3L20.4967 20.5L3 3"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="cont">
        {!toggle ? (
          <div className="form sign-in">
            <span className="switch-icon">
              <img
                className="instructor-img"
                alt="Instructor"
                src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/instructor@2x.png"
                onClick={() => setToggle(!toggle)}
              />
            </span>
            <h2>Welcome back,</h2>
            <label>
              <Input type="text" placeholder="Name" />
            </label>
            <label>
              <Input type="email" placeholder="Email" />
            </label>
            <label>
              <Input type="password" placeholder="Password" />
            </label>
            <label>
              <Input type="password" placeholder="Confirm password" />
            </label>
            
            <Button className="submit-2" variant={"login"}>
              Sign Up
            </Button>
          </div>
        ) : (
          <div className="form sign-in">
            <span className="switch-icon">
              <img
                className="instructor-img"
                alt="Instructor"
                src="https://generation-sessions.s3.amazonaws.com/9a1cc2cccadd13a868de937f3531f07e/img/listener@2x.png"
                onClick={() => setToggle(!toggle)}
              />
            </span>
            <h2>Welcome back,</h2>
            <div className="form-container">
              <div className="first-input-row">
                <label>
                  <Input type="text" placeholder="Name" />
                </label>
                <label>
                  <Input type="email" placeholder="Email" />
                </label>
              </div>
              <div className="second-input-row">
                <label>
                  <Input type="password" placeholder="Password" />
                </label>
                <label>
                  <Input type="password" placeholder="Confirm password" />
                </label>
              </div>
            </div>
            <div className="file">
              <svg
              style={{width: '700px', height: '191px'}}
                width="428"
                height="152"
                viewBox="0 0 428 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8" filter="url(#filter0_d_2_66)">
                  <rect
                    x="2.5"
                    y="2.5"
                    width="419"
                    height="143"
                    rx="2.5"
                    fill="white"
                    stroke="#3982B8"
                  />
                  <path
                    d="M174.578 68H171.609L171.629 66.4668H174.578C175.594 66.4668 176.44 66.2552 177.117 65.832C177.794 65.4023 178.302 64.8034 178.641 64.0352C178.986 63.2604 179.158 62.3555 179.158 61.3203V60.4512C179.158 59.6374 179.061 58.9147 178.865 58.2832C178.67 57.6452 178.383 57.1081 178.006 56.6719C177.628 56.2292 177.166 55.8939 176.619 55.666C176.079 55.4382 175.457 55.3242 174.754 55.3242H171.551V53.7812H174.754C175.685 53.7812 176.535 53.9375 177.303 54.25C178.071 54.556 178.732 55.002 179.285 55.5879C179.845 56.1673 180.275 56.8704 180.574 57.6973C180.874 58.5176 181.023 59.4421 181.023 60.4707V61.3203C181.023 62.349 180.874 63.2767 180.574 64.1035C180.275 64.9238 179.842 65.6237 179.275 66.2031C178.715 66.7826 178.038 67.2285 177.244 67.541C176.456 67.847 175.568 68 174.578 68ZM172.615 53.7812V68H170.73V53.7812H172.615ZM185.389 59.0938V68H183.582V57.4336H185.34L185.389 59.0938ZM188.689 57.375L188.68 59.0547C188.53 59.0221 188.387 59.0026 188.25 58.9961C188.12 58.9831 187.97 58.9766 187.801 58.9766C187.384 58.9766 187.016 59.0417 186.697 59.1719C186.378 59.3021 186.108 59.4844 185.887 59.7188C185.665 59.9531 185.49 60.2331 185.359 60.5586C185.236 60.8776 185.154 61.2292 185.115 61.6133L184.607 61.9062C184.607 61.2682 184.669 60.6693 184.793 60.1094C184.923 59.5495 185.122 59.0547 185.389 58.625C185.656 58.1888 185.994 57.8503 186.404 57.6094C186.821 57.362 187.316 57.2383 187.889 57.2383C188.019 57.2383 188.169 57.2546 188.338 57.2871C188.507 57.3132 188.624 57.3424 188.689 57.375ZM189.686 62.834V62.6094C189.686 61.8477 189.796 61.1413 190.018 60.4902C190.239 59.8327 190.558 59.263 190.975 58.7812C191.391 58.293 191.896 57.9154 192.488 57.6484C193.081 57.375 193.745 57.2383 194.48 57.2383C195.223 57.2383 195.89 57.375 196.482 57.6484C197.081 57.9154 197.589 58.293 198.006 58.7812C198.429 59.263 198.751 59.8327 198.973 60.4902C199.194 61.1413 199.305 61.8477 199.305 62.6094V62.834C199.305 63.5957 199.194 64.3021 198.973 64.9531C198.751 65.6042 198.429 66.1738 198.006 66.6621C197.589 67.1439 197.085 67.5215 196.492 67.7949C195.906 68.0618 195.242 68.1953 194.5 68.1953C193.758 68.1953 193.09 68.0618 192.498 67.7949C191.906 67.5215 191.398 67.1439 190.975 66.6621C190.558 66.1738 190.239 65.6042 190.018 64.9531C189.796 64.3021 189.686 63.5957 189.686 62.834ZM191.492 62.6094V62.834C191.492 63.3613 191.554 63.8594 191.678 64.3281C191.801 64.7904 191.987 65.2005 192.234 65.5586C192.488 65.9167 192.804 66.1999 193.182 66.4082C193.559 66.61 193.999 66.7109 194.5 66.7109C194.995 66.7109 195.428 66.61 195.799 66.4082C196.176 66.1999 196.489 65.9167 196.736 65.5586C196.984 65.2005 197.169 64.7904 197.293 64.3281C197.423 63.8594 197.488 63.3613 197.488 62.834V62.6094C197.488 62.0885 197.423 61.597 197.293 61.1348C197.169 60.666 196.98 60.2526 196.727 59.8945C196.479 59.5299 196.167 59.2435 195.789 59.0352C195.418 58.8268 194.982 58.7227 194.48 58.7227C193.986 58.7227 193.549 58.8268 193.172 59.0352C192.801 59.2435 192.488 59.5299 192.234 59.8945C191.987 60.2526 191.801 60.666 191.678 61.1348C191.554 61.597 191.492 62.0885 191.492 62.6094ZM203.377 59.4648V72.0625H201.561V57.4336H203.221L203.377 59.4648ZM210.496 62.6289V62.834C210.496 63.6022 210.405 64.3151 210.223 64.9727C210.04 65.6237 209.773 66.1901 209.422 66.6719C209.077 67.1536 208.65 67.528 208.143 67.7949C207.635 68.0618 207.052 68.1953 206.395 68.1953C205.724 68.1953 205.132 68.0846 204.617 67.8633C204.103 67.6419 203.667 67.3197 203.309 66.8965C202.951 66.4733 202.664 65.9655 202.449 65.373C202.241 64.7806 202.098 64.1133 202.02 63.3711V62.2773C202.098 61.4961 202.244 60.7962 202.459 60.1777C202.674 59.5592 202.957 59.0319 203.309 58.5957C203.667 58.153 204.1 57.8177 204.607 57.5898C205.115 57.3555 205.701 57.2383 206.365 57.2383C207.029 57.2383 207.618 57.3685 208.133 57.6289C208.647 57.8828 209.08 58.2474 209.432 58.7227C209.783 59.1979 210.047 59.7676 210.223 60.4316C210.405 61.0892 210.496 61.8216 210.496 62.6289ZM208.68 62.834V62.6289C208.68 62.1016 208.624 61.6068 208.514 61.1445C208.403 60.6758 208.23 60.2656 207.996 59.9141C207.768 59.556 207.475 59.276 207.117 59.0742C206.759 58.8659 206.333 58.7617 205.838 58.7617C205.382 58.7617 204.985 58.8398 204.646 58.9961C204.314 59.1523 204.031 59.3639 203.797 59.6309C203.562 59.8913 203.37 60.1908 203.221 60.5293C203.077 60.8613 202.97 61.2064 202.898 61.5645V64.0938C203.029 64.5495 203.211 64.9792 203.445 65.3828C203.68 65.7799 203.992 66.1022 204.383 66.3496C204.773 66.5905 205.265 66.7109 205.857 66.7109C206.346 66.7109 206.766 66.61 207.117 66.4082C207.475 66.1999 207.768 65.9167 207.996 65.5586C208.23 65.2005 208.403 64.7904 208.514 64.3281C208.624 63.8594 208.68 63.3613 208.68 62.834ZM220.73 66.9062L223.67 57.4336H225.604L221.365 69.6309C221.268 69.8913 221.137 70.1712 220.975 70.4707C220.818 70.7767 220.617 71.0664 220.369 71.3398C220.122 71.6133 219.822 71.8346 219.471 72.0039C219.126 72.1797 218.712 72.2676 218.23 72.2676C218.087 72.2676 217.905 72.248 217.684 72.209C217.462 72.1699 217.306 72.1374 217.215 72.1113L217.205 70.6465C217.257 70.653 217.339 70.6595 217.449 70.666C217.566 70.679 217.648 70.6855 217.693 70.6855C218.104 70.6855 218.452 70.6302 218.738 70.5195C219.025 70.4154 219.266 70.2363 219.461 69.9824C219.663 69.735 219.835 69.3932 219.979 68.957L220.73 66.9062ZM218.572 57.4336L221.316 65.6367L221.785 67.541L220.486 68.2051L216.6 57.4336H218.572ZM226.6 62.834V62.6094C226.6 61.8477 226.71 61.1413 226.932 60.4902C227.153 59.8327 227.472 59.263 227.889 58.7812C228.305 58.293 228.81 57.9154 229.402 57.6484C229.995 57.375 230.659 57.2383 231.395 57.2383C232.137 57.2383 232.804 57.375 233.396 57.6484C233.995 57.9154 234.503 58.293 234.92 58.7812C235.343 59.263 235.665 59.8327 235.887 60.4902C236.108 61.1413 236.219 61.8477 236.219 62.6094V62.834C236.219 63.5957 236.108 64.3021 235.887 64.9531C235.665 65.6042 235.343 66.1738 234.92 66.6621C234.503 67.1439 233.999 67.5215 233.406 67.7949C232.82 68.0618 232.156 68.1953 231.414 68.1953C230.672 68.1953 230.005 68.0618 229.412 67.7949C228.82 67.5215 228.312 67.1439 227.889 66.6621C227.472 66.1738 227.153 65.6042 226.932 64.9531C226.71 64.3021 226.6 63.5957 226.6 62.834ZM228.406 62.6094V62.834C228.406 63.3613 228.468 63.8594 228.592 64.3281C228.715 64.7904 228.901 65.2005 229.148 65.5586C229.402 65.9167 229.718 66.1999 230.096 66.4082C230.473 66.61 230.913 66.7109 231.414 66.7109C231.909 66.7109 232.342 66.61 232.713 66.4082C233.09 66.1999 233.403 65.9167 233.65 65.5586C233.898 65.2005 234.083 64.7904 234.207 64.3281C234.337 63.8594 234.402 63.3613 234.402 62.834V62.6094C234.402 62.0885 234.337 61.597 234.207 61.1348C234.083 60.666 233.895 60.2526 233.641 59.8945C233.393 59.5299 233.081 59.2435 232.703 59.0352C232.332 58.8268 231.896 58.7227 231.395 58.7227C230.9 58.7227 230.464 58.8268 230.086 59.0352C229.715 59.2435 229.402 59.5299 229.148 59.8945C228.901 60.2526 228.715 60.666 228.592 61.1348C228.468 61.597 228.406 62.0885 228.406 62.6094ZM244.949 65.5586V57.4336H246.766V68H245.037L244.949 65.5586ZM245.291 63.332L246.043 63.3125C246.043 64.0156 245.968 64.6667 245.818 65.2656C245.675 65.8581 245.441 66.3724 245.115 66.8086C244.79 67.2448 244.363 67.5866 243.836 67.834C243.309 68.0749 242.667 68.1953 241.912 68.1953C241.398 68.1953 240.926 68.1204 240.496 67.9707C240.073 67.821 239.708 67.5898 239.402 67.2773C239.096 66.9648 238.859 66.5579 238.689 66.0566C238.527 65.5553 238.445 64.9531 238.445 64.25V57.4336H240.252V64.2695C240.252 64.7448 240.304 65.1387 240.408 65.4512C240.519 65.7572 240.665 66.0013 240.848 66.1836C241.036 66.3594 241.245 66.4831 241.473 66.5547C241.707 66.6263 241.948 66.6621 242.195 66.6621C242.964 66.6621 243.572 66.5156 244.021 66.2227C244.471 65.9232 244.793 65.5228 244.988 65.0215C245.19 64.5137 245.291 63.9505 245.291 63.332ZM251.326 59.0938V68H249.52V57.4336H251.277L251.326 59.0938ZM254.627 57.375L254.617 59.0547C254.467 59.0221 254.324 59.0026 254.188 58.9961C254.057 58.9831 253.908 58.9766 253.738 58.9766C253.322 58.9766 252.954 59.0417 252.635 59.1719C252.316 59.3021 252.046 59.4844 251.824 59.7188C251.603 59.9531 251.427 60.2331 251.297 60.5586C251.173 60.8776 251.092 61.2292 251.053 61.6133L250.545 61.9062C250.545 61.2682 250.607 60.6693 250.73 60.1094C250.861 59.5495 251.059 59.0547 251.326 58.625C251.593 58.1888 251.932 57.8503 252.342 57.6094C252.758 57.362 253.253 57.2383 253.826 57.2383C253.956 57.2383 254.106 57.2546 254.275 57.2871C254.445 57.3132 254.562 57.3424 254.627 57.375ZM187.85 89.4668V91H180.74V89.4668H187.85ZM181.111 76.7812V91H179.227V76.7812H181.111ZM191.697 80.4336V91H189.881V80.4336H191.697ZM189.744 77.6309C189.744 77.3379 189.832 77.0905 190.008 76.8887C190.19 76.6868 190.457 76.5859 190.809 76.5859C191.154 76.5859 191.417 76.6868 191.6 76.8887C191.788 77.0905 191.883 77.3379 191.883 77.6309C191.883 77.9108 191.788 78.1517 191.6 78.3535C191.417 78.5488 191.154 78.6465 190.809 78.6465C190.457 78.6465 190.19 78.5488 190.008 78.3535C189.832 78.1517 189.744 77.9108 189.744 77.6309ZM198.826 89.7109C199.256 89.7109 199.653 89.623 200.018 89.4473C200.382 89.2715 200.682 89.0306 200.916 88.7246C201.15 88.4121 201.284 88.0573 201.316 87.6602H203.035C203.003 88.2852 202.791 88.8678 202.4 89.4082C202.016 89.9421 201.512 90.375 200.887 90.707C200.262 91.0326 199.575 91.1953 198.826 91.1953C198.032 91.1953 197.339 91.0553 196.746 90.7754C196.16 90.4954 195.672 90.1113 195.281 89.623C194.897 89.1348 194.607 88.5749 194.412 87.9434C194.223 87.3053 194.129 86.6315 194.129 85.9219V85.5117C194.129 84.8021 194.223 84.1315 194.412 83.5C194.607 82.862 194.897 82.2988 195.281 81.8105C195.672 81.3223 196.16 80.9382 196.746 80.6582C197.339 80.3783 198.032 80.2383 198.826 80.2383C199.653 80.2383 200.376 80.4076 200.994 80.7461C201.613 81.0781 202.098 81.5339 202.449 82.1133C202.807 82.6862 203.003 83.3372 203.035 84.0664H201.316C201.284 83.6302 201.16 83.2363 200.945 82.8848C200.737 82.5332 200.451 82.2533 200.086 82.0449C199.728 81.8301 199.308 81.7227 198.826 81.7227C198.273 81.7227 197.807 81.8333 197.43 82.0547C197.059 82.2695 196.762 82.5625 196.541 82.9336C196.326 83.2982 196.17 83.7051 196.072 84.1543C195.981 84.597 195.936 85.0495 195.936 85.5117V85.9219C195.936 86.3841 195.981 86.8398 196.072 87.2891C196.163 87.7383 196.316 88.1452 196.531 88.5098C196.753 88.8743 197.049 89.1673 197.42 89.3887C197.798 89.6035 198.266 89.7109 198.826 89.7109ZM209.451 91.1953C208.715 91.1953 208.048 91.0716 207.449 90.8242C206.857 90.5703 206.346 90.2155 205.916 89.7598C205.493 89.304 205.167 88.7637 204.939 88.1387C204.712 87.5137 204.598 86.8301 204.598 86.0879V85.6777C204.598 84.8184 204.725 84.0534 204.979 83.3828C205.232 82.7057 205.577 82.1328 206.014 81.6641C206.45 81.1953 206.945 80.8405 207.498 80.5996C208.051 80.3587 208.624 80.2383 209.217 80.2383C209.972 80.2383 210.623 80.3685 211.17 80.6289C211.723 80.8893 212.176 81.2539 212.527 81.7227C212.879 82.1849 213.139 82.7318 213.309 83.3633C213.478 83.9883 213.562 84.6719 213.562 85.4141V86.2246H205.672V84.75H211.756V84.6133C211.73 84.1445 211.632 83.6888 211.463 83.2461C211.3 82.8034 211.04 82.4388 210.682 82.1523C210.324 81.8659 209.835 81.7227 209.217 81.7227C208.807 81.7227 208.429 81.8105 208.084 81.9863C207.739 82.1556 207.443 82.4095 207.195 82.748C206.948 83.0866 206.756 83.5 206.619 83.9883C206.482 84.4766 206.414 85.0397 206.414 85.6777V86.0879C206.414 86.5892 206.482 87.0612 206.619 87.5039C206.762 87.9401 206.967 88.3242 207.234 88.6562C207.508 88.9883 207.837 89.2487 208.221 89.4375C208.611 89.6263 209.054 89.7207 209.549 89.7207C210.187 89.7207 210.727 89.5905 211.17 89.3301C211.613 89.0697 212 88.7214 212.332 88.2852L213.426 89.1543C213.198 89.4993 212.908 89.8281 212.557 90.1406C212.205 90.4531 211.772 90.707 211.258 90.9023C210.75 91.0977 210.148 91.1953 209.451 91.1953ZM217.479 82.6895V91H215.672V80.4336H217.381L217.479 82.6895ZM217.049 85.3164L216.297 85.2871C216.303 84.5645 216.411 83.8971 216.619 83.2852C216.827 82.6667 217.12 82.1296 217.498 81.6738C217.876 81.2181 218.325 80.8665 218.846 80.6191C219.373 80.3652 219.956 80.2383 220.594 80.2383C221.115 80.2383 221.583 80.3099 222 80.4531C222.417 80.5898 222.771 80.8112 223.064 81.1172C223.364 81.4232 223.592 81.8203 223.748 82.3086C223.904 82.7904 223.982 83.3796 223.982 84.0762V91H222.166V84.0566C222.166 83.5033 222.085 83.0605 221.922 82.7285C221.759 82.39 221.521 82.1458 221.209 81.9961C220.896 81.8398 220.512 81.7617 220.057 81.7617C219.607 81.7617 219.197 81.8561 218.826 82.0449C218.462 82.2337 218.146 82.4941 217.879 82.8262C217.618 83.1582 217.413 83.5391 217.264 83.9688C217.12 84.3919 217.049 84.8411 217.049 85.3164ZM230.955 89.7109C231.385 89.7109 231.782 89.623 232.146 89.4473C232.511 89.2715 232.811 89.0306 233.045 88.7246C233.279 88.4121 233.413 88.0573 233.445 87.6602H235.164C235.132 88.2852 234.92 88.8678 234.529 89.4082C234.145 89.9421 233.641 90.375 233.016 90.707C232.391 91.0326 231.704 91.1953 230.955 91.1953C230.161 91.1953 229.467 91.0553 228.875 90.7754C228.289 90.4954 227.801 90.1113 227.41 89.623C227.026 89.1348 226.736 88.5749 226.541 87.9434C226.352 87.3053 226.258 86.6315 226.258 85.9219V85.5117C226.258 84.8021 226.352 84.1315 226.541 83.5C226.736 82.862 227.026 82.2988 227.41 81.8105C227.801 81.3223 228.289 80.9382 228.875 80.6582C229.467 80.3783 230.161 80.2383 230.955 80.2383C231.782 80.2383 232.505 80.4076 233.123 80.7461C233.742 81.0781 234.227 81.5339 234.578 82.1133C234.936 82.6862 235.132 83.3372 235.164 84.0664H233.445C233.413 83.6302 233.289 83.2363 233.074 82.8848C232.866 82.5332 232.579 82.2533 232.215 82.0449C231.857 81.8301 231.437 81.7227 230.955 81.7227C230.402 81.7227 229.936 81.8333 229.559 82.0547C229.188 82.2695 228.891 82.5625 228.67 82.9336C228.455 83.2982 228.299 83.7051 228.201 84.1543C228.11 84.597 228.064 85.0495 228.064 85.5117V85.9219C228.064 86.3841 228.11 86.8398 228.201 87.2891C228.292 87.7383 228.445 88.1452 228.66 88.5098C228.882 88.8743 229.178 89.1673 229.549 89.3887C229.926 89.6035 230.395 89.7109 230.955 89.7109ZM241.58 91.1953C240.844 91.1953 240.177 91.0716 239.578 90.8242C238.986 90.5703 238.475 90.2155 238.045 89.7598C237.622 89.304 237.296 88.7637 237.068 88.1387C236.84 87.5137 236.727 86.8301 236.727 86.0879V85.6777C236.727 84.8184 236.854 84.0534 237.107 83.3828C237.361 82.7057 237.706 82.1328 238.143 81.6641C238.579 81.1953 239.074 80.8405 239.627 80.5996C240.18 80.3587 240.753 80.2383 241.346 80.2383C242.101 80.2383 242.752 80.3685 243.299 80.6289C243.852 80.8893 244.305 81.2539 244.656 81.7227C245.008 82.1849 245.268 82.7318 245.438 83.3633C245.607 83.9883 245.691 84.6719 245.691 85.4141V86.2246H237.801V84.75H243.885V84.6133C243.859 84.1445 243.761 83.6888 243.592 83.2461C243.429 82.8034 243.169 82.4388 242.811 82.1523C242.452 81.8659 241.964 81.7227 241.346 81.7227C240.936 81.7227 240.558 81.8105 240.213 81.9863C239.868 82.1556 239.572 82.4095 239.324 82.748C239.077 83.0866 238.885 83.5 238.748 83.9883C238.611 84.4766 238.543 85.0397 238.543 85.6777V86.0879C238.543 86.5892 238.611 87.0612 238.748 87.5039C238.891 87.9401 239.096 88.3242 239.363 88.6562C239.637 88.9883 239.965 89.2487 240.35 89.4375C240.74 89.6263 241.183 89.7207 241.678 89.7207C242.316 89.7207 242.856 89.5905 243.299 89.3301C243.742 89.0697 244.129 88.7214 244.461 88.2852L245.555 89.1543C245.327 89.4993 245.037 89.8281 244.686 90.1406C244.334 90.4531 243.901 90.707 243.387 90.9023C242.879 91.0977 242.277 91.1953 241.58 91.1953Z"
                    fill="#3982B8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2_66"
                    x="0"
                    y="0"
                    width="428"
                    height="152"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_66"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_66"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            
            <Button className="submit-2" style={{marginBottom: '10px'}} variant={"login"}>
              Sign Up
            </Button>
          </div>
        )}

        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Login In</span>
              <span className="m--in">Sign Up</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <Input type="text" placeholder="Email" />
            </label>
            <label>
              <Input type="password" placeholder="Password" />
            </label>
            <p className="forgot-pass">Forgot password?</p>

            <Button variant="login"  className="submit-2">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
