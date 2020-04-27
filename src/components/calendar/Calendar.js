import React, {useState, useEffect} from "react";
import DATE_HELPER from "../../utils/dateHelper";
import CalendarHeader from "./CalendarHeader";
import DayName from "./DayName";
import Day from "./Day";


export default ()=>{

	const getStartDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

	const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

	const days = isLeapYear ? DATE_HELPER.DAYS_LEAP : DATE_HELPER.DAYS;

	const nextMonth = ()=>{
		setDate(new Date(year, month + 1, day))
	}

	const prevMonth = ()=>{
		setDate(new Date(year, month - 1, day))
	}

	const today = new Date();
	const [date, setDate] = useState(today);
	const [day, setDay] = useState(date.getDate());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

	useEffect(() => {
		setDay(date.getDate());
		setMonth(date.getMonth());
		setYear(date.getFullYear());
		setStartDay(getStartDayOfMonth(date));
	}, [date]);


	return(
		<div className="calendar">
			<CalendarHeader
				prev={prevMonth}
				next={nextMonth}
				title={`${DATE_HELPER.MONTHS[month]} ${year}`}
			/>
			<div className="calendar-body">
				{DATE_HELPER.DAYS_OF_THE_WEEK.map(d => (
					<DayName name={d} key={d}/>
				))}
				{Array(days[month] + (startDay - 1))
					.fill(null)
					.map((_, idx) => {
						const d = idx - (startDay - 2);
						const key = `${DATE_HELPER.MONTHS[month]}${year}${d}`;
						return (
							<Day
								key={key}
								keyID={key}
								isToday={d === today.getDate()}
								date={d > 0 ? d : ''}
							/>
						);
					})}
			</div>
		</div>
	)
}
