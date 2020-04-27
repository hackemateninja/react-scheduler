import React from "react";


export default ({date, handleClick, isToday})=>(
	<div
		className={isToday ? "calendar-day calendar-today": "calendar-day"}
		onClick={handleClick}
	>
		{date}
	</div>
);
