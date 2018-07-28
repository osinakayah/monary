import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Styles/WatchListStyle'
import StockItem from "./StockItem";
import StockListHeader from "./StockListHeader";

export default class WatchList extends Component {
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
