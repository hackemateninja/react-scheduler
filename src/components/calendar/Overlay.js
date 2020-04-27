import React from "react";

export default ({isVisible, handleVisible, children})=>{

	if (isVisible){
		return(
			<div className="overlay">
				<button className="close" onClick={handleVisible}>
					X
				</button>
				{children}
			</div>
		)
	}else {
		return null
	}
}
