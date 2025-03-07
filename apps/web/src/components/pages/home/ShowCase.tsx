"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Cursor } from "./lib/Cursor";

const ShowCase = () => {
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, {
    margin: "426px 0px -426px 0px",
    once: true,
  });

  const [cursorText, setCursorText] = useState("");

  return (
    <>
      <motion.h2
        initial={{ backgroundPosition: "0% 0%" }}
        whileInView={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 2 }}
      >
        How it Works?
      </motion.h2>
      <p>Try to hover below to see further details...</p>
      <Cursor attachToParent={true}>
        <motion.div
          className="cursor"
          layout="size"
          transition={{ duration: 0.256, type: "spring" }}
        >
          {cursorText}
        </motion.div>
      </Cursor>
      <svg
        width="1600"
        height="900"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        {/* result 3 pipline */}
        <motion.path
          d="M1296.69 450.002H1356.74"
          stroke="#18181B"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 6.6 }}
        />
        <motion.path
          d="M1296.69 450.002H1356.74"
          stroke="#1E3A8A"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView && { pathLength: 1 }}
          transition={{ delay: 6.9, duration: 0.256 }}
        />

        {/* result paper 3 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 7.512 }}
          onMouseEnter={() => setCursorText("Results")}
          onMouseLeave={() => setCursorText("")}
        >
          <path
            d="M1368.74 404.135H1415.04C1421.12 404.135 1426.04 409.06 1426.04 415.135V484.868C1426.04 490.943 1421.12 495.868 1415.04 495.868H1368.74C1362.67 495.868 1357.74 490.943 1357.74 484.868V415.135C1357.74 409.06 1362.67 404.135 1368.74 404.135Z"
            stroke="#27272A"
            strokeWidth="2"
          />
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={isInView && { x: -8, y: 8 }}
            transition={{ delay: 7.6 }}
          >
            <motion.path
              d="M1368.74 404.135H1415.04C1421.12 404.135 1426.04 409.06 1426.04 415.135V484.868C1426.04 490.943 1421.12 495.868 1415.04 495.868H1368.74C1362.67 495.868 1357.74 490.943 1357.74 484.868V415.135C1357.74 409.06 1362.67 404.135 1368.74 404.135Z"
              fill="#09090B"
              stroke="#4C1D95"
              strokeWidth="2"
              initial={{ stroke: "#27272A" }}
              animate={isInView && { stroke: "#4C1D95" }}
              transition={{ delay: 7.7 }}
            />
            <path
              d="M1365.64 450.001H1417.78"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1365.82 476.848H1417.96"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1365.82 485.391H1417.96"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1365.64 460.164H1397.45"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1365.82 440.501H1417.96"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1365.64 431.222H1417.78"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1372.27 421.281L1417.96 421.281"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g>
              <motion.path
                d="M1365.64 450.001H1417.78"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 0.512 }}
              />
              <motion.path
                d="M1365.82 476.848H1417.96"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 1.024 }}
              />
              <motion.path
                d="M1365.82 485.391H1417.96"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 0.426 }}
              />
              <motion.path
                d="M1365.64 460.164H1397.45"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 0.768 }}
              />
              <motion.path
                d="M1365.82 440.501H1417.96"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 0.512 }}
              />
              <motion.path
                d="M1365.64 431.222H1417.78"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 0.256 }}
              />
              <motion.path
                d="M1372.27 421.281L1417.96 421.281"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 7.7, duration: 0.128 }}
              />
            </g>
          </motion.g>
        </motion.g>

        {/* result 2 pipline */}
        <motion.path
          d="M1166.34 450H1226.39"
          stroke="#18181B"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 5.7 }}
        />
        <motion.path
          d="M1166.34 450H1226.39"
          stroke="#1E3A8A"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView && { pathLength: 1 }}
          transition={{ delay: 6, duration: 0.256 }}
        />

        {/* result paper 2 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 6.512 }}
          onMouseEnter={() => setCursorText("Results")}
          onMouseLeave={() => setCursorText("")}
        >
          <path
            d="M1238.39 404.135H1284.69C1290.77 404.135 1295.69 409.06 1295.69 415.135V484.868C1295.69 490.943 1290.77 495.868 1284.69 495.868H1238.39C1232.32 495.868 1227.39 490.943 1227.39 484.868V415.135C1227.39 409.06 1232.32 404.135 1238.39 404.135Z"
            stroke="#27272A"
            strokeWidth="2"
          />
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={isInView && { x: -8, y: 8 }}
            transition={{ delay: 6.6 }}
          >
            <motion.path
              d="M1238.39 404.135H1284.69C1290.77 404.135 1295.69 409.06 1295.69 415.135V484.868C1295.69 490.943 1290.77 495.868 1284.69 495.868H1238.39C1232.32 495.868 1227.39 490.943 1227.39 484.868V415.135C1227.39 409.06 1232.32 404.135 1238.39 404.135Z"
              fill="#09090B"
              stroke="#4C1D95"
              strokeWidth="2"
              initial={{ stroke: "#27272A" }}
              animate={isInView && { stroke: "#4C1D95" }}
              transition={{ delay: 6.7 }}
            />
            <path
              d="M1235.29 450.001H1287.42"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1235.47 476.848H1287.61"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1235.47 485.391H1287.61"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1235.29 460.164H1267.1"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1235.47 440.501H1287.61"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1235.29 431.222H1287.42"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1241.91 421.281L1287.61 421.281"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g>
              <motion.path
                d="M1235.29 450.001H1287.42"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 0.512 }}
              />
              <motion.path
                d="M1235.47 476.848H1287.61"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 1.024 }}
              />
              <motion.path
                d="M1235.47 485.391H1287.61"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 0.426 }}
              />
              <motion.path
                d="M1235.29 460.164H1267.1"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 0.768 }}
              />
              <motion.path
                d="M1235.47 440.501H1287.61"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 0.512 }}
              />
              <motion.path
                d="M1235.29 431.222H1287.42"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 0.256 }}
              />
              <motion.path
                d="M1241.91 421.281L1287.61 421.281"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 6.7, duration: 0.128 }}
              />
            </g>
          </motion.g>
        </motion.g>

        {/* result 1 pipeline */}
        <motion.path
          d="M890 450.001H1096.04"
          stroke="#18181B"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 4 }}
        />
        <motion.path
          d="M890 450.001H1096.04"
          stroke="#1E3A8A"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView && { pathLength: 1 }}
          transition={{ delay: 5.02, duration: 0.256 }}
        />

        {/* result paper 1 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 5.5 }}
          onMouseEnter={() => setCursorText("Results")}
          onMouseLeave={() => setCursorText("")}
        >
          <path
            d="M1108.04 404.135H1154.34C1160.41 404.135 1165.34 409.06 1165.34 415.135V484.868C1165.34 490.943 1160.41 495.868 1154.34 495.868H1108.04C1101.96 495.868 1097.04 490.943 1097.04 484.868V415.135C1097.04 409.06 1101.96 404.135 1108.04 404.135Z"
            stroke="#27272A"
            strokeWidth="2"
          />
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={isInView && { x: -8, y: 8 }}
            transition={{ delay: 5.6 }}
          >
            <motion.path
              d="M1108.04 404.135H1154.34C1160.41 404.135 1165.34 409.06 1165.34 415.135V484.868C1165.34 490.943 1160.41 495.868 1154.34 495.868H1108.04C1101.96 495.868 1097.04 490.943 1097.04 484.868V415.135C1097.04 409.06 1101.96 404.135 1108.04 404.135Z"
              fill="#09090B"
              stroke="#4C1D95"
              strokeWidth="2"
              initial={{ stroke: "#27272A" }}
              animate={isInView && { stroke: "#4C1D95" }}
              transition={{ delay: 5.7 }}
            />
            <path
              d="M1104.93 450.001H1157.07"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1105.12 476.848H1157.26"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1105.12 485.391H1157.26"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1104.93 460.164H1136.75"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1105.12 440.501H1157.26"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1104.93 431.222H1157.07"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M1111.56 421.281L1157.26 421.281"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g>
              <motion.path
                d="M1104.93 450.001H1157.07"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 0.512 }}
              />
              <motion.path
                d="M1105.12 476.848H1157.26"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 1.024 }}
              />
              <motion.path
                d="M1105.12 485.391H1157.26"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 0.426 }}
              />
              <motion.path
                d="M1104.93 460.164H1136.75"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 0.768 }}
              />
              <motion.path
                d="M1105.12 440.501H1157.26"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 0.512 }}
              />
              <motion.path
                d="M1104.93 431.222H1157.07"
                stroke="#E11D48"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 0.256 }}
              />
              <motion.path
                d="M1111.56 421.281L1157.26 421.281"
                stroke="#16A34A"
                strokeOpacity="0.48"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 10 }}
                transition={{ delay: 5.7, duration: 0.128 }}
              />
            </g>
          </motion.g>
        </motion.g>

        {/* answer gray piplines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <path
            d="M332.998 628.627H391.906C441.417 628.627 441.417 628.845 441.417 561.211C441.417 493.577 441.417 493.577 476.133 493.577H710.264"
            stroke="#18181B"
            strokeWidth="4"
            strokeLinecap="square"
          />
          <path
            d="M332.998 271.371H391.906C441.417 271.371 441.417 271.153 441.417 338.788C441.417 406.423 441.417 406.423 476.133 406.423H710.264"
            stroke="#18181B"
            strokeWidth="4"
            strokeLinecap="square"
          />
          <path
            d="M298.034 450L710 450"
            stroke="#18181B"
            strokeWidth="4"
            strokeLinecap="square"
          />
        </motion.g>

        {/* answer blue piplines */}
        <g>
          <motion.path
            d="M332.735 628.628H391.642C441.154 628.628 441.154 628.846 441.154 561.212C441.154 493.578 441.154 493.578 475.869 493.578H710"
            stroke="#1E3A8A"
            strokeWidth="4"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView && { pathLength: 1, opacity: 10 }}
            transition={{ delay: 3.8, duration: 1.024 }}
          />
          <motion.path
            d="M332.735 271.372H391.642C441.154 271.372 441.154 271.154 441.154 338.789C441.154 406.424 441.154 406.424 475.869 406.424H710"
            stroke="#1E3A8A"
            strokeWidth="4"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView && { pathLength: 1, opacity: 10 }}
            transition={{ delay: 3.8, duration: 0.768 }}
          />
          <motion.path
            d="M297.77 450.001L709.737 450.001"
            stroke="#1E3A8A"
            strokeWidth="4"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView && { pathLength: 1, opacity: 10 }}
            transition={{ delay: 3.8, duration: 0.512 }}
          />
        </g>
        {/* answer paper 3 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 3 }}
          onMouseEnter={() => setCursorText("Answer Paper")}
          onMouseLeave={() => setCursorText("")}
        >
          <path
            d="M263.513 593.761C263.513 587.686 268.438 582.761 274.513 582.761H320.813C326.888 582.761 331.813 587.686 331.813 593.761V663.494C331.813 669.569 326.888 674.494 320.813 674.494H274.513C268.438 674.494 263.513 669.569 263.513 663.494V593.761Z"
            stroke="#27272A"
            strokeWidth="2"
          />
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={isInView && { x: -8, y: 8 }}
            transition={{ delay: 3.2 }}
          >
            <motion.path
              d="M263.513 593.761C263.513 587.686 268.438 582.761 274.513 582.761H320.813C326.888 582.761 331.813 587.686 331.813 593.761V663.494C331.813 669.569 326.888 674.494 320.813 674.494H274.513C268.438 674.494 263.513 669.569 263.513 663.494V593.761Z"
              fill="#09090B"
              stroke="#0D6EFD"
              strokeWidth="2"
              initial={{ stroke: "#27272A" }}
              animate={isInView && { stroke: "#0D6EFD" }}
              transition={{ delay: 3.2 }}
            />
            <path
              d="M271.409 628.627H323.547"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.594 655.474H323.732"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.594 664.017H323.732"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.409 638.79H303.223"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.594 619.127H323.732"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.409 609.848H323.547"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M278.037 599.907L323.732 599.907"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g>
              <motion.path
                d="M271.409 628.627H323.547"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.64, type: "spring" }}
              />
              <motion.path
                d="M271.594 655.474H323.732"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.1024, type: "spring" }}
              />
              <motion.path
                d="M271.594 664.017H323.732"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.426, type: "spring" }}
              />
              <motion.path
                d="M271.409 638.79H303.223"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.256, type: "spring" }}
              />
              <motion.path
                d="M271.594 619.127H323.732"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.768, type: "spring" }}
              />
              <motion.path
                d="M271.409 609.848H323.547"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.512, type: "spring" }}
              />
              <motion.path
                d="M278.037 599.907L323.732 599.907"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.128, type: "spring" }}
              />
            </g>
          </motion.g>
        </motion.g>

        {/* answer paper 2 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 3 }}
          onMouseEnter={() => setCursorText("Answer Paper")}
          onMouseLeave={() => setCursorText("")}
        >
          <path
            d="M228.734 415.133C228.734 409.058 233.659 404.133 239.734 404.133H286.034C292.109 404.133 297.034 409.058 297.034 415.133V484.866C297.034 490.941 292.109 495.866 286.034 495.866H239.734C233.659 495.866 228.734 490.941 228.734 484.866V415.133Z"
            stroke="#27272A"
            strokeWidth="2"
          />
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={isInView && { x: -8, y: 8 }}
            transition={{ delay: 3.2 }}
          >
            <motion.path
              d="M228.734 415.133C228.734 409.058 233.659 404.133 239.734 404.133H286.034C292.109 404.133 297.034 409.058 297.034 415.133V484.866C297.034 490.941 292.109 495.866 286.034 495.866H239.734C233.659 495.866 228.734 490.941 228.734 484.866V415.133Z"
              fill="#09090B"
              stroke="#0D6EFD"
              strokeWidth="2"
              initial={{ stroke: "#27272A" }}
              animate={isInView && { stroke: "#0D6EFD" }}
              transition={{ delay: 3.2 }}
            />
            <path
              d="M236.63 449.999H288.768"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M236.815 476.846H288.953"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M236.815 485.389H288.953"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M236.63 460.162H268.444"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M236.815 440.499H288.953"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M236.63 431.22H288.768"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M243.258 421.279L288.953 421.279"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g>
              <motion.path
                d="M236.63 449.999H288.768"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.64, type: "spring" }}
              />
              <motion.path
                d="M236.815 476.846H288.953"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.1024, type: "spring" }}
              />
              <motion.path
                d="M236.815 485.389H288.953"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.426, type: "spring" }}
              />
              <motion.path
                d="M236.63 460.162H268.444"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.256, type: "spring" }}
              />
              <motion.path
                d="M236.815 440.499H288.953"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.768, type: "spring" }}
              />
              <motion.path
                d="M236.63 431.22H288.768"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.512, type: "spring" }}
              />
              <motion.path
                d="M243.258 421.279L288.953 421.279"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.128, type: "spring" }}
              />
            </g>
          </motion.g>
        </motion.g>

        {/* answer paper 1 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ delay: 3 }}
          onMouseEnter={() => setCursorText("Answer Paper")}
          onMouseLeave={() => setCursorText("")}
        >
          <path
            d="M263.699 236.505C263.699 230.43 268.623 225.505 274.699 225.505H320.998C327.073 225.505 331.998 230.43 331.998 236.505V306.238C331.998 312.313 327.073 317.238 320.998 317.238H274.699C268.623 317.238 263.699 312.313 263.699 306.238V236.505Z"
            stroke="#27272A"
            strokeWidth="2"
          />
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={isInView && { x: -8, y: 8 }}
            transition={{ delay: 3.2 }}
          >
            <motion.path
              d="M263.699 236.505C263.699 230.43 268.623 225.505 274.699 225.505H320.998C327.073 225.505 331.998 230.43 331.998 236.505V306.238C331.998 312.313 327.073 317.238 320.998 317.238H274.699C268.623 317.238 263.699 312.313 263.699 306.238V236.505Z"
              fill="#09090B"
              stroke="#0D6EFD"
              strokeWidth="2"
              initial={{ stroke: "#27272A" }}
              animate={isInView && { stroke: "#0D6EFD" }}
              transition={{ delay: 3.2 }}
            />
            <path
              d="M271.594 271.371H323.732"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.779 298.218H323.917"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.779 306.761H323.917"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.594 281.534H303.408"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.779 261.871H323.917"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M271.594 252.592H323.732"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M278.222 242.651L323.917 242.651"
              stroke="#27272A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <g>
              <motion.path
                d="M271.594 271.371H323.732"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.64, type: "spring" }}
              />
              <motion.path
                d="M271.779 298.218H323.917"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.1024, type: "spring" }}
              />
              <motion.path
                d="M271.779 306.761H323.917"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.426, type: "spring" }}
              />
              <motion.path
                d="M271.594 281.534H303.408"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.256, type: "spring" }}
              />
              <motion.path
                d="M271.779 261.871H323.917"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.768, type: "spring" }}
              />
              <motion.path
                d="M271.594 252.592H323.732"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.512, type: "spring" }}
              />
              <motion.path
                d="M278.223 242.651L323.917 242.651"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.0, opacity: 0 }}
                animate={isInView && { pathLength: 1.1, opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.128, type: "spring" }}
              />
            </g>
          </motion.g>
        </motion.g>

        {/* model paper pipline */}
        <g>
          <motion.path
            d="M674.602 696.611C674.602 696.611 707.34 696.611 753.67 696.611C800 696.612 800 696.611 800 648.683C800 600.755 800 541.644 800 541.644"
            stroke="#18181B"
            strokeWidth="4"
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={{ delay: 3 }}
          />
          <motion.path
            d="M674.602 696.611C674.602 696.611 707.34 696.611 753.67 696.611C800 696.612 800 696.611 800 648.683C800 600.755 800 541.644 800 541.644"
            stroke="#6D28D9"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ delay: 3.2, duration: 0.512, type: "tween" }}
          />
        </g>

        {/* model paper module */}
        <motion.g
          initial={{ opacity: 0, scale: 0.32 }}
          animate={isInView && { opacity: 1, scale: 1 }}
          transition={{ delay: 3, type: "spring" }}
          onMouseEnter={() => setCursorText("Model Paper")}
          onMouseLeave={() => setCursorText("")}
        >
          <motion.path
            d="M674.602 708.611V684.611L653.818 696.611V720.611L674.602 708.611Z"
            fill="#52525B"
            initial={{ fill: "#52525B" }}
            animate={isInView && { fill: "#7c3aed" }}
            transition={{ delay: 3.4, type: "tween" }}
          />
          <motion.path
            d="M633.033 708.611L653.818 720.611V696.611L633.033 684.611V708.611Z"
            fill="#27272A"
            initial={{ fill: "#27272A" }}
            animate={isInView && { fill: "#5b21b6" }}
            transition={{ delay: 3.4, type: "tween" }}
          />
          <motion.path
            d="M674.602 684.611L653.818 672.611L633.033 684.611L653.818 696.611L674.602 684.611Z"
            fill="#3F3F46"
            initial={{ fill: "#3F3F46" }}
            animate={isInView && { fill: "#6d28d9" }}
            transition={{ delay: 3.4, type: "tween" }}
          />
        </motion.g>

        {/* question paper pipeline */}
        <g>
          <motion.path
            d="M926.215 205.032C926.215 205.032 893.478 205.033 847.148 205.032C800.818 205.032 800.818 205.032 800.818 252.961C800.818 300.889 800.818 360 800.818 360"
            stroke="#18181B"
            strokeWidth="4"
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={{ delay: 3 }}
          />
          <motion.path
            d="M926.215 205.314C926.215 205.314 873.756 205.032 837.287 205.032C800.818 205.032 800.818 205.032 800.818 259.114C800.818 313.196 800.89 360 800.89 360"
            stroke="#6D28D9"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ delay: 3.2, duration: 0.768, type: "tween" }}
          />
        </g>

        {/* question paper module */}
        <motion.g
          initial={{ opacity: 0, scale: 0.32 }}
          animate={isInView && { opacity: 1, scale: 1 }}
          transition={{ delay: 3, type: "spring" }}
          onMouseEnter={() => setCursorText("Question Paper")}
          onMouseLeave={() => setCursorText("")}
        >
          <motion.path
            d="M967.785 217.13V193.13L947 205.13V229.13L967.785 217.13Z"
            fill="#52525B"
            initial={{ fill: "#52525B" }}
            animate={isInView && { fill: "#7c3aed" }}
            transition={{ delay: 3.4, type: "tween" }}
          />
          <motion.path
            d="M926.215 217.13L947 229.13V205.13L926.215 193.13V217.13Z"
            fill="#27272A"
            initial={{ fill: "#27272A" }}
            animate={isInView && { fill: "#5b21b6" }}
            transition={{ delay: 3.4, type: "tween" }}
          />
          <motion.path
            d="M967.785 193.13L947 181.13L926.215 193.13L947 205.13L967.785 193.13Z"
            fill="#3F3F46"
            initial={{ fill: "#3F3F46" }}
            animate={isInView && { fill: "#6d28d9" }}
            transition={{ delay: 3.4, type: "tween" }}
          />
        </motion.g>

        {/* processor */}
        <motion.g
          filter="url(#filter0_d_184_2)"
          initial={{ filter: "grayscale(100)" }}
          animate={isInView && { filter: "grayScale(0) url(#filter0_d_184_2)" }}
          transition={{ delay: 2.56 }}
          onMouseEnter={() => setCursorText("GradeSense")}
          onMouseLeave={() => setCursorText("")}
        >
          <motion.rect
            x="710"
            y="360"
            width="180"
            height="180"
            rx="24"
            fill="#18181B"
            initial={{ opacity: 0, scale: 0.32 }}
            animate={isInView && { opacity: 1, scale: 1 }}
            transition={{ delay: 2.8 }}
          />
          <motion.rect
            x="710.5"
            y="360.5"
            width="179"
            height="179"
            rx="23.5"
            stroke="url(#paint0_linear_184_2)"
            initial={{ opacity: 0, scale: 0.32 }}
            animate={isInView && { opacity: 1, scale: 1 }}
            transition={{ delay: 2.8 }}
          />
        </motion.g>

        {/* gradonix logo */}
        <motion.g
          initial={{ scale: 1 }}
          animate={isInView && { scale: 0.32 }}
          transition={{ delay: 3, duration: 0.256, type: "spring" }}
          onMouseEnter={() => setCursorText("GradeSense")}
          onMouseLeave={() => setCursorText("")}
        >
          <motion.g
            initial={{ scale: 1.8 }}
            animate={isInView && { scale: 1 }}
            transition={{ duration: 2.56, type: "spring" }}
          >
            <motion.path
              d="M849.625 498.875V438.625C853.625 438.458 857.292 438.208 860.625 437.875C866.042 437.375 869.583 437.125 871.25 437.125V439.375C863.667 442.458 859.875 450.625 859.875 463.875V495.625C859.292 495.708 857.667 496.208 855 497.125C853.667 497.458 852.583 497.792 851.75 498.125C850.917 498.458 850.208 498.708 849.625 498.875ZM758.5 387.125C748.333 401.542 743.25 419.792 743.25 441.875C743.25 447.042 743.833 454.417 745 464C746.167 473.417 749.75 483.208 755.75 493.375C739.583 480.708 731.5 463.458 731.5 441.625C731.5 428.208 734.208 416.917 739.625 407.75C744.958 398.75 751.25 391.875 758.5 387.125ZM840.375 438.625V501.875C827.125 507.292 815.708 510 806.125 510C789.958 510 776.917 504.667 767 494C762.083 488.583 758.375 481.75 755.875 473.5C753.458 465.25 752.25 455.667 752.25 444.75C752.25 397.083 772.208 373.25 812.125 373.25C826.792 373.25 841 375.708 854.75 380.625C854.75 388.375 854.875 394.333 855.125 398.5C855.375 402.083 855.5 406.458 855.5 411.625H853C851 402.625 846.292 395.542 838.875 390.375C831.292 385.208 822.25 382.625 811.75 382.625C779.333 382.625 763.125 402.083 763.125 441C763.125 480.5 776.917 500.25 804.5 500.25C815.5 500.25 823.292 497.625 827.875 492.375C829.375 489.625 830.125 484.542 830.125 477.125V460.25C830.125 448.167 825.708 441.208 816.875 439.375V437.125C819.958 437.292 824.25 437.542 829.75 437.875C834 438.208 837.542 438.458 840.375 438.625Z"
              fill="url(#paint1_linear_184_2)"
              initial={{ opacity: 0, scale: 0.08 }}
              animate={isInView && { opacity: 1, scale: 1 }}
              transition={{ duration: 2.56, type: "spring" }}
            />
            <motion.rect
              x="800"
              y="655.162"
              width="276"
              height="276"
              rx="22"
              transform="rotate(-135 800 655.162)"
              stroke="url(#paint2_linear_184_2)"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1.01 }}
              transition={{ duration: 2.56, type: "spring" }}
            />
            <motion.rect
              x="800"
              y="244.838"
              width="276"
              height="276"
              rx="22"
              transform="rotate(45 800 244.838)"
              stroke="url(#paint3_linear_184_2)"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1.01 }}
              transition={{ duration: 2.56, type: "spring" }}
            />
          </motion.g>
        </motion.g>
        <defs>
          <filter
            id="filter0_d_184_2"
            x="614"
            y="264"
            width="372"
            height="372"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="32"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_184_2"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="32" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.180392 0 0 0 0 0.0627451 0 0 0 0 0.396078 0 0 0 0.64 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_184_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_184_2"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_184_2"
            x1="710"
            y1="360"
            x2="890"
            y2="540"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D4ED8" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_184_2"
            x1="800"
            y1="324.5"
            x2="800"
            y2="595.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="0.25" stopColor="#2563EB" />
            <stop offset="0.75" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_184_2"
            x1="807.286"
            y1="665.276"
            x2="1073.02"
            y2="931.009"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5" stopColor="#E4E4E7" stopOpacity="0.64" />
            <stop offset="1" stopColor="#2563EB" stopOpacity="0.32" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_184_2"
            x1="803.713"
            y1="245.723"
            x2="1092.68"
            y2="534.687"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5" stopColor="#E4E4E7" stopOpacity="0.64" />
            <stop offset="1" stopColor="#7C3AED" stopOpacity="0.32" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default ShowCase;
