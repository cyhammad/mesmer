import React from "react";

export const EditIcon = ({ className = "w-[24px] h-[24px]" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16.9459 3.17305C17.5332 2.58578 17.8268 2.29215 18.1521 2.15173C18.6208 1.94942 19.1521 1.94942 19.6208 2.15173C19.946 2.29215 20.2397 2.58578 20.8269 3.17305C21.4142 3.76032 21.7079 4.05395 21.8483 4.37925C22.0506 4.8479 22.0506 5.37924 21.8483 5.84789C21.7079 6.17319 21.4142 6.46682 20.8269 7.05409L15.8054 12.0757C14.5682 13.3129 13.9496 13.9315 13.1748 14.298C12.4 14.6645 11.5294 14.7504 9.78823 14.9222L9 15L9.07778 14.2118C9.24958 12.4706 9.33549 11.6 9.70201 10.8252C10.0685 10.0504 10.6871 9.43183 11.9243 8.19464L16.9459 3.17305Z"
      stroke="#6C6C6C"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11"
      stroke="#6C6C6C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrashIcon = ({ className = "w-[24px] h-[24px]" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
      stroke="#E53935"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 11.7349H15"
      stroke="#E53935"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.5 15.6543H13.5"
      stroke="#E53935"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5"
      stroke="#E53935"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ClockIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_1502_22480)">
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="#6C6C6C"
        strokeWidth="1.25"
      />
      <path
        d="M9 6V9L10.5 10.5"
        stroke="#6C6C6C"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1502_22480">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const StepsIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_1502_22486)">
      <path
        d="M11.25 3.75C11.25 4.99264 10.2427 6 9 6C7.75732 6 6.75 4.99264 6.75 3.75C6.75 2.50736 7.75732 1.5 9 1.5C10.2427 1.5 11.25 2.50736 11.25 3.75Z"
        stroke="#6C6C6C"
        strokeWidth="1.25"
      />
      <path
        d="M9 6V6.75M9 6.75C9 7.44891 9 7.79835 9.1332 8.07405C9.3108 8.44155 9.65153 8.7336 10.0803 8.88585C10.4019 9 10.8096 9 11.625 9C12.4404 9 12.8481 9 13.1697 9.11415C13.5985 9.2664 13.9392 9.55845 14.1168 9.92595C14.25 10.2017 14.25 10.5511 14.25 11.25V12M9 6.75C9 7.44891 9 7.79835 8.8668 8.07405C8.6892 8.44155 8.34847 8.7336 7.9197 8.88585C7.5981 9 7.1904 9 6.375 9C5.5596 9 5.1519 9 4.83031 9.11415C4.4015 9.2664 4.06082 9.55845 3.88321 9.92595C3.75 10.2017 3.75 10.5511 3.75 11.25V12"
        stroke="#6C6C6C"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14.25C6 15.4927 4.99264 16.5 3.75 16.5C2.50736 16.5 1.5 15.4927 1.5 14.25C1.5 13.0073 2.50736 12 3.75 12C4.99264 12 6 13.0073 6 14.25Z"
        stroke="#6C6C6C"
        strokeWidth="1.25"
      />
      <path
        d="M16.5 14.25C16.5 15.4927 15.4927 16.5 14.25 16.5C13.0073 16.5 12 15.4927 12 14.25C12 13.0073 13.0073 12 14.25 12C15.4927 12 16.5 13.0073 16.5 14.25Z"
        stroke="#6C6C6C"
        strokeWidth="1.25"
      />
    </g>
    <defs>
      <clipPath id="clip0_1502_22486">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
