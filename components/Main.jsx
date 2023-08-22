import React from "react"
import { useState } from 'react'
import CardContainer from "./CardContainer"
import Sidebar from "./Sidebar"

function Main() {

    const [libraries, setLibraries] = useState([])
	const [comment, setComment] = useState("")
    console.log(comment);

    React.useEffect(() => {
        fetch("http://localhost:3000/libraries")
        .then(response => response.json())
        .then(libraries => setLibraries(libraries))
    }, [])

    return (
        <div>
            <h1>Main Component</h1>
            <CardContainer libraries={libraries} />
            <Sidebar 
                comment={comment} 
                onCommentTextChange={setComment} 
            />
        </div>
    )
}



export default Main