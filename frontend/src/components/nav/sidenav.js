// import React from 'react';
// import '../stylesheets/sidenav.css';

// class SideNav extends React.Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       sidenav: false
//     }
//   }

//   closeSideNav(e){
//     e.preventDefault();
//     this.setState({ sidenav: false })
//   }



//   render(){
//     console.log(this.props)

//     if(this.state.sidenav) {
//       return (
//         <div className='sideNav-cont'>
//           <p>&times;</p>
//           <i className="fas fa-home">Home</i>
//           <i className="fas fa-fire">Trending</i>
//           <i className="fas fa-photo-video">Subscriptions</i>
//         </div>
//       )
//     } else {
//       return null
//     }
//   }
// }

// export default SideNav;