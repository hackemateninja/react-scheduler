import React from "react";

export default ()=>{

	return(
		<form className="form" action="">
			<input
				className="input"
				type="text"
				placeholder="title"
				maxLength="30"
			/>
			<textarea
				className="input"
				name="description"
				placeholder="Description"
				id="description"
				cols="30"
				rows="2">
					</textarea>
			<div className="colors">

			</div>
			<button className="button-save">Save</button>
		</form>
	)
}
