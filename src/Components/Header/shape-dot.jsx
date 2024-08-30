import * as React from "react";
const Shapedot = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5.556} cy={5.556} r={5.556} fill="#293349" />
    <circle cx={24.603} cy={5.556} r={5.556} fill="#293349" />
    <circle opacity={0.3} cx={44.444} cy={5.556} r={5.556} fill="#fff" />
    <circle cx={5.556} cy={25.397} r={5.556} fill="#293349" />
    <circle cx={24.603} cy={25.397} r={5.556} fill="#293349" />
    <circle opacity={0.3} cx={44.444} cy={25.397} r={5.556} fill="#fff" />
    <circle cx={5.556} cy={44.444} r={5.556} fill="#293349" />
    <circle opacity={0.3} cx={24.603} cy={44.444} r={5.556} fill="#fff" />
    <circle cx={44.444} cy={44.444} r={5.556} fill="#293349" />
  </svg>
);
export default Shapedot;
