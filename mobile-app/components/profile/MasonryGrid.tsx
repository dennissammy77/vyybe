import MasonryList from '@react-native-seoul/masonry-list'
import React from 'react'
import { StyleSheet } from 'react-native'

type MasonryGridProps<T> = {
  data: T[]
  renderItem: ({ item, i }: { item: T; i: number }) => React.ReactElement
  renderEmptyComponent: () => React.ReactElement
  numColumns?: number
  contentContainerStyle?: object
}

const MasonryGrid = <T,>({
  data,
  renderItem,
  numColumns = 2,
  contentContainerStyle,
  renderEmptyComponent
}: MasonryGridProps<T>) => {
  return (
    <MasonryList
      data={data}
      numColumns={numColumns}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      ListEmptyComponent={renderEmptyComponent}
    />
  )
}

export default MasonryGrid

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 8,
  },
})
