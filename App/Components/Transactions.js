import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/TransactionsStyle'
import {Colors} from "../Themes";
import { Grid, Row, Col, Button, CardItem, Card } from 'native-base';
import TransactionItem from "./TransactionItem";

const PENDING = 0
const EXECUTED = 1
export default class Transactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedButton: EXECUTED
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
    return (
      <View style={styles.container}>
        <Grid>
          <Row>
            <Col>
              <Button onPress={() => {this.setState({selectedButton: EXECUTED})}} block light bordered={this.state.selectedButton !== EXECUTED}><Text style={this.state.selectedButton === PENDING ? {color: Colors.silver} : {color: Colors.coal}}>Executed</Text></Button>
            </Col>
            <Col>
              <Button onPress={() => {this.setState({selectedButton: PENDING})}} block light bordered={this.state.selectedButton !== PENDING}><Text style={this.state.selectedButton === EXECUTED ? {color: Colors.silver} : {color: Colors.coal}}>Pending</Text></Button>
            </Col>
          </Row>
        </Grid>

        <View>
          <TransactionItem isBuy date='12-3-18' equityName='Alphabet Inc' isGain numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy={false} date='12-3-18' equityName='Alphabet Inc' isGain={false} numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy date='12-3-18' equityName='Alphabet Inc' isGain numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy={false} date='12-3-18' equityName='Alphabet Inc' isGain={false} numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy date='12-3-18' equityName='Alphabet Inc' isGain numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy={false} date='12-3-18' equityName='Alphabet Inc' isGain={false} numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy date='12-3-18' equityName='Alphabet Inc' isGain numberOfShares={7} price={30} ticker= 'ALP' />
          <TransactionItem isBuy={false} date='12-3-18' equityName='Alphabet Inc' isGain={false} numberOfShares={7} price={30} ticker= 'ALP' />


        </View>
      </View>
    )
  }
}
