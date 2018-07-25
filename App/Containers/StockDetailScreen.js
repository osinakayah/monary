import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Header, Grid, Row, Col, Button, Body, Left, Right, Icon, Title, Subtitle } from 'native-base'
import { Card, CardItem } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StockDetailScreenStyle'
import {Colors, Fonts, Metrics} from "../Themes";
import {StockLine} from 'react-native-pathjs-charts'
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
    let options = {
      width: 250,
      height: 250,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
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
          fill: '#34495E'
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
          fill: '#34495E'
        }
      }
    }
    return (
      <Container style={{backgroundColor: Colors.coal}}>
        <Header style={{backgroundColor: Colors.primaryDark}} androidStatusBarColor={ Colors.primaryDark}>
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
            <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: Metrics.screenWidth, height: Metrics.screenHeight/8, backgroundColor: Colors.primaryDark}}>
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

          <View style={[styles.gridStyle, styles.cardContainer]}>
            <StockLine data={data} options={options} xKey='x' yKey='y' />
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

          <View style={{margin: Metrics.smallMargin}}>
            <Grid>
              <Row>
                <Col><Button small style={{backgroundColor: Colors.colorGain, margin: Metrics.smallMargin}} block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>Buy</Text></Button></Col>
                <Col><Button small style={{backgroundColor: Colors.panther, margin: Metrics.smallMargin}} block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>Watch</Text></Button></Col>
                <Col><Button small style={{backgroundColor: Colors.accent, margin: Metrics.smallMargin}} block transparent><Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>Sell</Text></Button></Col>
              </Row>
            </Grid>

            <Card>
              <CardItem style={{backgroundColor: Colors.coal}} header>
                <Text style={{color: Colors.silver}}>News</Text>
              </CardItem>
              <CardItem style={{backgroundColor: Colors.coal}}>
                <Text style={{color: Colors.silver}}>Alphabet planning to expand to Africa and build more data center</Text>
              </CardItem>
              <CardItem style={{backgroundColor: Colors.coal}}>
                <Text style={{color: Colors.silver}}>Alphabet planning to expand to Africa and build more data center</Text>
              </CardItem>
              <CardItem style={{backgroundColor: Colors.coal}}>
                <Text style={{color: Colors.silver}}>Alphabet planning to expand to Africa and build more data center</Text>
              </CardItem>
            </Card>
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
