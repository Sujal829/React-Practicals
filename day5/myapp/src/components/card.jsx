function card (props) {
    return (
        <div class="parent">
        <div className="card">
            <h3>Name: {props.name} </h3>
            <p>Age : {props.age}</p>
            <p>Email : {props.email}</p>
        </div>
        </div>
    )
}
export default card;