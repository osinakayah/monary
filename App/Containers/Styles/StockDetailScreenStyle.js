import { StyleSheet } from 'react-native'
import { ApplicationStyles,Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cardContainer : {
    elevation   : 3,
    flex        : 1,
    margin      : 12,
    padding     : 12,
    borderWidth : 2,
    borderColor : Colors.coal,
    backgroundColor: Colors.coal
  },
  bannerStyle: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/4,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.primary
  },
  gridStyle: {
    //marginTop: 300,
    //position: 'absolute',
    // top: (Metrics.screenHeight / 4) / 2,
    top: 0,
    left: 'auto',
    marginTop: (Metrics.screenHeight / 4) / 2,
    zIndex: 10
  },
})
