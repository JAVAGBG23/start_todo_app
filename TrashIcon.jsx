import * as React from "react";
const TrashIcon = ({ className, onClick }) => (
  <svg
    width={16}
    height={21}
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M6 0.25C5.80109 0.25 5.61032 0.329018 5.46967 0.46967C5.32902 0.610322 5.25 0.801088 5.25 1V1.75H1C0.801088 1.75 0.610322 1.82902 0.46967 1.96967C0.329018 2.11032 0.25 2.30109 0.25 2.5C0.25 2.69891 0.329018 2.88968 0.46967 3.03033C0.610322 3.17098 0.801088 3.25 1 3.25H15C15.1989 3.25 15.3897 3.17098 15.5303 3.03033C15.671 2.88968 15.75 2.69891 15.75 2.5C15.75 2.30109 15.671 2.11032 15.5303 1.96967C15.3897 1.82902 15.1989 1.75 15 1.75H10.75V1C10.75 0.801088 10.671 0.610322 10.5303 0.46967C10.3897 0.329018 10.1989 0.25 10 0.25H6ZM6 8.65C6.19891 8.65 6.38968 8.72902 6.53033 8.86967C6.67098 9.01032 6.75 9.20109 6.75 9.4V16.4C6.75 16.5989 6.67098 16.7897 6.53033 16.9303C6.38968 17.071 6.19891 17.15 6 17.15C5.80109 17.15 5.61032 17.071 5.46967 16.9303C5.32902 16.7897 5.25 16.5989 5.25 16.4V9.4C5.25 9.20109 5.32902 9.01032 5.46967 8.86967C5.61032 8.72902 5.80109 8.65 6 8.65ZM10.75 9.4C10.75 9.20109 10.671 9.01032 10.5303 8.86967C10.3897 8.72902 10.1989 8.65 10 8.65C9.80109 8.65 9.61032 8.72902 9.46967 8.86967C9.32902 9.01032 9.25 9.20109 9.25 9.4V16.4C9.25 16.5989 9.32902 16.7897 9.46967 16.9303C9.61032 17.071 9.80109 17.15 10 17.15C10.1989 17.15 10.3897 17.071 10.5303 16.9303C10.671 16.7897 10.75 16.5989 10.75 16.4V9.4Z"
      fill="#DCCBB0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.99103 5.917C2.01146 5.73349 2.09887 5.56396 2.23652 5.44089C2.37417 5.31782 2.55238 5.24985 2.73703 5.25H13.263C13.4477 5.24985 13.6259 5.31782 13.7635 5.44089C13.9012 5.56396 13.9886 5.73349 14.009 5.917L14.209 7.719C14.572 10.984 14.572 14.279 14.209 17.545L14.189 17.722C14.1189 18.352 13.8411 18.9407 13.3992 19.3952C12.9574 19.8497 12.3768 20.1441 11.749 20.232C9.26182 20.5802 6.73823 20.5802 4.25103 20.232C3.62328 20.1441 3.04267 19.8497 2.60084 19.3952C2.159 18.9407 1.88112 18.352 1.81103 17.722L1.79103 17.545C1.42822 14.2797 1.42822 10.9843 1.79103 7.719L1.99103 5.917ZM3.40803 6.75L3.28203 7.884C2.93144 11.0393 2.93144 14.2237 3.28203 17.379L3.30203 17.556C3.33512 17.8549 3.46683 18.1342 3.67634 18.3499C3.88586 18.5655 4.16125 18.7053 4.45903 18.747C6.80903 19.076 9.19203 19.076 11.541 18.747C11.8387 18.7053 12.1139 18.5657 12.3234 18.3502C12.5329 18.1348 12.6647 17.8557 12.698 17.557L12.718 17.379C13.068 14.224 13.068 11.039 12.718 7.884L12.592 6.75H3.40803Z"
      fill="#DCCBB0"
    />
  </svg>
);
export default TrashIcon;
