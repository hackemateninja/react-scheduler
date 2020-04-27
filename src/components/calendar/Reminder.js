import React from "react";

export default ({reminders})=>{

	return(
		<div className="container-reminder">
			{
				reminders.map((r, idx )=> {
					return(
						<div className="reminder" key={idx} style={{borderLeft: `5px solid ${r.color}`}}>
							<h3>{r.title}</h3>
							<time>{r.time}</time>
							<p>{r.city}</p>
							<p>{r.Country}</p>
						</div>
					)
				}).sort()
			}
		</div>
	)
}
