import React from "react"
import Card from "./Card"

function CardContainer(props) {
	
	//console.log(props.libraries)

	const cards = props.libraries.map(library => {
	        return <Card key={library.name} library={library} toggleSidebar={props.toggleSidebar}/>
	    })

  return (
      <div className="col-sm-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards}
        </div>
      </div>
  )
}

export default CardContainer