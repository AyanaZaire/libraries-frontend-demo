import React from "react"
import { useState } from 'react'
import CardContainer from "./CardContainer"
import Sidebar from "./Sidebar"

function Main() {    

    const [libraries, setLibraries] = useState([])
	const [comment, setComment] = useState("")
    //console.log(comment);
    const [displaySidebar, setDisplaySidebar] = useState(false)
    const [currentLibrary, setCurrentLibrary] = useState("")

    React.useEffect(() => {
        fetch("http://localhost:3000/libraries")
        .then(response => response.json())
        .then(libraries => setLibraries(libraries))
    }, [])

    function toggleSidebar(libraryId) {
        setDisplaySidebar(true)
        const foundLibrary = libraries.find(library => library._id == libraryId)
        setCurrentLibrary(foundLibrary)
    }

    function postComment(event) {
        event.preventDefault()
        fetch(`http://localhost:3000/libraries/${currentLibrary._id}/comments`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                body: comment
            })
        })
        .then(response => response.json())
        .then(newLibrary => {
        if(!newLibrary.error) {
            console.log(newLibrary);
            setLibraries(oldLibraries => oldLibraries.map(oldLibrary => {
                if(oldLibrary._id == newLibrary._id) {
                    return {...newLibrary, comments: [...newLibrary.comments]}
                } else {
                    return oldLibrary
                }
            }))
            setComment("")
        } else {
                alert(newLibrary.error.message)
            }
        })
    }

    return (
        <div>
            <h1>Main Component</h1>
            <CardContainer 
                libraries={libraries} 
                toggleSidebar={toggleSidebar} 
            />
            {displaySidebar && <Sidebar 
                comment={comment} 
                libraries={libraries}
                currentLibrary={currentLibrary}
                onCommentTextChange={setComment} 
                submitComment={postComment}
            />}
        </div>
    )
}



export default Main