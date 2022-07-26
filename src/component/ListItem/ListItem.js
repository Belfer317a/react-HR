import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ( {
  image,
  name, 
  description, 
  twitterLink
} )=> (
  <>
    <li>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={twitterLink}>Go to Twitter account</a>
      </div>
    </li>
  </>
);

ListItem.prototype = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired
}


export default ListItem;
