import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BuyStockScreenStyle'
import { Container, Content, Header, Picker, Button, Body, Left, Right, Icon, Title, Subtitle } from 'native-base'
import { Form, Input, Label, Item, Grid, Col, Row } from 'native-base'
import {Colors, Fonts} from "../Themes";


class BuyStockScreen extends Component {

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
            <Title style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver}}>Buy Stock</Title>
            <Subtitle style={{fontFamily: Fonts.type.light, color: Colors.silver, fontSize: 13}}>Alphabet Company PLC</Subtitle>
          </Body>
          <Right></Right>
        </Header>
        <Content padder>
          <Form>
            <Item picker>

              <Picker
                style={{color: Colors.silver}}
                mode="dialog"
                prompt='Select Order Type'
                //style={{ width: undefined }}
                placeholder="Select Order type"
                placeholderStyle={{ color: Colors.silver }}
                placeholderIconColor={Colors.silver}
              >
                <Picker.Item label="Market" value="key0" />
                <Picker.Item label="Limit" value="key1" />
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label style={{color: Colors.silver}}>Stock Price</Label>
              <Input editable={false} style={{color: Colors.silver}} value='129'/>
            </Item>

            <Item fixedLabel>
              <Label style={{color: Colors.silver}}>Quantity</Label>
              <Input style={{color: Colors.silver}} />
            </Item>

            <Item fixedLabel >
              <Label style={{color: Colors.silver}}>Limit</Label>
              <Input style={{color: Colors.silver}}/>
            </Item>

            <Item fixedLabel>
              <Label style={{color: Colors.silver}}>Available Funds</Label>
              <Input editable={false} style={{color: Colors.silver}} value='129,000'/>
            </Item>

            <Item fixedLabel>
              <Label style={{color: Colors.silver}}>Buying Capacity</Label>
              <Input editable={false} style={{color: Colors.silver}} value='129'/>
            </Item>

          </Form>

          <Grid>
            <Row>
              <Col>
                <Text>Order Type</Text>
              </Col>
              <Col>
                <Picker
                  note
                  mode="dropdown"
                  style={{ width: 120 }}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Col>
            </Row>
          </Grid>
          <Button bordered light block rounded ><Text style={{color: Colors.silver}}>Buy</Text></Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(BuyStockScreen)
