import React from "react"

function Sidebar(props) {

    const library = props.libraries.find(library => library._id == props.currentLibrary._id)

    const comments = library.comments.map(comment => {
        let date = new Date(comment.date)
        return (
            <div key={comment.body} className="comment card">
                <div className="card-body">
                    <h5 className="card-title">{comment.body}</h5>
                    <small className="card-subtitle mb-2 text-body-secondary">{date.toString()}</small><br></br><br />
                    <button className="edit-btn btn btn-outline-dark" onClick={() => props.handleEditButton(comment)}>Edit</button>
                    <button className="btn btn-outline-dark" onClick={() => props.deleteComment(comment)}>Delete</button>
                </div>
            </div>
        )
    })

    return (
        <div className="col-sm-4">
            <i className="bi bi-x-circle" onClick={() => props.toggleSidebar(library._id)}></i>
            <p>This Libraries of PG Directory was built by <a href="https://ayanazairecotton.com/">Ayana Zaire Cotton</a> inside <a href="https://www.seedaschool.com/">Seeda School</a> as a part of the Full Stack Software Engineering Module 4: Community Directory project where learners are introduced to the React and Bootstrap libraries in order to build upon their full stack software engineering skills. Been to any of these libraries? Leave a comment about your experience below.</p>
            <form id="comment-form" onSubmit={props.submitComment}>
                <label htmlFor="comment" className="form-label">
                    <h4>How was your experience at this library?</h4>
                </label>
                <textarea 
                    className="form-control"
                    id="comment"
                    value={props.comment}
                    type="text" 
                    style={{height: 100}} 
                    onChange={(event) => props.onCommentTextChange(event.target.value)}
                /><br />
                <button type="submit" className="btn btn-outline-light">Comment</button>
            </form><br></br>
            <div className="card mb-3">
                <img src={library.image} className="card-img-top" alt="image of library"/>
                <div className="card-body">
                    <h3 className="card-title">{library.name}</h3>
                    <span className="badge rounded-pill text-bg-dark">{library.area}</span>
                    {library.year && <span className="badge rounded-pill text-bg-dark">{library.year}</span>}
                    {library.aa_town && <span className="badge rounded-pill text-bg-dark">Black Incorporated Town</span>}
                    <span className="badge rounded-pill text-bg-dark"><a href={library.website} className="card-link">Website</a></span>
                    <p className="card-text">{library.address}</p>
                    <p className="card-text"><small className="text-body-secondary">Area Director: {library.area_director}</small></p>
                    <p className="card-text">{library.description}</p>
                    <h4 className="card-title">Comments</h4>
                    {comments}
                </div>
            </div>
      </div>
    )
}

export default Sidebar