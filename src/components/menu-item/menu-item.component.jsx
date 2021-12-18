import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);


/* This is equivalent to a simple arrow function

function MenuItem ({ title, imageUrl, size, history, linkUrl, match }) {

  console.log("history -----> " + history.location.pathname)
  console.log("history -----> " + history.action)
  console.log("history -----> " + history.length)
  console.log("title -----> " + title)
  console.log("match -----> " + match.url)
  console.log("linkUrl -----> " + linkUrl)

  return(
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  );
}
*/


//The "withRouter" is not longer valid in react-reouter-dom 6.x. Use hook
//The "withRouter" will return the same MeunItem component and add the 'props' coming 
//from the <Route></Route>. So the "history, linkUrl, match" props are passed
//to the MenuItem by the "withRouter" function
export default withRouter(MenuItem);
