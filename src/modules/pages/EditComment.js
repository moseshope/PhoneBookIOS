import React, { useState } from 'react'
import { StyleSheet, Dimensions, ScrollView, View, Button, TextInput, ImageBackground } from 'react-native'
import { Block, Text, Input, theme } from 'galio-framework'

import Header from '../components/Header'

import materialTheme from '../../constants/Theme'
import * as MainServices from '../../services/mainService'
import { useNavigationBuilder } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')

export default function EditComment({ navigation, route })
{
  const [comments, setComments] = useState(route.params.comments)

  const plus = (comment) =>
  {
    MainServices.commentPlus({
      id: comment.id,
      area: comment.area_code,
      city: comment.city_code,
      number: comment.telephone_numbers
    }).then(result =>
    {
      setComments(result.data.data)
    })
  }

  const minus = (comment) =>
  {
    MainServices.commentMinus({
      id: comment.id,
      area: comment.area_code,
      city: comment.city_code,
      number: comment.telephone_numbers
    }).then(result =>
    {
      setComments(result.data.data)
    })
  }

  const delReq = (comment) =>
  {
    MainServices.delReq({
      id: comment.id,
      area: comment.area_code,
      city: comment.city_code,
      number: comment.telephone_numbers
    }).then(result =>
    {
      setComments(result.data.data)
    })
  }


  return (
    <>
      <Header title={'コメントログビューア'} move={'EditInfo'} navigation={navigation}></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex style={styles.home}>
          {
            comments.map((comment, index) =>
            (
              <View style={{ marginBottom: theme.SIZES.BASE / 2 }} key={index}>
                <View style={{ flex: 1, }} >
                  <View style={styles.row}>
                    <View style={{ flexGrow: 1, marginRight: theme.SIZES.BASE }}>
                      <Text>&bull;</Text>
                    </View>
                    <View style={{ flexGrow: 10 }} >
                      <Text style={{ fontSize: 15 }}>{comment['comments']}</Text>
                      {/* <Text style={{ color: materialTheme.COLORS.INFO }}>0852 - 24 - 1171</Text> */}
                      <Text> {comment['created_at']}</Text>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.row}>
                    <View style={[styles.row, styles.alignCenter]}>
                      <Text style={[styles.button1, { backgroundColor: materialTheme.COLORS.INFO }]} onPress={() => plus(comment)}>プラス</Text>
                      <Text> :{comment.plus}</Text>
                    </View>
                    <View style={[styles.row, styles.alignCenter]}>
                      <Text style={[styles.button1, { backgroundColor: materialTheme.COLORS.ERROR }]} onPress={() => minus(comment)}>マイナス</Text>
                      <Text> :{comment.minus}</Text>
                    </View>
                    <View style={[styles.row, styles.alignCenter]}>
                      <Text style={[styles.button1, { backgroundColor: materialTheme.COLORS.MUTED }]} onPress={() => delReq(comment)}>削除依頼</Text>
                      <Text> :{comment.sakujo}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
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

  alignCenter: {
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    paddingLeft: theme.SIZES.BASE,
    paddingRight: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE / 2,
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
  },

  label: {
    fontSize: 13,
    marginBottom: theme.SIZES.BASE / 2,
    marginTop: theme.SIZES.BASE
  },

  button: {
    // width: width / 4,
    color: 'black',
    borderRadius: 50,
    // elevation: 8,
    backgroundColor: materialTheme.COLORS.DEFAULT,
    paddingVertical: theme.SIZES.BASE / 1.4,
    paddingHorizontal: theme.SIZES.BASE * 2
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

  input: {
    borderRadius: 30,
    borderColor: materialTheme.COLORS.INPUT,
    backgroundColor: materialTheme.COLORS.DEFAULT,
    color: 'black',
  }


})
