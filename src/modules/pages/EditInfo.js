import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions, ScrollView, View, Button, TextInput, ImageBackground } from 'react-native'
import { Block, Text, Input, theme } from 'galio-framework'

import Header from '../components/Header'
import materialTheme from '../../constants/Theme'
import * as MainServices from '../../services/mainService'


const { width, height } = Dimensions.get('screen')

export default function EditInfo({ navigation, route })
{

  const [data, setData] = useState(route.params.data)
  const area = data.meiwaku.area_code
  const city = data.meiwaku.city_code
  const number = data.meiwaku.telephone_numbers
  // useEffect(() =>
  // {
  //   MainServices.getTelephoneInfo({ area, city, number }).then(result =>
  //   {
  //     if (result.data.key === 'nai')
  //     {

  //     } else
  //     {
  //       setData(result.data)
  //     }
  //   })
  // }, [])

  const plus = () =>
  {
    // const temp = { ...data }
    // temp.meiwaku.plus += 1
    // setData(temp)
    MainServices.spamPlus({ area, city, number }).then(result =>
    {
      console.log(result.data, '===========')
      const temp = { ...data }
      temp.meiwaku = result.data
      setData(temp)
    })
  }

  const minus = () =>
  {
    MainServices.spamMinus({ area, city, number }).then(result =>
    {
      const temp = { ...data }
      temp.meiwaku = result.data
      setData(temp)
    })
  }

  const saveInfo = () =>
  {
    const token = '03AGdBq25YlJbRQXNse60GjUvZjejyXi-WAkiEkRB_3rwfi_QB-Z5rBgmGGoZ28U4LUpHzUFpjttkxf88QR45Duh-rAaSrSltuhQGKOYKtqbyY997i0JM9adQeu-LhXkR0MvdpgdwnTQdW_KBTKKz0Tep_0ERJgVzgM5qvtXFS6VG-4MyV4d50azoRVepeLTu8Ex0F1qcTZsTxTPmWyMn3RWDuxfmNURAWCsvcU6nfC2dzAMi9cYXzvwD7eYAzSRIRU-_G6SjPAKaDvFL6ligfWugAqS2qAkOgB82xFSFUxCZO2gYqGKC8v8LkdloiQFiyhOhQ5xMLpjWV0bzf2jzpzDJiQqeCu9gyBHSoiSksEUSGo-ZuMUWrnWWLO5wglF9Jz-aveBFn6JQvDQJOI1c5DC8C9toEuJ1K0cmJG53-lJEwoJugz1HlSnVs6gNGUyZqH020V4c5_RPU'
    const temp = { ...data }
    temp.place['recaptcha-token'] = token
    setData(temp)
    MainServices.SaveInfo(data.place, token).then(result =>
    {
      console.log(result.data, '-------------')
    })
  }

  const inputChange = (text, name) =>
  {
    var temp = { ...data }
    switch (name)
    {
      case 'company':
        temp.place.company = text
        break;
      case 'ghoshu':
        temp.place.ghoshu = text
        break;
      case 'jusho':
        temp.place.jusho = text
        break;
      case 'moyorieki':
        temp.place.moyorieki = text
        break;
      case 'access':
        temp.place.access = text
        break;
      case 'site':
        temp.place.site = text
        break;
      case 'jigyo_naoyo':
        temp.place.jigyo_naoyo = text
        break;

      default:
        break;
    }
    setData(temp)
  }

  return (
    <>
      <Header title={'電話番号入力情報'} move='App' navigation={navigation}></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex style={styles.home}>
          <Text style={styles.label}>電話番号</Text>
          <View style={{ flex: 1 }}>
            <View style={styles.row}>
              <Text style={styles.button}>{data.meiwaku.area_code}</Text>
              <Text style={styles.button}>{data.meiwaku.city_code}</Text>
              <Text style={styles.button}>{data.meiwaku.telephone_numbers}</Text>
            </View>
          </View>
          <Text style={styles.label}>地域</Text>
          <Input
            color={'black'}
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.area.ma}
          ></Input>
          <Text style={styles.label}>番号種別</Text>
          <Input
            color={'black'}
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.area.number_kukaku_code}
          ></Input>
          <Text style={styles.label}>回線提供</Text>
          <Input
            color={'black'}
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.area.company}
          ></Input>
          <View style={{ flex: 1, marginBottom: theme.SIZES.BASE / 2 }}>
            <View style={styles.row}>
              <View style={{ flexGrow: 3 }}>
                <Text>アクセス数</Text>
              </View>
              <View style={[styles.row, { flexGrow: 3 }]}>
                <Text>安全性</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: materialTheme.COLORS.SUCCESS }}>{data.meiwaku.plus}</Text>
              </View>
              <View style={{ flexGrow: 4, marginRight: theme.SIZES.BASE * 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: materialTheme.COLORS.ERROR }}>{data.meiwaku.minus}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginBottom: theme.SIZES.BASE * 2 }}>
            <View style={styles.row}>
              <Text style={{ color: 'black', width: theme.SIZES.BASE * 5, fontSize: 17 }}>{data.val3}</Text>
              <Text style={[styles.button1, { backgroundColor: materialTheme.COLORS.SUCCESS }]} onPress={() => plus()}>迷惑電話じゃない！</Text>
              <Text style={[styles.button1, { backgroundColor: materialTheme.COLORS.ERROR }]} onPress={() => minus()}>迷惑電話だ！</Text>
            </View>
          </View>
          <Input
            color={'black'}
            placeholder='事業者名(必須)'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.place.company}
            onChangeText={(text) => inputChange(text, 'company')}
          ></Input>
          <Input
            color={'black'}
            placeholder='業種'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.place.ghoshu}
            onChangeText={(text) => inputChange(text, 'ghoshu')}
          ></Input>
          <Input
            color={'black'}
            placeholder='住所'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.place.jusho}
            onChangeText={(text) => inputChange(text, 'jusho')}
          ></Input>
          <Input
            color={'black'}
            placeholder='最寄駅'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.place.moyorieki}
            onChangeText={(text) => inputChange(text, 'moyorieki')}
          ></Input>
          <Input
            color={'black'}
            placeholder='アクセス'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.place.access}
            onChangeText={(text) => inputChange(text, 'access')}
          ></Input>
          <Input
            color={'black'}
            placeholder='公式サイト'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={styles.input}
            value={data.place.site}
            onChangeText={(text) => inputChange(text, 'site')}
          ></Input>
          <TextInput
            numberOfLines={4}
            multiline={true}
            color={'black'}
            placeholder='事業内容'
            placeholderTextColor={materialTheme.COLORS.MUTED}
            style={[styles.input, { padding: theme.SIZES.BASE }]}
            value={data.place.jigyo_naoyo}
            onChangeText={(text) => inputChange(text, 'jigyo_naoyo')}
          ></TextInput>
          <Text
            style={{ fontSize: 17, color: materialTheme.COLORS.ERROR, marginTop: theme.SIZES.BASE }}
            onPress={() => navigation.navigate('EditComment', { comments: data.com.data })}
          >コメントログビューア</Text>
          <Text style={[styles.saveButton]} onPress={() => saveInfo()}>保存</Text>
        </Block>
      </ScrollView>
    </>

  )
}

