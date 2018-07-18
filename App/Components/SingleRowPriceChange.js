import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Grid, Row, Col, Icon} from 'native-base'
import { View, Text } from 'react-native'
import styles from './Styles/SingleRowPriceChangeStyle'
import {Colors, Fonts} from "../Themes";

export default class SingleRowPriceChange extends Component {
  // // Prop type warnings
  static propTypes = {
    priceChange: PropTypes.string.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Grid>
          <Row>
            <Col><Icon style={{fontSize: 12}} type='MaterialCommunityIcons' name='currency-ngn'/></Col>
            <Col><Text style={{fontFamily: Fonts.type.light, color: Colors.colorGain}}>{this.props.priceChange}</Text></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
