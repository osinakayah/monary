import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SingleRowStockNameStyle'
import {Grid, Row, Col} from 'native-base'
import {Colors, Fonts} from "../Themes";
export default class SingleRowStockName extends Component {
  // // Prop type warnings
  static propTypes = {
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
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
            <Col><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, fontSize: 12}}>{this.props.name}</Text></Col>
          </Row>
          <Row>
            <Col><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, fontSize: 9}}>{this.props.fullName}</Text></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
