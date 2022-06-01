import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, EvilIcons, Feather, AntDesign } from '@expo/vector-icons'

// import { Rating, AirbnbRating } from 'react-native-star-rating'
// import { StarReview } from 'react-native-star-rating';
// import { AirbnbRating } from 'react-native-ratings'

const Men = () => {

    const dressMen = [
        {
            id: 1,
            image: require('../assets/mensmall.png') ,
            name: 'Bike Jacket Soft Pattern',
            price: 99,
            star: 'FIVE STARS',
        },
        {
            id: 2,
            name: 'Men Stretch Gym Fit',
            price: 85,
            star: 'FIVE STARS',
            image: require('../assets/pr.png') ,
        }
                // {
        //     id: 3,
        //     name: 'Compression Running Fit',
        //     price: 120,
        //     star: 'FIVE STARS',
        //     image: require('../assets/mensmallb.png') 
        // },
        // {
        //     id: 4,
        //     name: 'K',
        //     price: 98,
        //     star: 'FIVE STARS',
        //     image: require('../assets/productb.png') 
        // },
        // {
        //     id: 5,
        //     name: 'i',
        //     price: 118,
        //     star: 'FIVE STARS',
        //     image: require('../assets/mensmalld.png') 
        // },
        // {
        //     id: 6,
        //     name: 'N',
        //     price: 150,
        //     star: 'FIVE STARS',
        //     image: require('../assets/mensmalla.png'),
        // },
        // {
        //     id: 7,
        //     name: 'KL',
        //     price: 110,
        //     star: 'FIVE STARS',
        //     image: require('../assets/mensmallf.png') 
        // },


    ];

    const [text, onChangeText] = React.useState('');


    const eachDress = ({ item }) => (
        <View style={styles.item}>

            <View style={styles.imageContain}>
                <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.name}>{item.name}</Text>
                {/* <Text style={styles.star}>{item.star}</Text> */}
                {/* <AirbnbRating style={styles.star} /> */}
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </View>
    )


    itemSeparator = () => {
        return <View style={styles.separator} />
    }


    return (
        <View style={styles.main}>

            <View style={styles.top}></View>

            <View style={styles.icons}>
                {/* ICONS */}
                <View style={styles.iconA}>
                <AntDesign name="arrowleft" size={17} color="black" />
                </View>
                <View style={styles.iconB}>
                <Feather name="shopping-cart" size={16} color="black" /></View>
            </View>


            <View style={styles.two}>
                {/* TEXT */}
                <Text style={styles.headTxt}>Men's Gym Wear </Text>

                {/* SEARCH */}
                <View style={styles.input}>
                    {/* <Ionicons name="ios-search" size={24} color="#004cc7" /> */}
                    <TextInput
                        style={styles.txtInput}
                        onChangeText={onChangeText}
                        placeholder="Search Wear"
                        value={text} />
                    <TouchableOpacity style={styles.filter}>
                        <Text style={styles.filterTxt}>Filter</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ITEMS */}
            <FlatList
                // ListHeaderComponentStyle={styles.listHeader}
                // ListHeaderComponent={headerComponent}
                data={dressMen}
                renderItem={eachDress}
                ItemSeparatorComponent={itemSeparator}
            // ListEmptyComponent={listEmpty}
            // keyExtractor={ people }
            />

        </View>
    )
}

export default Men

const styles = StyleSheet.create({

    main: {
        // backgroundColor: '#fffdfc',
        paddingTop: 10,
        marginTop: 50,
    },

    top: {
        // flex: 1,
    },

    // one: {
    //     // flex: 1,
    // },

    // two: {
    //     // flex: 2,
    // },

    input: {
        width: 290,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbfeff',
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginVertical: 15,
        marginTop: 15,
        // marginBottom: 5,
    },

    txtInput: {
        fontSize: 14,
        flex: 10,
        paddingHorizontal: 5,
        fontWeight: '600',
    },

    filter: {
        fontSize: 14,
        flex: 2,
        color: '#9269bd',
        // paddingHorizontal: 10,
    },

    filterTxt: {
        fontSize: 12,
        color: '#9269bd',
        fontWeight: '700',
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

    item: {
        // flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

    imageContain: {
        // backgroundColor: '#0f8898',
        // borderRadius: 20,
        height: 110,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        // borderRadius: 20,
        // backgroundColor: '#0ff8f8',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // icon: {
    //     // flex: 4,
    //     // flexDirection: 'row',
    //     // justifyContent: 'space-around',
    //     // paddingRight: 10,
    //     fontSize: 18,
    //     marginTop: 10,
    // },

    headTxt: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 5,
        marginHorizontal: 27,
        // marginVertical: 20,
    },

    text: {
        paddingLeft: 20,
        height: 70,
        width: 200,
        // alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 30,
    },

    name: {
        fontWeight: '700',
        fontSize: 14,
        // color: '#004cc7',
    },

    // container: {
    //   flex: 1,
    // },

    separator: {
        height: 1,
        width: '100%',
        // backgroundColor: '#CCC',
    },

    price: {
        color: '#9269bd',
        fontSize: 15,
        fontWeight: '800',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //   star: {
    //     color: '#708c98',
    //     // fontSize: 14,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: 100,
    //     height: 40,
    //   },
})