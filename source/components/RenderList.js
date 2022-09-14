import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import FastImage from 'react-native-fast-image'
import {normalize} from '../constants'

export const RenderList = ({data, onClick}) => {

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => {
        onClick && onClick(item)
        }} 
        style={styles.card}
        activeOpacity={0.8}>
          <Text style={styles.title}>{item?.title?item?.title:'Image'}</Text>
          {/* <FastImage
            style={{ width: normalize(250), height: normalize(100) }}
            source={{
                uri: `https://live.staticflickr.com/${item?.server}/${item?.id}_${item?.secret}_w.jpg`,
            }}
            resizeMode={FastImage.resizeMode.contain}
          /> */}
          <Image
            style={{ width: normalize(250), height: normalize(100) }}
            source={{
                uri: `https://live.staticflickr.com/${item?.server}/${item?.id}_${item?.secret}_w.jpg`,
            }}
          />
      </TouchableOpacity>
    )
    return (
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  title: {
    color: 'black', 
    marginTop: normalize(16),
    marginBottom: normalize(8),
  },
  card: {
    borderRadius: normalize(5),
    elevation: 1,
    marginTop: normalize(2),
    paddingBottom: normalize(18),
    paddingHorizontal: normalize(16),
    marginVertical: normalize(12),
  }
});