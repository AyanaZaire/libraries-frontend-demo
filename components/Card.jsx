import React from "react"

function Card(props) {

    //console.log(props.library.name);

    return ( 
			<div>
				<h3>{props.library.name}</h3>
				<p>{props.library.address}</p>
				<small>{props.library.year}</small>
                <button onClick={() => props.toggleSidebar(props.library._id)}>Comment</button>
			</div>
		)
}

export default Card