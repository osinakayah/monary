import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/StockListHeaderStyle'
import { Grid, Col, Row } from 'native-base'
import {Colors, Fonts} from "../Themes";

export default class StockListHeader extends Component {
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
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'left'}}>Name</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'center'}}>Price</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'center'}}>N Change</Text></Col>
            <Col size={3}><Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'center'}}>% Change</Text></Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
