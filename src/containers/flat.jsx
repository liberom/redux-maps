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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
    }


    let classes = "flat card"
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected"
    }

    return (
        <div className={classes} style={style} onClick={this.handleClick}>
          <div className="card-description" >
            <h2> {this.props.flat.name} </h2>
            <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
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
