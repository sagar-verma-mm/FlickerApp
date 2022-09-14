import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
// import FastImage from 'react-native-fast-image'
import {normalize} from '../constants'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ShowDetailView = (props) => {

    const {item} = props.route.params
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{item?.title ? item?.title : 'Image'}</Text>
          {/* <FastImage
            style={{ width: windowWidth-normalize(32), height: windowHeight-normalize(200) }}
            source={{
                uri: `https://live.staticflickr.com/${item?.server}/${item?.id}_${item?.secret}_b.jpg`,
            }}
            resizeMode={FastImage.resizeMode.contain}
          /> */}
          <Image
            style={{ width: windowWidth-normalize(32), height: windowHeight-normalize(200) }}
            source={{
                uri: `https://live.staticflickr.com/${item?.server}/${item?.id}_${item?.secret}_b.jpg`,
            }}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: normalize(16) 
  },
  title: {
    color: 'black', 
    marginVertical: normalize(16),
    fontSize: normalize(22),
  }
});