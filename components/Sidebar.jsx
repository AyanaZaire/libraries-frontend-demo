import React from "react"

function Sidebar(props) {

    return (
        <div>
			<h2>Sidebar</h2>
            <p>This Libraries of PG Directory was built by <a href="https://ayanazairecotton.com/">Ayana Zaire Cotton</a> inside <a href="https://www.seedaschool.com/">Seeda School</a> as a part of the Full Stack Software Engineering Module 4: Community Directory project where learners are introduced to the React and Bootstrap libraries in order to build upon their full stack software engineering skills. Been to any of these libraries? Leave a comment about your experience below.</p>
            <form id="comment-form">
                <label htmlFor="comment">
                    <h4>How was your experience at this library?</h4>
                </label>
                <textarea 
                    id="comment"
                    value={props.comment}
                    type="text" 
                    style={{height: 100}} 
                    onChange={(event) => props.onCommentTextChange(event.target.value)}
                /><br />
                <button type="submit">Comment</button>
            </form><br></br>
      </div>
    )
}

export default Sidebar