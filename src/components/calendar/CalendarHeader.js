import React from "react";
import DATE_HELPER from "../../utils/dateHelper";

export default ({prev, next, title})=>{
	return(
		<div className="calendar-header">
			<button
				className="prev"
				onClick={prev}>
				Prev
			</button>
			<div>
				{title}
			</div>
			<button
				className="next"
				onClick={next}>
				Next
			</button>
		</div>
	)
}
