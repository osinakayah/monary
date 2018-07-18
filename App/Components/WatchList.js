import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/WatchListStyle'
import {Colors, Fonts} from "../Themes";
import {List, ListItem, Left, Body, Right} from 'native-base'
import SingleRowStockName from './SingleRowStockName'

export default class WatchList extends Component {
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
        <List style={{backgroundColor: Colors.charcoal}}>
          <ListItem>
            <Left>
              <SingleRowStockName name='ALP' fullName='Netflix Inc' />
            </Left>
            <Body>
            <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>+11.71%</Text>
            </Body>
            <Right>
              <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>911.78</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <SingleRowStockName name='ALP' fullName='Dangote Inc' />
            </Left>
            <Body>
            <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>+11.71%</Text>
            </Body>
            <Right>
              <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>911.78</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <SingleRowStockName name='ALP' fullName='Google Inc' />
            </Left>
            <Body>
            <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>+11.71%</Text>
            </Body>
            <Right>
              <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>911.78</Text>
            </Right>
          </ListItem>


          <ListItem>
            <Left>
              <SingleRowStockName name='ALP' fullName='Alphabet Inc' />
            </Left>
            <Body>
            <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>+11.71%</Text>
            </Body>
            <Right>
              <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.colorGain}}>911.78</Text>
            </Right>
          </ListItem>
        </List>
      </View>
    )
  }
}
