import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, EvilIcons, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const Women = () => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>

        {/* <View style={styles.icons}> */}

        <View style={styles.topa}>
          <TouchableOpacity style={styles.iconA}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContain}>
          <Image source={require('../assets/menbig.png')} style={styles.image} />
        </View>

        <View style={styles.iconsB}>

          <TouchableOpacity style={styles.iconB}>
            <Feather name="shopping-cart" size={18} color="#5a54fa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconB}>
            <MaterialCommunityIcons name="heart-outline" size={22} color="#635efe" />
          </TouchableOpacity>

        </View>

        {/* </View> */}
      </View>
      {/* <View style={styles.new}></View> */}

      <View style={styles.middle}>
        <View style={styles.middleA}>
          <Text style={styles.textHead} >Red Bike Jacket</Text>

          <View style={styles.review} >
            <Text style={styles.textRev} > Review  :  </Text>
            <View style={styles.star}>
              <FontAwesome name="star" size={11} color="#f1b308f2" />
              <FontAwesome name="star" size={11} color="#f1b308f2" />
              <FontAwesome name="star" size={11} color="#f1b308f2" />
              <FontAwesome name="star" size={11} color="#f1b308f2" />
              <FontAwesome name="star" size={11} color="#cac9de" />
            </View>
          </View>

          <View style={styles.line}></View>

          <Text style={styles.revPara} >I would put a white bar which would take all of the
          
            width at the bottom. To do so I thought</Text>
        </View>

        <View style={styles.middleB}>
          <Text style={styles.material}>Material : 91% polyester, 9% elastane</Text>
        </View>

        <View style={styles.middleC}>

          <View style={styles.box} >
            <Text>XS</Text>
          </View>

          <View style={styles.box} >
            <Text>S</Text>
          </View>

          <View style={styles.boxM} >
            <Text style={styles.boxTxt}>M</Text>
          </View>

          <View style={styles.box} >
            <Text>L</Text>
          </View>

          <View style={styles.box} >
            <Text>XL</Text>
          </View>

        </View>

      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomA}>
          
        <View style={styles.amo}>
          <Text style={styles.amount}>Total Amount </Text>
          <Text style={styles.price}>$120</Text>
        </View>

        <View>
          <Text style={styles.add}>Add to Cart</Text>
        </View>
      </View>

      </View>

    </View>
  )
}

export default Women

const styles = StyleSheet.create({

  main: {
    // flex: 1,
    marginTop: 60,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
  },

  top: {
    // position: 'absolute',
    // width: 300
    // paddingHorizontal: 10,
    // marginHorizontal: 30,
    flex: 3,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 10,
  },

  middle: {
    flex: 3,
    // marginTop: 50,
    // paddingHorizontal: 26,
  },

  middleA: {
    // flex: 3,
    // marginTop: 50,
    paddingHorizontal: 26,
  },

  middleB: {
    // flex: 3,
    // marginTop: 50,
    paddingHorizontal: 36,
    backgroundColor: '#f8f8fb',
    height: 49,
    justifyContent: 'center',
    marginVertical: 20,
    // padding
    marginLeft: -10,
  },

  middleC: {
    // flex: 3,
    // marginTop: 50,
    paddingHorizontal: 26,
    // marginBottom: 10,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottom: {
    flex: 1.3,
    // width: 390,
    // backgroundColor: 'blue',
    marginHorizontal: 26,
  },

  bottomA: {
    // flex: 1,
    // width: 390,
    height: 80,
    backgroundColor: '#7a7ef7',
    borderRadius: 10,
    // marginHorizontal: 26,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  line: {
    width: 45,
    height: 3.9,
    borderRadius: 2,
    backgroundColor: '#7B82EF',
    marginVertical: 15,
    marginLeft: 4
  },

  material: {
    color: '#7a7ef7',
    fontWeight: '500',
    fontSize: 13,
  },

  // // icons: {
  // //   // flex: 4,
  // //   flexDirection: 'row',
  // //   justifyContent: 'space-evenly',
  // //   // alignItems: 'center',
  // //   marginHorizontal: 15,
  // //   // height: 40,
  // //   // paddingRight: 10,
  // //   // marginBottom: 30,
  // //   // backgroundColor: 'blue',
  // // },

  iconA: {
    // flex: 2, 
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 29,
    // borderWidth: 1,.
    // borderColor: '#9269bd',
    backgroundColor: 'white',
    color: '#9269bd',
    // marginLeft: 15,
    position: 'absolute',
    left: 0,
    // right: -20,
  },

  iconB: {
    // flex: 2, 
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 29,
    // borderWidth: 1,
    // borderColor: '#9269bd',
    backgroundColor: 'white',
    // color: '#9269bd',
    marginRight: 10,
    marginBottom: 5
  },

  topa: {
    // position: 'absolute',
    // width: 300
    // paddingHorizontal: 10,
    // marginHorizontal: 30,
    flex: 3,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },



  top: {
    // position: 'absolute',
    // width: 300
    // paddingHorizontal: 10,
    // marginHorizontal: 30,
    flex: 3,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },


  iconsB: {
    position: 'absolute',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-start',
    left: 299
  },



  imageContain: {
    // backgroundColor: '#0f8898',
    // borderRadius: 20,
    height: 310,
    width: 310,
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'cover',
    // marginLeft: -30,
    // paddingLeft: -10,
    position: 'absolute',
  },

  image: {
    // borderRadius: 20,
    // backgroundColor: '#0ff8f8',
    height: 310,
    width: 315,
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'cover',
  },

  textHead: {
    fontSize: 25,
    fontWeight: 'bold',
  },


  review: {
    flexDirection: 'row',
    marginTop: 6,
  },


  textRev: {
    fontWeight: '700',
    color: '#53535c',
    fontSize: 13,
  },

  revPara: {
    fontWeight: '600',
    color: '#53535c',
    fontSize: 13.5,
  },

  star: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
    // marginTop: 2,
    // marginBottom: 5,
  },

  box: {
    backgroundColor: 'white',
    width: 37,
    height: 41,
    borderRadius: 6,
    // marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxM: {
    color: 'white',
    backgroundColor: '#7a7ef7',
    width: 38,
    height: 41,
    borderRadius: 6,
    // marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  add: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    backgroundColor: '#5257f6',
    width: 110,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  amount: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },

  price: {
    color: 'white',
    fontSize: 27,
    fontWeight: '700',
  },

  boxTxt: {
    color: 'white',
  },

  amo: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
