import React from 'react'
import Avatar from './avatar';
import Details from './details';
const Card = (props) => {
return(
    <div>
      
      <div className="card">
        <div className="top">
          <h2 className='name'>{props.name}</h2>
          <p>{props.id}</p>
          <Avatar img = {props.img}/>
        </div>
        <div className="bottom">
          <Details detail = {props.phone}/>
          <Details detail={props.email}/>
        </div>
      </div>
    </div>
);

}

export default Card;