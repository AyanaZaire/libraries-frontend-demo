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
    const [editButtonClicked, setEditButtonClicked] = useState(false)
    const [currentComment, setCurrentComment] = useState("")

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

    function handleEditButton(comment) {
        setEditButtonClicked(prevEdit => !prevEdit)
        setCurrentComment(comment)
        setComment(comment.body) //set textarea value with comment to edit
        console.log(currentComment);
    }

    function editComment(event) {
        event.preventDefault()
        fetch(`http://localhost:3000/libraries/${currentLibrary._id}/comments/${currentComment._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                body: comment
            })
        })
        .then(response => response.json())
        .then(updatedLibrary => {
            if(!updatedLibrary.error) {
                setEditButtonClicked(prevEdit => !prevEdit)
                setLibraries(oldLibraries => oldLibraries.map(oldLibrary => {
                    if(oldLibrary._id == updatedLibrary._id) {
                        let tempComments = [...oldLibrary.comments]
                        let index = updatedLibrary.comments.findIndex(comment => comment._id == currentComment._id)
                        console.log(index);
                        if(index != -1) {
                            tempComments[index] = {
                                ...tempComments[index],
                                body : comment
                            }
                        }
                        return {...oldLibrary, comments: tempComments}
                    } else {
                        return oldLibrary
                    }
                }))
                setComment("")
            } else {
                alert(updatedLibrary.error.message)
            }
        })
    }

    function deleteComment(commentToDelete) {
        fetch(`http://localhost:3000/libraries/${currentLibrary._id}/comments/${commentToDelete._id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(updatedLibrary => {
            if(!updatedLibrary.error) {
                // console.log("empty object", updatedLibrary)
                setLibraries(oldLibraries => oldLibraries.map(oldLibrary => {
                    return {...oldLibrary, comments: oldLibrary.comments.filter(comment => comment._id !== commentToDelete._id)}
                }))
            } else {
                alert(updatedLibrary.error.message)
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
                submitComment={editButtonClicked ? editComment : postComment}
                handleEditButton={handleEditButton}
                deleteComment={deleteComment}
            />}
        </div>
    )
}



export default Main