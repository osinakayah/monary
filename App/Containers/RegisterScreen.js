import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Header, Grid, Row, Col, Item, Input, Icon, Label, Left, Right, Body, Title, Button, Text } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterScreenStyle'
import {Colors, Images, Metrics, Fonts} from "../Themes";

class RegisterScreen extends Component {

  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: ''
    }
  }
  render () {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: Colors.primary, display: 'none'}} androidStatusBarColor={ Colors.primaryDark}>
          <Left/>
          <Body><Title>Register</Title></Body>
          <Right/>
        </Header>
        <Content padder>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
            <Text style={{color: Colors.silver, textAlign: 'center', marginTop: Metrics.baseMargin, fontSize: 24}}>Monary</Text>
          </View>
          <View style={{marginLeft: Metrics.section, marginRight: Metrics.section, marginTop: Metrics.section}}>
            <Grid>
              <Row style={{margin: Metrics.marginVertical}}>
                <Col size={5}>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>Last Name</Label>
                    <Input style={{color: Colors.silver}} onChangeText={lastName => this.setState({lastName})} value={this.state.lastName} />
                  </Item>
                </Col>
                <Col size={1}/>
                <Col size={5}>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>First Name</Label>
                    <Input style={{color: Colors.silver}} onChangeText={firstName => this.setState({firstName})} value={this.state.firstName} />
                  </Item>
                </Col>
              </Row>
              <Row style={{margin: Metrics.marginVertical}}>
                <Col>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>Phone Number</Label>
                    <Input style={{color: Colors.silver}} onChangeText={lastName => this.setState({lastName})} value={this.state.lastName} />
                  </Item>
                </Col>
              </Row>

              <Row style={{margin: Metrics.marginVertical}}>
                <Col>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>Email</Label>
                    <Input style={{color: Colors.silver}} onChangeText={lastName => this.setState({lastName})} value={this.state.lastName} />
                  </Item>
                </Col>
              </Row>

              <Row style={{margin: Metrics.marginVertical}}>
                <Col size={5}>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>6 Digit Pin</Label>
                    <Input style={{color: Colors.silver}} onChangeText={lastName => this.setState({lastName})} value={this.state.lastName} />
                  </Item>
                </Col>
                <Col size={1}/>
                <Col size={5}>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>Confirm 6 Digit Pin</Label>
                    <Input style={{color: Colors.silver}} onChangeText={firstName => this.setState({firstName})} value={this.state.firstName} />
                  </Item>
                </Col>
              </Row>


              <Row style={{marginTop: Metrics.section}}>
                <Col>
                  <Button bordered light block rounded onPress={() => {this.props.navigation.navigate('HomeScreen')}} ><Text>Go</Text></Button>
                  <Button onPress={() => {this.props.navigation.navigate('LoginScreen')}} transparent block><Text style={{fontFamily: Fonts.type.base, color: Colors.silver}} uppercase={false} >Already Have an Account ?</Text></Button>

                </Col>
              </Row>



            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
