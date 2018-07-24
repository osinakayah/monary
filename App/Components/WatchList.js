import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Styles/WatchListStyle'
import {Colors, Fonts, Metrics} from "../Themes";
import SingleRowStockName from './SingleRowStockName'
import { Table, Row } from 'react-native-table-component';
import SingleRowPriceChange from "./SingleRowPriceChange";
import SinglePricePercentageChange from "./SinglePricePercentageChange";

export default class WatchList extends Component {
  constructor(props) {
    super(props);
    const screenWidth = Metrics.screenWidth
    let neededSpace = (1/4) * 100;
    let tickerWidth = (neededSpace/100) * screenWidth
    let priceWidth = (neededSpace/100) * screenWidth
    let percentageChangeWidth = (neededSpace/100) * screenWidth
    let priceChangeWidth = (neededSpace/100) * screenWidth
    this.state = {
      tableHead: ['Name', 'Price', '%Change', 'Volume'],
      widthArr: [tickerWidth, priceWidth, percentageChangeWidth, priceChangeWidth]
    }
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

    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 20; i += 1) {
      const rowData = [];
      for (let j = 0; j < 4; j += 1) {
        if(j === 0){
          rowData.push(<SingleRowStockName name='ABH' fullName='Alphabet' />);
          continue
        }
        else if (j === 1) {
          rowData.push(<SingleRowPriceChange priceChange={i + 12} />)
          continue
        }
        else if (j === 2) {
          rowData.push(<SinglePricePercentageChange percentageChange={i + j + '.' + (i + j) + '9%'} />)
          continue
        }

        rowData.push(<Text onPress={() => {alert(5)}} style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'center'}}>{i + j}00</Text>);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View>
            <Table borderStyle={{borderColor: Colors.coal}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.headerText} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: 'rgba(0,0,0,0)'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row

                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index % 2 && {backgroundColor: Colors.coal}]}
                      textStyle={styles.bodyText}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
