import React from 'react';

interface LogoEmblemProps {
  className?: string;
  size?: number;
}

export default function LogoEmblem({ className = '', size = 48 }: LogoEmblemProps) {
  return (
    <svg
      id="seafutures-emblem-svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Blue Triad structure */}
      <path
        d="M 100 123 C 100 110, 115 102, 126 90 C 137 78, 148 100, 133 115 C 122 126, 110 135, 100 155 Z"
        fill="#082D68"
      />
      <path
        d="M 100 123 C 111 116, 125 125, 137 122 C 149 119, 143 143, 126 142 C 112 141, 99 146, 75 155 Z"
        fill="#082D68"
        transform="rotate(120 100 121)"
      />
      <path
        d="M 100 123 C 111 116, 125 125, 137 122 C 149 119, 143 143, 126 142 C 112 141, 99 146, 75 155 Z"
        fill="#082D68"
        transform="rotate(240 100 121)"
      />

      {/* Top Crescent (Arching upwards, yellow to orange gradient) */}
      <defs>
        <linearGradient id="crescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5B400" />
          <stop offset="100%" stopColor="#F26522" />
        </linearGradient>
      </defs>
      
      {/* Top crescent */}
      <path
        d="M 50 60 C 70 95, 130 95, 150 60 C 130 80, 70 80, 50 60 Z"
        fill="url(#crescentGrad)"
      />
      <path
        d="M 46 56 C 66 102, 134 102, 154 56 C 142 66, 58 66, 46 56 Z"
        fill="#082D68"
        opacity="0.15"
      />

      {/* Top Yellow Square */}
      <rect x="91" y="24" width="18" height="18" rx="2" fill="#F5B400" />

      {/* Left Crescent (Rotated 120 degrees around center 100,105) */}
      <g transform="rotate(120 100 105)">
        <path
          d="M 50 60 C 70 95, 130 95, 150 60 C 130 80, 70 80, 50 60 Z"
          fill="url(#crescentGrad)"
        />
        <rect x="91" y="24" width="18" height="18" rx="2" fill="#F5B400" />
      </g>

      {/* Right Crescent (Rotated 240 degrees around center 100,105) */}
      <g transform="rotate(240 100 105)">
        <path
          d="M 50 60 C 70 95, 130 95, 150 60 C 130 80, 70 80, 50 60 Z"
          fill="url(#crescentGrad)"
        />
        <rect x="91" y="24" width="18" height="18" rx="2" fill="#F5B400" />
      </g>
    </svg>
  );
}
