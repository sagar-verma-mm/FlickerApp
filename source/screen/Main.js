import React , { useCallback } from 'react';
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import { RenderList } from '../components';
import { getListItem } from '../networking/getListItem';
import {normalize} from '../constants'
import { debounce } from "lodash";
// import Toast from 'react-native-simple-toast';

export const Main = (props) => {
  const [value, setValue] = React.useState('')
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getList  = (value) => {
    if(value){
      setLoading(true)
      getListItem({text: value}).then((response)=>{
        if(response?.data?.stat === 'fail'){
          // Toast.showWithGravity(response?.data?.message, Toast.LONG, Toast.BOTTOM);
        }
        setData(response?.data?.photos?.photo??[])
        setLoading(false)
    }).catch(e => {
        setLoading(false)
        // Toast.showWithGravity('Something went wrong', Toast.LONG, Toast.BOTTOM);
    })
  }
  }
  const handler = useCallback(debounce(getList, 400), []);

  React.useEffect(()=>{
    handler(value);
  },[value])

    return (
        <View style={styles.container}>
          <TextInput 
            value={value}
            onChangeText={setValue}
            style={styles.textInput}
            placeholder={'Search'}
            placeholderTextColor={'black'}
          />
          {loading && <ActivityIndicator style={styles.loader} size={'large'}/>}
          <RenderList
            data={data}
            onClick={(item)=>props.navigation.navigate('ShowDetailView', {item})}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: normalize(16),
    paddingTop: normalize(24),
  },
  textInput: {
    color: 'black', 
    backgroundColor: 'gray',
    marginBottom: normalize(16),
  },
  loader: {
    marginBottom: normalize(16)
  }
});