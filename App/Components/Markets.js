import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import {Colors, Fonts, Metrics} from "../Themes";
import styles from './Styles/MarketsStyle'
import StockItem from "./StockItem";
import StockListHeader from "./StockListHeader";
export default class Markets extends Component {
  gotoStockDetail = () => {
    this.props.navigation.navigate('StockDetailScreen')
  }
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
        <StockListHeader />
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.017} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain priceIncreaseOrDescrease={1.2} price={230} volume={390}/>
        <StockItem gotoStockDetail={this.gotoStockDetail} priceIncreaseOrDescreaseInPercentage={8.01} ticker='ALP' equityName='Alphabet Inc' isGain={false} priceIncreaseOrDescrease={1.2} price={230} volume={390}/>

      </View>
    )
  }
}
