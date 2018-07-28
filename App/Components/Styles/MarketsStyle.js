import { StyleSheet } from 'react-native'
import {Colors, Fonts, Metrics} from "../../Themes";

export default StyleSheet.create({
  container: { flex: 1 },
  header: { height: 35, backgroundColor: Colors.coal, padding: Metrics.smallMargin },
  headerText: { textAlign: 'left', color: Colors.silver, fontFamily: Fonts.type.raleEmphasis, fontSize: 13 },
  bodyText: { textAlign: 'left', color: Colors.silver, fontFamily: Fonts.type.light, fontSize: 13 },
  dataWrapper: { marginTop: -1 },
  row: { height: 50, backgroundColor: Colors.charcoal, padding: Metrics.smallMargin }
})
