import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text} from 'react-native'
import styles from './Styles/PortFolioStyle'
import StockItem from "./StockItem";
import {Colors, Fonts, Metrics} from "../Themes";
import { Icon } from 'native-base'
import PortFolioItem from '../Components/PortFolioItem'
import PortFolioItemHeader from '../Components/PortFolioItemHeader'
export default class PortFolio extends Component {
  // // Prop type warnings
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    //someSetting: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  gotoStockDetail = () => {
    this.props.navigation.navigate('StockDetailScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <PortFolioItemHeader/>
        <PortFolioItem posIndex={0} isGain ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
        <PortFolioItem posIndex={1} isGain={false} ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
        <PortFolioItem posIndex={2} isGain ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
        <PortFolioItem posIndex={3} isGain ={false} ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
        <PortFolioItem posIndex={4} isGain ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
        <PortFolioItem posIndex={5} isGain ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
        <PortFolioItem posIndex={6} isGain={false} ticker='ALP' price={200} numberOfStock={12} equityName='Alphabet Inc' priceIncreaseOrDescreaseInPercentage={0.2} priceIncreaseOrDescrease={7}/>
      </View>
    )
  }
}
