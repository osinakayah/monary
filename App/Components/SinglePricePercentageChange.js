import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SinglePricePercentageChangeStyle'
import {Colors, Fonts} from "../Themes";

export default class SinglePricePercentageChange extends Component {
  // // Prop type warnings
  static propTypes = {
    percentageChange: PropTypes.string.isRequired,
    //someSetting: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <Text style={{color: Colors.colorGain, fontFamily: Fonts.type.raleEmphasis, fontSize: 14, textAlign: 'center'}}>{this.props.percentageChange}</Text>
    )
  }
}
