import { View, StyleSheet } from 'react-native'
import React from 'react'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'
import Text from '../components/Text/Text'

export default function PlanetSection({title, value}) {
  return (
    <View style={styles.planetSection}>
      <Text preset='small' style={{textTransform: 'uppercase'}}>{title}</Text>
      <Text preset='h2'>{value}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
        
    }
})