import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Container, Content, Header, Footer, FooterTab, Col, Item, Input, Icon, Label, Left, Right, Body, Title, Button } from 'native-base'
import {List, ListItem} from 'native-base'
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import {Colors, Fonts, Images, Metrics} from '../Themes'
import SingleRowStockName from "../Components/SingleRowStockName";
import SingleRowPriceChange from "../Components/SingleRowPriceChange";
import WatchList from "../Components/WatchList";
import PortFolio from "../Components/PortFolio";
import Markets from "../Components/Markets";
import Transactions from "../Components/Transactions";
import Account from "../Components/Account";

const WATCHLIST = 0;
const PORTFOLIO = 1;
const MARKETS = 2;
const TRANSACTIONS =3;
const ACCOUNT = 4;

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: PORTFOLIO
    }
  }
  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case WATCHLIST:
        return (<WatchList navigation={this.props.navigation}/>)
      case PORTFOLIO:
        return (<PortFolio navigation={this.props.navigation}/>);
      case MARKETS:
        return (<Markets navigation={this.props.navigation} />);
      case TRANSACTIONS:
        return (<Transactions navigation={this.props.navigation} />);
      case ACCOUNT:
        return (<Account navigation={this.props.navigation} />);
      default:
    }
  }
  render () {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: Colors.primary}} androidStatusBarColor={ Colors.primaryDark}>
          <Body><Title style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver}}>Monary</Title></Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('StockDetailScreen')}>
              <Icon style={{color: Colors.silver}} name="md-search" />
            </Button>
          </Right>
        </Header>
        <Content>
          {this.renderSelectedTab()}
        </Content>

        <Footer>
          <FooterTab style={{backgroundColor: Colors.primary}}>
            <Button style={this.state.selectedTab === WATCHLIST ? {backgroundColor: Colors.custom_bg}: {}} vertical onPress={() => {this.setState({selectedTab: WATCHLIST })}}>
              <Icon name="md-eye" style={this.state.selectedTab === WATCHLIST ? {color: Colors.primary}: {color: Colors.silver}} />
              <Text uppercase={false} style={this.state.selectedTab === WATCHLIST ? {fontSize: 11, color: Colors.primary} : {fontSize: 11, color: Colors.silver}}>WatchList</Text>
            </Button>

            <Button style={this.state.selectedTab === PORTFOLIO ? {backgroundColor: Colors.custom_bg}: {}} vertical onPress={() => {this.setState({selectedTab: PORTFOLIO })}}>
              <Icon name="md-briefcase" style={this.state.selectedTab === PORTFOLIO ? {color: Colors.primary}: {color: Colors.silver}} />
              <Text uppercase={false} style={this.state.selectedTab === PORTFOLIO ? {fontSize: 11, color: Colors.primary} : {fontSize: 11, color: Colors.silver}}>Portfolio</Text>
            </Button>

            <Button style={this.state.selectedTab === MARKETS ? {backgroundColor: Colors.custom_bg}: {}} vertical onPress={() => {this.setState({selectedTab: MARKETS })}}>
              <Icon active name="md-analytics" style={this.state.selectedTab === MARKETS ? {color: Colors.primary}: {color: Colors.silver}} />
              <Text uppercase={false} style={this.state.selectedTab === MARKETS ? {fontSize: 11, color: Colors.primary} : {fontSize: 11, color: Colors.silver}}>Market</Text>
            </Button>
            <Button style={this.state.selectedTab === TRANSACTIONS ? {backgroundColor: Colors.custom_bg}: {}} vertical onPress={() => {this.setState({selectedTab: TRANSACTIONS })}}>
              <Icon name="md-list" style={this.state.selectedTab === TRANSACTIONS ? {color: Colors.primary}: {color: Colors.silver}} />
              <Text uppercase={false} style={this.state.selectedTab === TRANSACTIONS ? {fontSize: 11, color: Colors.primary} : {fontSize: 11, color: Colors.silver}}>Transactions</Text>
            </Button>

            <Button style={this.state.selectedTab === ACCOUNT ? {backgroundColor: Colors.custom_bg}: {}} vertical onPress={() => {this.setState({selectedTab: ACCOUNT })}}>
              <Icon name="md-person" style={this.state.selectedTab === ACCOUNT ? {color: Colors.primary}: {color: Colors.silver}} />
              <Text uppercase={false} style={this.state.selectedTab === ACCOUNT ? {fontSize: 11, color: Colors.primary} : {fontSize: 11, color: Colors.silver}}>Account</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
