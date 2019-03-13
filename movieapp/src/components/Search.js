import React from 'react'

const Search = (props) => {
    const options = props.results.map(r => (

        r.name ? <li key={r.id}>{r.name}</li> : null
    ))
    return <ul>{options}</ul>
}

export default Search