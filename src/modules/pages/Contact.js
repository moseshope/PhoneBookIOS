import React, { useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import { Block, Text, Input, theme } from 'galio-framework'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../components/Header'
import materialTheme from '../../constants/Theme'
import * as MainServices from '../../services/mainService'


const { width } = Dimensions.get('screen')

export default function ContactScreen({ navigation })
{
  const [key, setKey] = useState('')
  const [result, setResult] = useState(false)

  const search = () =>
  {
    MainServices.search({ s: key }).then(result =>
    {
      if (result.data.area)
      {
        const area = result.data.area.area_code
        const city = result.data.area.city_code
        const number = result.data.shimoketa
        setResult(false)
        MainServices.getTelephoneInfo({ area, city, number }).then(res =>
        {
          console.log(res.data)
          navigation.navigate('EditInfo', { data: res.data })
        })
      } else
      {
        console.log('No result')
        setResult(true)
      }
    })
  }

  return (
    <>
      <Header title={'電話番号検索'} move='App' navigation={navigation}></Header>
      <Block flex style={styles.home}>
        <Text>検索ワードを入力してください。</Text>

        <View style={{ position: 'relative' }}>
          <Input
            placeholder="電話番号、事務所名"
            color={'black'}
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            onChangeText={(text) => setKey(text)}
          ></Input>
          <Icon style={styles.search} name="search" family="Galio" color='black' size={26} onPress={() => search()} />
        </View>
        {
          result ? (<Text style={{ fontSize: 24 }}>No result</Text>) : null
        }

      </Block>

    </>
  )
}

const styles = StyleSheet.create({
  home: {
    width: width,
    padding: theme.SIZES.BASE
  },

  search: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    top: theme.SIZES.BASE
  },

  input: {
    borderRadius: 30,
    borderColor: materialTheme.COLORS.INPUT,
    backgroundColor: materialTheme.COLORS.DEFAULT,
    color: 'black',
  }

})
