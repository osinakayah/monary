import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/PortFolioItemHeaderStyle'
import { Grid, Col, Row, Button} from 'native-base'

import {Colors, Fonts} from "../Themes";
export default class PortFolioItemHeader extends Component {
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

  render () {
    return (
      <View style={styles.container}>
        <Grid>
          <Row>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Ticker</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Price</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Num</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'left', color: Colors.silver}]}>Value</Text></Col>
          </Row>
          <Row>
            <Col size={6}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Equity Name</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'left', color: Colors.silver}]}>N Change</Text></Col>
            <Col size={3}><Text style={[{fontFamily: Fonts.type.raleEmphasis, textAlign: 'left', color: Colors.silver}]}>% Change</Text></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
