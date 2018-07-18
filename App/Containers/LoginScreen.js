import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { Container, Content, Header, Grid, Row, Col, Item, Label, Input, Button } from 'native-base'
import {Colors, Fonts, Images, Metrics} from '../Themes'
import { connect } from 'react-redux'
import CodeInput from 'react-native-confirmation-code-input'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
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
        <Header style={{backgroundColor: Colors.primary, display: 'none'}} androidStatusBarColor={ Colors.primaryDark}/>
        <Content padder>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
            <Text style={{fontFamily: Fonts.type.raleEmphasis, color: Colors.silver, textAlign: 'center', marginTop: Metrics.baseMargin, fontSize: 24}}>Monary</Text>
          </View>
          <View style={{marginLeft: Metrics.section, marginRight: Metrics.section, marginTop: Metrics.section}}>
            <Grid>
              <Row style={{margin: Metrics.marginVertical}}>
                <Col>
                  <Item floatingLabel>
                    <Label style={{color: Colors.silver}}>Phone Number</Label>
                    <Input style={{color: Colors.silver}} onChangeText={lastName => this.setState({lastName})} value={this.state.lastName} />
                  </Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <CodeInput
                    codeLength={6}
                    keyboardType='numeric'
                    className='border-b'
                    cellBorderWidth={2}
                    secureTextEntry
                    compareWithCode='123456'
                    activeColor='rgba(256, 256,256, 1)'
                    inactiveColor='rgba(256, 256,256, 1)'
                    inputPosition='center'
                    size={40}
                    onFulfill={(isValid) => {}}
                    // containerStyle={{ marginTop: 30  }}
                    // codeInputStyle={{ borderWidth: 0, height: 40, width: 35 }}
                  />
                </Col>
              </Row>

              <Row style={{marginTop: Metrics.section}}>
                <Col>
                  <Button bordered light block rounded onPress={() => {this.props.navigation.navigate('HomeScreen')}} ><Text style={{fontFamily: Fonts.type.raleRegular, color: Colors.silver}}>Sign In</Text></Button>
                  <Button onPress={() => {this.props.navigation.navigate('RegisterScreen')}} transparent block><Text style={{fontFamily: Fonts.type.raleRegular, color: Colors.silver}} uppercase={false} >Don't Have an Account ?</Text></Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
