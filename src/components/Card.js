import React from 'react'
import "./Card.css";

function Card(props) {
    return(
        <div className='card'>

            <div className='innerCard'>
                <img src={props.image} alt="User1" className='image' />
                <p>{props.designation}</p>
                <h4>{props.name}</h4>
                <small>{props.description}</small>
            </div>

        </div>
    );
};       
export default Card;

// export default function Card(props){
//     return(
//         <div className='card'>

//           <div className='innerCard'>
//           {/* <image src={props.user.image} alt="profile-pic"/> */}
//           //                 <img src={props.image} alt="User1" className='image' />


//     )
// }

// import React from 'react'
// import "./Card.css";

// function Card(props) {
//     return(
//         <div className='card'>

//             <div className='innerCard'>
//                 <img src={props.image} alt="User1" className='image' />
//                 <p>{props.designation}</p>
//                 <h4>{props.name}</h4>
//                 <small>{props.description}</small>
//             </div>

//         </div>
//     );
// };       
// export default Card;