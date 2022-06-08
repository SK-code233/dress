import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons, EvilIcons, Feather, AntDesign } from '@expo/vector-icons'

const Women = () => {
  return (
    <View style={styles.main}>

      <View style={styles.top}></View>

      <View style={styles.icons}>
        {/* ICONS */}
        <View style={styles.iconA}>
          <AntDesign name="arrowleft" size={17} color="black" />
        </View>
        <View style={styles.iconB}>
          <Feather name="shopping-cart" size={16} color="black" />
        </View>
      </View>
    </View>
  )
}

export default Women

const styles = StyleSheet.create({
  
  main: {
    // backgroundColor: '#fffdfc',
    paddingTop: 10,
    marginTop: 50,
},

top: {
    // flex: 1,
},

icons: {
  // flex: 4,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 15,
  height: 40,
  // paddingRight: 10,
  marginBottom: 30,
},

iconA: {
// flex: 2, 
alignItems: 'center',
justifyContent: 'center',
width: 40,
height: 40,
borderRadius: 20,
// borderWidth: 1,.
// borderColor: '#9269bd',
backgroundColor: 'white',
color: '#9269bd',
},

iconB: {
  // flex: 2, 
alignItems: 'center',
justifyContent: 'center',
width: 40,
height: 40,
borderRadius: 20,
// borderWidth: 1,
// borderColor: '#9269bd',
backgroundColor: 'white',
color: '#9269bd',
    },

})

// import { Rating, AirbnbRating } from 'react-native-ratings';

// const WATER_IMAGE = require('./water.png')

// ratingCompleted(rating) {
//   console.log("Rating is: " + rating)
// }

// <AirbnbRating />

// <AirbnbRating
//   count={11}
//   reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
//   defaultRating={11}
//   size={20}
// />

// <Rating
//   showRating
//   onFinishRating={this.ratingCompleted}
//   style={{ paddingVertical: 10 }}
// />

// <Rating
//   type='heart'
//   ratingCount={3}
//   imageSize={60}
//   showRating
//   onFinishRating={this.ratingCompleted}
// />

// <Rating
//   type='custom'
//   ratingImage={WATER_IMAGE}
//   ratingColor='#3498db'
//   ratingBackgroundColor='#c8c7c8'
//   ratingCount={10}
//   imageSize={30}
//   onFinishRating={this.ratingCompleted}
//   style={{ paddingVertical: 10 }}
// />