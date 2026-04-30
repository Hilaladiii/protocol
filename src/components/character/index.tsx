export default function Character() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 160"
      width="100%"
      height="100%"
    >
      <style>{`
        .vanguard { animation: heavyFloat 5s infinite ease-in-out; transform-origin: center; }
        .core-glow { animation: enginePulse 2s infinite ease-in-out; }
        .arm-l { animation: armL 5s infinite ease-in-out; transform-origin: 55px 70px; }
        .arm-r { animation: armR 5s infinite ease-in-out; transform-origin: 105px 70px; }

        @keyframes heavyFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.5deg); }
        }

        @keyframes enginePulse {
          0%, 100% { fill: #ea580c; filter: drop-shadow(0 0 2px #ea580c); }
          50% { fill: #f97316; filter: drop-shadow(0 0 5px #f97316); }
        }

        @keyframes armL {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }

        @keyframes armR {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
      `}</style>

      <ellipse cx="80" cy="145" rx="35" ry="5" fill="#000" opacity="0.15" />

      <g className="vanguard">
        <g className="legs">
          <rect x="58" y="100" width="16" height="25" fill="#27272a" rx="2" />
          <path
            d="M54 125 L78 125 L82 135 L50 135 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="1"
          />

          <rect x="86" y="100" width="16" height="25" fill="#27272a" rx="2" />
          <path
            d="M82 125 L106 125 L110 135 L78 135 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="1"
          />
        </g>

        <g className="arm-l">
          <rect x="40" y="65" width="15" height="12" rx="2" fill="#27272a" />{" "}
          <rect x="35" y="78" width="10" height="18" rx="2" fill="#18181b" />{" "}
          <rect
            x="32"
            y="96"
            width="16"
            height="8"
            rx="1"
            fill="#f97316"
          />{" "}
        </g>
        <g className="arm-r">
          <rect x="105" y="65" width="15" height="12" rx="2" fill="#27272a" />
          <rect x="115" y="78" width="10" height="18" rx="2" fill="#18181b" />
          <rect x="112" y="96" width="16" height="8" rx="1" fill="#f97316" />
        </g>

        <path
          d="M50 45 L80 30 L110 45 L110 100 L80 115 L50 100 Z"
          fill="#18181b"
          stroke="#27272a"
          strokeWidth="2"
        />

        <path
          d="M55 50 L80 38 L105 50 L105 95 L80 108 L55 95 Z"
          fill="#e4e4e7"
        />

        <rect
          x="70"
          y="42"
          width="20"
          height="4"
          fill="#27272a"
          rx="1"
          opacity="0.6"
        />

        <rect x="62" y="58" width="36" height="14" rx="2" fill="#09090b" />
        <rect
          className="core-glow"
          x="65"
          y="63"
          width="30"
          height="4"
          rx="1"
          fill="#f97316"
        />

        <rect
          x="72"
          y="85"
          width="16"
          height="10"
          fill="#27272a"
          rx="1"
          opacity="0.4"
        />
        <circle cx="65" cy="95" r="2" fill="#18181b" />
        <circle cx="95" cy="95" r="2" fill="#18181b" />

        <circle cx="58" cy="53" r="1.5" fill="#27272a" />
        <circle cx="102" cy="53" r="1.5" fill="#27272a" />
      </g>
    </svg>
  );
}
