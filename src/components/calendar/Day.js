import React, {useState, useEffect} from "react";
import Form from "./Form";
import Reminder from "./Reminder";
import Overlay from "./Overlay";


export default ({date, isToday, keyID})=> {


	const [reminders, setReminders] = useState([
		{
			date: "APR20202",
			title: 'hola',
			time: '3:00 am',
			city: 'Guatemala',
			country: 'Guatemala',
			color: 'red'
		},
	]);

	const [isVisible, setVisible] = useState(false);

	const changeVisible =()=>{
		setVisible(!isVisible)
	}

	return(
		<>
			<Overlay isVisible={isVisible} handleVisible={changeVisible}>
				<Reminder reminders={reminders}/>
			</Overlay>
			<div
				style={keyID == reminders[0].date && reminders.length? {background: "#68ca87",}: {}}
				className={isToday ? "calendar-day calendar-today" : "calendar-day"}
				onClick={()=> {
					setVisible(true)
					console.log(keyID)
				}}
			>
				{date}
			</div>
		</>
	)
};
