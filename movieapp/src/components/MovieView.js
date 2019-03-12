import React from "react"

class MovieView extends React.Component {
    constructor() {

    }

    render() {
        return (<h1>{this.props.item.title}</h1>)
    }
}

export default MovieView