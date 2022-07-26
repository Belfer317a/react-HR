import React from 'react';

const ListItem = (props) =>(
  <>
    <li>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a href={props.twitterLink}>Go to Twitter account</a>
    </li>
  </>
)
export default ListItem;