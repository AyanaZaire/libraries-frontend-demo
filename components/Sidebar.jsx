import React from "react"

function Sidebar(props) {

    const library = props.libraries.find(library => library._id == props.currentLibrary._id)

    const comments = library.comments.map(comment => {
        let date = new Date(comment.date)
        return (
            <div key={comment.body}>
                <h5>{comment.body}</h5>
                <small>{date.toString()}</small><br></br><br />
                <button onClick={() => props.handleEditButton(comment)}>Edit</button>
                <button>Delete</button>
            </div>
        )
    })

    return (
        <div>
			<h2>Sidebar</h2>
            <p>This Libraries of PG Directory was built by <a href="https://ayanazairecotton.com/">Ayana Zaire Cotton</a> inside <a href="https://www.seedaschool.com/">Seeda School</a> as a part of the Full Stack Software Engineering Module 4: Community Directory project where learners are introduced to the React and Bootstrap libraries in order to build upon their full stack software engineering skills. Been to any of these libraries? Leave a comment about your experience below.</p>
            <form id="comment-form" onSubmit={props.submitComment}>
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
            <div>
              <h3>{library.name}</h3>
              <span>{library.area}</span>
              {library.year && <span>{library.year}</span>}
              {library.aa_town && <span>Black Incorporated Town</span>}
              <span><a href={library.website}>Website</a></span>
              <p>{library.address}</p>
              <p><small>Area Director: {library.area_director}</small></p>
              <p>{library.description}</p>
              <h4>Comments</h4>
              {comments}
          </div>
      </div>
    )
}

export default Sidebar