const styles = StyleSheet.create({
  home: {
    width: width,
    padding: theme.SIZES.BASE
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  label: {
    fontSize: 13,
    marginBottom: theme.SIZES.BASE / 2,
    marginTop: theme.SIZES.BASE
  },

  button: {
    // width: width / 4,
    color: 'black',
    borderRadius: 30,
    // elevation: 8,
    paddingVertical: theme.SIZES.BASE / 1.4,
    paddingHorizontal: theme.SIZES.BASE * 2,
    backgroundColor: materialTheme.COLORS.DEFAULT,
  },

  button1: {
    // width: width / 4,
    color: 'white',
    borderRadius: 50,
    // elevation: 8,
    // backgroundColor: materialTheme.COLORS.DEFAULT,
    paddingVertical: theme.SIZES.BASE / 1.4,
    paddingHorizontal: theme.SIZES.BASE / 1.5
  },

  saveButton: {
    color: 'white',
    borderRadius: 50,
    // elevation: 8,
    marginTop: theme.SIZES.BASE,
    textAlign: 'center',
    backgroundColor: materialTheme.COLORS.PRIMARY,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2
  },

  input: {
    borderRadius: 30,
    // borderColor: 'transparent',
    borderColor: materialTheme.COLORS.INPUT,
    backgroundColor: materialTheme.COLORS.DEFAULT,
    color: 'black',
  },

  rowinput: {
    width: '50%',
    borderRadius: 30,
    // borderColor: 'transparent',
    borderColor: materialTheme.COLORS.INPUT,
    backgroundColor: materialTheme.COLORS.DEFAULT,
    color: 'black',
  }


})
