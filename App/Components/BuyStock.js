import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/BuyStockStyle'
import {Colors} from "../Themes";
import { Picker, Button } from 'native-base'
import { Form, Input, Label, Item} from 'native-base'
import { Grid, Col, Row, Icon } from 'native-base'
export default class BuyStock extends Component {
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
        <Form>
          <Item picker fixedLabel>
            <Label style={{color: Colors.primary}}>Order Type</Label>
            <Picker
              style={{color: Colors.primary}}
              mode="dropdown"
              prompt='Select Order Type'
              //style={{ width: undefined }}
              placeholder="Select Order type"
              placeholderStyle={{ color: Colors.primary }}
              placeholderIconColor={Colors.primary}
            >
              <Picker.Item label="Market" value="key0" />
              <Picker.Item label="Limit" value="key1" />
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label style={{color: Colors.primary}}>Stock Price</Label>
            <Icon type='MaterialCommunityIcons' name='currency-ngn' style={{fontSize: 15}} />
            <Input editable={false} style={{color: Colors.primary}} value='129'/>
          </Item>

          <Item fixedLabel>
            <Label style={{color: Colors.primary}}>Quantity</Label>
            <Input style={{color: Colors.primary}} placeholder='Number of stocks' />
          </Item>

          <Item fixedLabel >
            <Label style={{color: Colors.primary}}>Limit</Label>
            <Icon type='MaterialCommunityIcons' name='currency-ngn' style={{fontSize: 15}} />
            <Input style={{color: Colors.primary}} placeholder='Price Limit'/>
          </Item>

          <Item fixedLabel>
            <Label style={{color: Colors.primary}}>Available Funds</Label>
            <Icon type='MaterialCommunityIcons' name='currency-ngn' style={{fontSize: 15}} />
            <Input editable={false} style={{color: Colors.primary}} value='129,000'/>
          </Item>

          <Item fixedLabel>
            <Label style={{color: Colors.primary}}>Buying Capacity</Label>
            <Input editable={false} style={{color: Colors.primary}} value='129'/>
          </Item>

          <Item fixedLabel>
            <Label style={{color: Colors.primary}}>Estimate</Label>
            <Icon type='MaterialCommunityIcons' name='currency-ngn' style={{fontSize: 15}} />
            <Input editable={false} style={{color: Colors.primary}} value='129'/>
          </Item>

        </Form>
        <Grid style={{marginTop: 12}}>
          <Row>
            <Col>
              <Button block style={{backgroundColor: Colors.colorGain, marginRight: 3 }}><Text style={{color: Colors.silver}} >Buy</Text></Button>
            </Col>
            <Col>
              <Button block style={{backgroundColor: Colors.bloodOrange, marginLeft: 3}}><Text style={{color: Colors.silver}}>Cancel</Text></Button>
            </Col>
          </Row>
        </Grid>

      </View>
    )
  }
}
