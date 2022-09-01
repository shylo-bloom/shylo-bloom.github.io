import { useState } from "react";

export const Cookies = () => {
  const [close, setClose] = useState("");

  const handleClick = (e) => {
    setClose("none");
  };

  return (
    <div className="cookies__card__container" style={{ display: close }}>
      <div className="cookies__card__wrapper">
        <div className="cookies__card__body">
          <button
            className="cookies__close__btn"
            aria-label="reject cookies"
            onClick={(e) => handleClick(e)}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.20903 9.5H8.12932C8.05612 9.5 7.98902 9.48783 7.92802 9.46349C7.86702 9.42698 7.80602 9.3783 7.74502 9.31744L4.9451 6.08621L2.18178 9.31744C2.13298 9.3783 2.07808 9.42698 2.01708 9.46349C1.95608 9.48783 1.88898 9.5 1.81578 9.5H0.809272C0.650671 9.5 0.55307 9.43915 0.51647 9.31744C0.47987 9.19574 0.50427 9.08621 0.589671 8.98884L4.03009 4.97262L0.662871 1.02941C0.577471 0.919879 0.55307 0.80426 0.589671 0.682556C0.638471 0.560852 0.729972 0.5 0.864172 0.5H1.96218C2.03538 0.5 2.09638 0.518256 2.14518 0.554767C2.19398 0.579107 2.24888 0.633874 2.30988 0.719067L5 3.82252L7.72672 0.682556C7.76332 0.633875 7.81212 0.591278 7.87312 0.554767C7.94632 0.518256 8.00732 0.5 8.05612 0.5H9.06263C9.19683 0.5 9.28833 0.560852 9.33713 0.682556C9.38593 0.80426 9.36763 0.913793 9.28223 1.01116L5.95161 4.93611L9.41033 8.98884C9.49573 9.08621 9.52013 9.19574 9.48353 9.31744C9.44693 9.43915 9.35543 9.5 9.20903 9.5Z"
                fill="#16161D"
              ></path>
            </svg>
          </button>
        <h3 className="cookies__title">Cookies</h3>
        </div>
        <div className="">
          <div className="cookies__sub__text">
            We use cookies to give you a great user experience on our website.
            To learn more, read our
            &nbsp;<a href="#" className="cookies__sub__link">Cookie Policy</a> or manage your settings at
            &nbsp;<a href="#" className="cookies__sub__link">Cookie Preferences</a> .
          </div>
        </div>
        <div className="cookies__accpt__wrapper">
          <button className="cookies__accpt__btn">accept</button>
        </div>
      </div>
    </div>
  );
};
