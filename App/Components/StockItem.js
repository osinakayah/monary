import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/StockItemStyle'
import {Colors, Fonts} from "../Themes";
import { Grid, Col, Row, Button} from 'native-base'
import SingleRowStockName from "./SingleRowStockName";
export default class StockItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  static propTypes = {
    ticker: PropTypes.string.isRequired,
    equityName: PropTypes.string.isRequired,
    isGain: PropTypes.bool.isRequired,
    priceIncreaseOrDescrease: PropTypes.number.isRequired,
    priceIncreaseOrDescreaseInPercentage: PropTypes.number.isRequired,
    price: PropTypes.number. isRequired,
    volume: PropTypes.number. isRequired,
    gotoStockDetail: PropTypes.func
  }

  render () {
    return (
      <View style={[styles.container, this.props.isGain ? {backgroundColor: Colors.coal} : {backgroundColor: Colors.charcoal}]}>
        <Grid onPress={() => this.props.gotoStockDetail()}>
          <Row>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.ticker}</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'center', color: Colors.silver, marginRight: 12, marginLeft: 12, paddingTop: 3, paddingBottom: 3}, this.props.isGain ? {backgroundColor: Colors.lightGain} : {backgroundColor: Colors.lightLoss}]}>{this.props.price}</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'center'}, this.props.isGain ? {color: Colors.lightGain} : {color: Colors.lightLoss}]}>N {this.props.priceIncreaseOrDescrease}</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'center'}, this.props.isGain ? {color: Colors.lightGain} : {color: Colors.lightLoss}]}>%{this.props.priceIncreaseOrDescreaseInPercentage}</Text></Col>
          </Row>
          <Row>
            <Col size={6}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left', fontSize: 12}}>{this.props.equityName}</Text></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
