import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/AccountStyle'
import {Colors, Fonts, Metrics} from "../Themes";
import { Pie } from 'react-native-pathjs-charts'
import { Icon, List, ListItem, Body, Right, Grid, Col, Row } from 'native-base'
export default class Account extends Component {
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


  //25 x number of rows to get height of col for the dots beside d pie chart

  render () {
    let data = [{
      "name": "Access Bank",
      "population": 2500000
    },
      {
        "name": "Coca cola",
        "population": 2584160
      }, {
        "name": "Dangote",
        "population": 6590667,
      }, {
        "name": "GTBank",
        "population": 7284698
      }
    ]

    let options = {
      margin: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
      },
      width: 120,
      height: 120,
      color: '#2980B9',
      r: 10,
      R: 50,
      legendPosition: 'topLeft',
      animate: {
        enabled: true,
        type: 'oneByOne',
        duration: 100,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }

    return (
      <View style={styles.container}>
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: Metrics.screenWidth, height: Metrics.screenHeight/7, backgroundColor: Colors.primary}}>
          <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Portfolio Value</Text>
          </View>
          <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
            <Icon style={{fontSize: 25, color: Colors.silver}} type='MaterialCommunityIcons' name='currency-ngn' />
            <Text style={{fontSize: 30, color: Colors.silver, fontFamily: Fonts.type.raleRegular}}>12,000</Text>
          </View>
        </View>

        <Grid>
          <Row>
            <Col size={6}>
              <Pie data={data}
                 options={options}
                 accessorKey="population"
                 margin={{ top: 12, left: 30, right: 12, bottom: 12 }}
                 color="#2980B9"
                 pallete={
                   [
                     { 'r': 25, 'g': 99, 'b': 201 },
                     { 'r': 24, 'g': 175, 'b': 35 },
                     { 'r': 190, 'g': 31, 'b': 69 },
                     { 'r': 100, 'g': 36, 'b': 199 },
                     { 'r': 214, 'g': 207, 'b': 32 },
                     { 'r': 198, 'g': 84, 'b': 45 }
                   ]
                 }
                 r={50}
                 R={54}
                 legendPosition="topLeft"
                 label={{
                   fontFamily: 'Arial',
                   fontSize: 8,
                   fontWeight: true,
                   color: '#ECF0F1'
                 }}/>
            </Col>
            <Col size={6} style={{height: 100, marginTop: 12}}>
              <Row>
                <Col size={1}>
                  <View style={{ height: 12, width: 12, backgroundColor: Colors.fire}} />
                </Col>
                <Col size={11}>
                  <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Access Bank</Text>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <View style={{ height: 12, width: 12, backgroundColor: Colors.colorGain}} />
                </Col>
                <Col size={11}>
                  <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Dangote</Text>
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <View style={{ height: 12, width: 12, backgroundColor: Colors.facebook}} />
                </Col>
                <Col size={11}>
                  <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Coca Cola</Text>
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <View style={{ height: 12, width: 12, backgroundColor: Colors.silver}} />
                </Col>
                <Col size={11}>
                  <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>GTBank</Text>
                </Col>
              </Row>
            </Col>

          </Row>
        </Grid>

        <List>
          <ListItem itemHeader first>
            <Text style={{fontSize: 16, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Portfolio Details</Text>
          </ListItem>
          <ListItem>
            <Body>
            <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Stock Value</Text>
            </Body>
            <Right>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>1,200</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Availble Cash</Text>
            </Body>
            <Right>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>1,200</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Body>
            <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Total Value</Text>
            </Body>
            <Right>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>1,200</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Body>
            <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Total Transaction</Text>
            </Body>
            <Right>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>12</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Body>
            <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Positive Transaction</Text>
            </Body>
            <Right>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>12</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Body>
            <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>Negative Transaction</Text>
            </Body>
            <Right>
              <Text style={{fontSize: 15, color: Colors.silver, fontFamily: Fonts.type.raleRegular, marginRight: 3}}>0</Text>
            </Right>
          </ListItem>


        </List>

      </View>
    )
  }
}
