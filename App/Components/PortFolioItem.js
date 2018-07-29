import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/PortFolioItemStyle'
import {Colors, Fonts} from "../Themes";
import { Grid, Col, Row, Button} from 'native-base'

export default class PortFolioItem extends Component {
  // // Prop type warnings
  static propTypes = {
    ticker: PropTypes.string.isRequired,
    equityName: PropTypes.string.isRequired,
    isGain: PropTypes.bool.isRequired,
    priceIncreaseOrDescrease: PropTypes.number.isRequired,
    priceIncreaseOrDescreaseInPercentage: PropTypes.number.isRequired,
    price: PropTypes.number. isRequired,
    numberOfStock: PropTypes.number. isRequired,
    posIndex: PropTypes.number. isRequired,
    gotoStockDetail: PropTypes.func,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={[styles.container, this.props.posIndex % 2 ===0 ? {backgroundColor: Colors.charcoal} : {backgroundColor: Colors.coal}]}>
        <Grid>
          <Row>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.ticker}</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>N {this.props.price}</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.numberOfStock}</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'left'}, this.props.isGain ? {color: Colors.lightGain} : {color: Colors.lightLoss}]}>N {this.props.numberOfStock * this.props.price}</Text></Col>
          </Row>
          <Row>
            <Col size={6}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.equityName}</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'left'}, this.props.isGain ? {color: Colors.lightGain} : {color: Colors.lightLoss}]}>N {this.props.priceIncreaseOrDescrease}</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'left'}, this.props.isGain ? {color: Colors.lightGain} : {color: Colors.lightLoss}]}>% {this.props.priceIncreaseOrDescreaseInPercentage}</Text></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
