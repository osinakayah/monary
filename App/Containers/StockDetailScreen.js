import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Header, Grid, Row, Col, Button, Body, Left, Right, Icon, Title, Subtitle } from 'native-base'
import { Card, CardItem, FooterTab, Footer } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/StockDetailScreenStyle'
import {Colors, Fonts, Metrics} from "../Themes";
import {StockLine} from 'react-native-pathjs-charts'

import moment from 'moment';
class StockDetailScreen extends Component {
  render () {
    const {goBack} = this.props.navigation;
    let data = [
      [{
        "x": 0,
        "y": 47782
      }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }, {
        "x": 4,
        "y": 58257
      }, {
        "x": 5,
        "y": 40579
      }, {
        "x": 6,
        "y": 72893
      }, {
        "x": 7,
        "y": 60663
      }, {
        "x": 8,
        "y": 15715
      }, {
        "x": 9,
        "y": 40305
      }, {
        "x": 10,
        "y": 68592
      }, {
        "x": 11,
        "y": 95664
      }, {
        "x": 12,
        "y": 17908
      }, {
        "x": 13,
        "y": 22838
      }, {
        "x": 14,
        "y": 32153
      }, {
        "x": 15,
        "y": 56594
      }, {
        "x": 16,
        "y": 76348
      }, {
        "x": 17,
        "y": 46222
      }, {
        "x": 18,
        "y": 59304
      },
        {
          "x": 0,
          "y": 47782
        }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }, {
        "x": 4,
        "y": 58257
      }, {
        "x": 5,
        "y": 40579
      }, {
        "x": 6,
        "y": 72893
      }, {
        "x": 7,
        "y": 60663
      }, {
        "x": 8,
        "y": 15715
      }, {
        "x": 9,
        "y": 40305
      }, {
        "x": 10,
        "y": 68592
      }, {
        "x": 11,
        "y": 95664
      }, {
        "x": 12,
        "y": 17908
      }, {
        "x": 13,
        "y": 22838
      }, {
        "x": 14,
        "y": 32153
      }, {
        "x": 15,
        "y": 56594
      }, {
        "x": 16,
        "y": 76348
      }, {
        "x": 17,
        "y": 46222
      }, {
        "x": 18,
        "y": 59304
      }],
      [{
        "x": 0,
        "y": 132189
      }, {
        "x": 1,
        "y": 61705
      }, {
        "x": 2,
        "y": 154976
      }, {
        "x": 3,
        "y": 81304
      }, {
        "x": 4,
        "y": 172572
      }, {
        "x": 5,
        "y": 140656
      }, {
        "x": 6,
        "y": 148606
      }, {
        "x": 7,
        "y": 53010
      }, {
        "x": 8,
        "y": 110783
      }, {
        "x": 9,
        "y": 196446
      }, {
        "x": 10,
        "y": 117057
      }, {
        "x": 11,
        "y": 186765
      }, {
        "x": 12,
        "y": 174908
      }, {
        "x": 13,
        "y": 75247
      }, {
        "x": 14,
        "y": 192894
      }, {
        "x": 15,
        "y": 150356
      }, {
        "x": 16,
        "y": 180360
      }, {
        "x": 17,
        "y": 175697
      }, {
        "x": 18,
        "y": 114967
      }],
      [{
        "x": 0,
        "y": 125797
      }, {
        "x": 1,
        "y": 256656
      }, {
        "x": 2,
        "y": 222260
      }, {
        "x": 3,
        "y": 265642
      }, {
        "x": 4,
        "y": 263902
      }, {
        "x": 5,
        "y": 113453
      }, {
        "x": 6,
        "y": 289461
      }, {
        "x": 7,
        "y": 293850
      }, {
        "x": 8,
        "y": 206079
      }, {
        "x": 9,
        "y": 240859
      }, {
        "x": 10,
        "y": 152776
      }, {
        "x": 11,
        "y": 297282
      }, {
        "x": 12,
        "y": 175177
      }, {
        "x": 13,
        "y": 169233
      }, {
        "x": 14,
        "y": 237827
      }, {
        "x": 15,
        "y": 242429
      }, {
        "x": 16,
        "y": 218230
      }, {
        "x": 17,
        "y": 161511
      }, {
        "x": 18,
        "y": 153227
      }]
    ]
    const options = {
      width: 300,
      height: 300,
      color: Colors.charcoal,
      margin: {
        top: 12,
        left: 37,
        bottom: 30,
        right: 12
      },
      animate: {
        type: 'delayed',
        duration: 2000
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: Colors.silver
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: Colors.silver
        }
      }
    };
    return (
      <Container style={{backgroundColor: Colors.coal, flex: 1}}>
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
        <Content style={{position: 'relative', height: Metrics.screenHeight}}>

          <View style={styles.bannerStyle}>

            <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: Metrics.screenWidth, height: Metrics.screenHeight/12, backgroundColor: Colors.primary}}>
              <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                <Icon style={{fontSize: 25, color: Colors.silver}} type='MaterialCommunityIcons' name='currency-ngn' />
                <Text style={{fontSize: 30, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>12,000</Text>
              </View>
              <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 15, color: Colors.colorGain, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>120.09</Text>
                <Text style={{fontSize: 15, color: Colors.colorGain, fontFamily: Fonts.type.raleRegular}}>(20%)</Text>
              </View>
            </View>
          </View>

          <View style={[styles.gridStyle, styles.cardContainer, {display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}]}>
            <StockLine data={data} options={options} xKey='x' yKey='y' />
          </View>
          <View style={{margin: Metrics.doubleBaseMargin}}>
            <Grid>
              <Row>
                <Col><Button small style={{backgroundColor: Colors.accent}} block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>1 D</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>1 W</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>1 M</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>3 M</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>6 M</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>1 Y</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>2 Y</Text></Button></Col>
                <Col><Button small block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>5 Y</Text></Button></Col>
              </Row>
            </Grid>
          </View>

          <View>

            <Card>
              <CardItem style={{backgroundColor: Colors.charcoal}} header>
                <Text style={{color: Colors.silver}}>News</Text>
              </CardItem>
              <CardItem style={{backgroundColor: Colors.charcoal}}>
                <Text style={{color: Colors.silver}}>Alphabet planning to expand to Africa and build more data centerAlphabet planning to expand to Africa and build more data center</Text>
              </CardItem>
              <CardItem style={{backgroundColor: Colors.charcoal}}>
                <Text style={{color: Colors.silver}}>Alphabet planning to expand to Africa and build more data centerAlphabet planning to expand to Africa and build more data center</Text>
              </CardItem>
              <CardItem style={{backgroundColor: Colors.charcoal}}>
                <Text style={{color: Colors.silver}}>Alphabet planning to expand to Africa and build more data centerAlphabet planning to expand to Africa and build more data center</Text>
              </CardItem>
            </Card>
          </View>


        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: Colors.silver}}>
            <Button style={{backgroundColor: Colors.silver}} vertical onPress={() => { this.props.navigation.navigate('BuyStockScreen')}} >
              <Icon name="md-briefcase" style={{color: Colors.primary}}/>
              <Text style={{color: Colors.primary}}>Buy</Text>
            </Button>
            <Button style={{backgroundColor: Colors.silver, marginRight: 7, marginLeft: 7}} vertical >
              <Icon name="md-eye" style={{color: Colors.primary}}/>
              <Text style={{color: Colors.primary}}>Watch</Text>
            </Button>
            <Button style={{backgroundColor: Colors.silver}} vertical >
              <Icon type='FontAwesome' name="handshake-o" style={{color: Colors.primary}}/>
              <Text style={{color: Colors.primary}}>Sell</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(StockDetailScreen)
