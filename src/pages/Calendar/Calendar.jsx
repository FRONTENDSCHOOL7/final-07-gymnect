// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // css import
// import moment from "moment";
// import BackNav from "../../components/Header/BackspaceHeader";
// import styled from "styled-components";

// function MyCalendar() {
//   const [value, setValue] = useState(new Date());

//   const onScroll = (e) => {
//     e.preventDefault();
//     if (e.deltaY < 0) {
//       setValue((prevValue) => moment(prevValue).add(1, "month").toDate());
//     } else {
//       setValue((prevValue) => moment(prevValue).subtract(1, "month").toDate());
//     }
//   };

//   return (
//     <div onWheel={onScroll}>
//       <BackNav />
//       <StyledCalendar onChange={setValue} value={value} />
//     </div>
//   );
// }

// const StyledCalendar = styled(Calendar)`
//   border: none;
// `;

// export default MyCalendar;
