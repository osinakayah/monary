import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Header, Grid, Row, Col, Item, Label, Input, Button, Body, Left, Right, Icon, Title, Subtitle } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StockDetailScreenStyle'
import {Colors, Fonts, Metrics} from "../Themes";

class StockDetailScreen extends Component {
  render () {
    const {goBack} = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: Colors.primary}} androidStatusBarColor={ Colors.primaryDark}>
          <Left>
            <Button onPress={() => {goBack()}} transparent>
              <Icon style={{color: Colors.silver}} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver}}>ALCP</Title>
            <Subtitle style={{fontFamily: Fonts.type.light, color: Colors.silver, fontSize: 13}}>Alphabet Company PLC</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{color: Colors.silver}} name='md-refresh' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: Metrics.screenWidth, height: Metrics.screenHeight/5, backgroundColor: Colors.accent}}>
            <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
              <Icon style={{fontSize: 25, color: Colors.silver}} type='MaterialCommunityIcons' name='currency-ngn' />
              <Text style={{fontSize: 30, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>12,000</Text>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 15, color: Colors.colorGain, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>+120</Text>
              <Text style={{fontSize: 15, color: Colors.colorGain, fontFamily: Fonts.type.raleRegular}}>(20%)</Text>
            </View>

          </View>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(StockDetailScreen)
