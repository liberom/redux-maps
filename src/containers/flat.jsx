// Import React
import React, { Component } from 'react';

// Import Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import Actions
import { selectFlat } from '../actions';


class Flat extends Component {
  handleClick = () => {
    // Redux Action
    this.props.selectFlat(this.props.flat);
  }

  render() {
    // const style needs to be inside render()
    const style = {
      backgroundImage: url("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg")
    }

    let classes = "flat card"
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected"
    }

    return (
      <div className="card-container" >
        <div className={classes} style={style} >
          <div className="card-category" > {this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description" >
            <h2> {this.props.flat.name} </h2>
          </div>
          <a className="card-link" href="#" onClick={this.handleClick} ></a>
        </div>
      </div>
    );
  }

}

// Redux map/connect functions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch);
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

// Redux export
export default connect(mapStateToProps, mapDispatchToProps)(Flat);
