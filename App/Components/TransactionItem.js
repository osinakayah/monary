import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/TransactionItemStyle'
import { Grid, Col, Row, Icon} from 'native-base'
import {Colors, Fonts} from '../Themes'
export default class TransactionItem extends Component {
  // // Prop type warnings
  static propTypes = {
    ticker: PropTypes.string.isRequired,
    equityName: PropTypes.string.isRequired,
    isGain: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number. isRequired,
    numberOfShares: PropTypes.number. isRequired,
    isBuy: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={[styles.container, this.props.isGain ? {backgroundColor: Colors.coal} : {backgroundColor: Colors.charcoal}]}>
        <Grid onPress={() => alert(3)}>
          <Row>
            <Col size={12}>
              <Row>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.ticker}</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.date}</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.numberOfShares}</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>N {this.props.price}</Text></Col>
              </Row>
              <Row>
                <Col size={6}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left', fontSize: 12}}>{this.props.equityName}</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>{this.props.isBuy? 'Buy' : 'Sell'}</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>N {this.props.price * this.props.numberOfShares}</Text></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
