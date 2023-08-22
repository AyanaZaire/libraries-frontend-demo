import React from "react"
import Card from "./Card"

function CardContainer(props) {
	
	//console.log(props.libraries)

	const cards = props.libraries.map(library => {
	        return <Card key={library.name} library={library}/>
	    })

  return (
      <div>
          <h2>Card Container Component</h2>
          {cards}
      </div>
  )
}

export default CardContainer