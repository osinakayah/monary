import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Grid, Row, Col, Icon, Button} from 'native-base'
import { View, Text } from 'react-native'
import styles from './Styles/SingleRowPriceChangeStyle'
import {Colors, Fonts} from "../Themes";

export default class SingleRowPriceChange extends Component {
  // // Prop type warnings
  static propTypes = {
    priceChange: PropTypes.number.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <Button onPress={() => {alert(3)}} success small style={{paddingRight: 12, paddingLeft: 12}}>
        {/*<Icon style={{fontSize: 12}} type='MaterialCommunityIcons' name='currency-ngn' />*/}
        <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, fontSize: 14}}>{this.props.priceChange}00</Text>
      </Button>
    )
  }
}
