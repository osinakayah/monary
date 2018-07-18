import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.section,
    height: Metrics.images.large,
    width: Metrics.images.large,
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
  },
})
