import React from "react"

function Card(props) {

    //console.log(props.library.name);

    return (
		<div className="col">
			<div className="card h-100 border-light">
				<img src={props.library.image} className="card-img-top" alt="Image of library"/>
				<div className="card-body">
					<h3 className="card-title">{props.library.name}</h3>
					<span className="badge rounded-pill text-bg-dark">{props.library.area}</span>
					{props.library.year && <span className="badge rounded-pill text-bg-dark">{props.library.year}</span>}
					{props.library.aa_town && <span className="badge rounded-pill text-bg-dark">Black Incorporated Town</span>}
					<span className="badge rounded-pill text-bg-dark"><a href={props.library.website} className="card-link">Website</a></span>
					<p className="card-text">{props.library.address}</p>
					<p className="card-text"><small className="text-body-secondary">Area Director: {props.library.area_director}</small></p>
					<button className="btn btn-outline-dark" onClick={() => props.toggleSidebar(props.library._id)}>Comment</button>
				</div>
			</div>
		</div>
	)
}

export default Card