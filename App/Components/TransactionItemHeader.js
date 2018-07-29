import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/TransactionItemHeaderStyle'
import { Grid, Col, Row, Icon} from 'native-base'
import {Colors, Fonts} from '../Themes'

export default class TransactionItemHeader extends Component {
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
            <Col size={12}>
              <Row>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Ticker</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Date</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Num</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>N Price</Text></Col>
              </Row>
              <Row>
                <Col size={6}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left', fontSize: 12}}>Equity Name</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Type</Text></Col>
                <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>N Total</Text></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
