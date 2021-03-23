import React, { Component } from 'react';

const Flat = (props) => {
  const style = {
    backgroundImage: `url(${props.flat.imageUrl})`
  };

  return (
    <div className="flat card-container" >
      <div className="card" style={style} >
        <div className="card-category" > {props.flat.price} {props.flat.priceCurrency}</div>
        <div className="card-description" >
          <h2> {props.flat.name} </h2>
        </div>
        <a className="card-link" href="#" onClick={handleClick} ></a>
      </div>
    </div>
  );
};

// class Flat extends Component {
//   handleClick = () => {
//     this.props.selectFlat(this.props.index);
//   }

//   render() {
//     return(
//       <div className={`card${this.props.selected ? ' active' : '' }`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`}}>
//         <div className="card-category" > {this.props.flat.price} {this.props.flat.priceCurrency}</div>
//         <div className="card-description" >
//           <h2> {this.props.flat.name} </h2>
//         </div>
//         <a className="card-link" href="#" onClick={this.handleClick} ></a>
//       </div>
//     );
//   }
// }

export default Flat;
