// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// export default class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 3970
//         }
//     }

//     increment = () => {
//         this.setState(p => {
//             return { count: p.count + 50 }
//         })
//     }

//     increment2 = () => {
//         this.setState(p => {
//             return { count: p.count + 20 }
//         })
//     }

//     decrement = () => {
//         this.setState(p => {
//             return { count: p.count - 50 }
//         })
//     }

//     render() {
//         return (
//             <View style={styles.container3}>
//                 <View style={styles.banner}>
//                     <Image style={styles.miniLogo2} source={require('./assets/logoGreen.png')} />
//                     <Text style={styles.point}>Points</Text>
//                     <Text style={styles.text2}>Here are all your points. Keep it going for a reward!</Text>
//                 </View>

//                 <Text style={styles.largeText}>{this.state.count}</Text>
//                 <TouchableOpacity onPress={this.increment} style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You brought a reuseable straw!</Text>
//                     <Text style={styles.text6}>Points: 50</Text>
//                     <Text style={styles.text7}>Tap to claim points reward!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={this.increment2} style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You didn't drive this week!</Text>
//                     <Text style={styles.text6}>Points: 20</Text>
//                     <Text style={styles.text7}>Tap to claim points reward!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You took the bus!</Text>
//                     <Text style={styles.text6}>Points: CLAIMED!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You didn't drive this week!</Text>
//                     <Text style={styles.text6}>Points: CLAIMED!</Text>
//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }
// /* <TouchableOpacity onPress={this.decrement} style={styles.largeButton}>
//                     <Text style={{ color: "black", fontSize: 10 }}>Decrement</Text>
//                 </TouchableOpacity> */

// const styles = StyleSheet.create({
//     container3: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },

//     banner: {
//         flexDirection: 'row',
//         backgroundColor: "#80A87D",
//         width: '100%',
//         height: '22%',
//         justifyContent: 'space-evenly',
//         bottom: 50,
//        },
    
//        point: {
//         fontSize: 35,
//         color: 'white',
//         fontFamily: 'Comfortaa_400Regular',
//         top: 65,
//         left: 30,
//       },
    
//       miniLogo2: {
//         width: 40,
//         height: 60,
//         top: 20,
//         left: 210,
//       },
    
//       text2: {
//         fontSize: 15,
//         color: 'white',
//         top: 110,
//         right: 53,
//       },

//       text3: {
//         fontSize: 70,
//         color: "#80A87D",
//         bottom: 35,
//         fontWeight: "bold",
//       },

//     largeText: {
//         fontSize: 70,
//         marginBottom: 10,
//         color: "#80A87D",
//         fontWeight: "bold",
//     },
//     largeButton: {
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#fff",
//         width: 70,
//         height: 30,
//         margin: 10,
//         borderWidth: 0,
//         borderColor: "grey",
//         borderStyle: "solid",
//         borderRadius: 10,
//         shadowColor: "#000",
//         elevation: 5,
//     },

//     box: {
//         backgroundColor: 'white',
//         width: 321,
//         height: 70,
//         borderRadius: 10,
//         marginBottom: 12,
//         shadowColor: "#171717",
// shadowOffset: {
// 	width: 0,
// 	height: 4,
// },
// shadowOpacity: 0.30,
// shadowRadius: 4.65,

// elevation: 8,
//       },

      
    
//       text5:{
//         color: "#80A87D", 
//         fontWeight:"bold",
//         fontSize: 20,
//         paddingTop: 10,
//         alignSelf: 'center',
//       },
    
//       text6:{
//         color: "black", 
//         fontSize: 20,
//         paddingBottom: 10,
//         alignSelf: 'center',
//         fontWeight: "bold",
//       },

//       text7:{
//         color: "black", 
//         fontSize: 10,
//         bottom: 10,
//         alignSelf: 'center',
//       },
// });



// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// export default class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 3970,
//             strawClicked: false,
//             driveClicked: false,
//             busClicked: false,
//         }
//     }

//     increment = () => {
//         this.setState(p => {
//             return { count: p.count + 50 }
//         })
//     }

//     increment2 = () => {
//         this.setState(p => {
//             return { count: p.count + 20 }
//         })
//     }

//     decrement = () => {
//         this.setState(p => {
//             return { count: p.count - 50 }
//         })
//     }

//     handleStrawClick = () => {
//         if (!this.state.strawClicked) {
//             this.setState(p => ({
//                 count: p.count + 50,
//                 strawClicked: true,
//             }));
//         }
//     }

//     handleDriveClick = () => {
//         if (!this.state.driveClicked) {
//             this.setState(p => ({
//                 count: p.count + 20,
//                 driveClicked: true,
//             }));
//         }
//     }

//     handleBusClick = () => {
//         if (!this.state.busClicked) {
//             this.setState(p => ({
//                 count: p.count + 10,
//                 busClicked: true,
//             }));
//         }
//     }

//     render() {
//         return (
//             <View style={styles.container3}>
//                 <View style={styles.banner}>
//                     <Image style={styles.miniLogo2} source={require('./assets/logoGreen.png')} />
//                     <Text style={styles.point}>Points</Text>
//                     <Text style={styles.text2}>Here are all your points. Keep it going for a reward!</Text>
//                 </View>

//                 <Text style={styles.largeText}>{this.state.count}</Text>
//                 <TouchableOpacity onPress={this.handleStrawClick} style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You brought a reuseable straw!</Text>
//                     <Text style={styles.text6}>{this.state.strawClicked ? 'Points: CLAIMED!' : 'Points: 50'}</Text>
//                     <Text style={styles.text7}>Tap to claim points reward!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={this.handleDriveClick} style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You didn't drive this week!</Text>
//                     <Text style={styles.text6}>{this.state.driveClicked ? 'Points: CLAIMED!' : 'Points: 20'}</Text>
//                     <Text style={styles.text7}>Tap to claim points reward!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={this.handleBusClick} style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You took the bus!</Text>
//                     <Text style={styles.text6}>{this.state.busClicked ? 'Points: CLAIMED!' : 'Points: 10'}</Text>
//                     <Text style={styles.text7}>Tap to claim points reward!</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={[styles.box, styles.elevation]}>
//                     <Text style={styles.text5}>You didn't drive this week!</Text>
//                     <Text style={styles.text6}>Points: CLAIMED!</Text>
//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container3: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },

//     banner: {
//         flexDirection: 'row',
//         backgroundColor: "#80A87D",
//         width: '100%',
//         height: '22%',
//         justifyContent: 'space-evenly',
//         bottom: 50,
//        },
    
//        point: {
//         fontSize: 35,
//         color: 'white',
//         fontFamily: 'Comfortaa_400Regular',
//         top: 65,
//         left: 30,
//       },
    
//       miniLogo2: {
//         width: 40,
//         height: 60,
//         top: 20,
//         left: 210,
//       },
    
//       text2: {
//         fontSize: 15,
//         color: 'white',
//         top: 110,
//         right: 53,
//       },

//       text3: {
//         fontSize: 70,
//         color: "#80A87D",
//         bottom: 35,
//         fontWeight: "bold",
//       },

//     largeText: {
//         fontSize: 70,
//         marginBottom: 10,
//         color: "#80A87D",
//         fontWeight: "bold",
//     },
//     largeButton: {
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#fff",
//         width: 70,
//         height: 30,
//         margin: 10,
//         borderWidth: 0,
//         borderColor: "grey",
//         borderStyle: "solid",
//         borderRadius: 10,
//         shadowColor: "#000",
//         elevation: 5,
//     },

//     box: {
//         backgroundColor: 'white',
//         width: 321,
//         height: 70,
//         borderRadius: 10,
//         marginBottom: 12,
//         shadowColor: "#171717",
// shadowOffset: {
// 	width: 0,
// 	height: 4,
// },
// shadowOpacity: 0.30,
// shadowRadius: 4.65,

// elevation: 8,
//       },

      
    
//       text5:{
//         color: "#80A87D", 
//         fontWeight:"bold",
//         fontSize: 20,
//         paddingTop: 10,
//         alignSelf: 'center',
//       },
    
//       text6:{
//         color: "black", 
//         fontSize: 20,
//         paddingBottom: 10,
//         alignSelf: 'center',
//         fontWeight: "bold",
//       },

//       text7:{
//         color: "black", 
//         fontSize: 10,
//         bottom: 10,
//         alignSelf: 'center',
//       },
// });

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 3970,
            strawClicked: false,
            driveClicked: false,
            busClicked: false,
        }
    }

    increment = () => {
        this.setState(p => {
            return { count: p.count + 50 }
        })
    }

    increment2 = () => {
        this.setState(p => {
            return { count: p.count + 20 }
        })
    }

    decrement = () => {
        this.setState(p => {
            return { count: p.count - 50 }
        })
    }

    handleStrawClick = () => {
        if (!this.state.strawClicked) {
            this.setState(p => ({
                count: p.count + 50,
                strawClicked: true,
            }));
        }
    }

    handleDriveClick = () => {
        if (!this.state.driveClicked) {
            this.setState(p => ({
                count: p.count + 20,
                driveClicked: true,
            }));
        }
    }

    handleBusClick = () => {
        if (!this.state.busClicked) {
            this.setState(p => ({
                count: p.count + 10,
                busClicked: true,
            }));
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container3}>
                <View style={styles.banner}>
                    <Image style={styles.miniLogo2} source={require('./assets/logoGreen.png')} />
                    <Text style={styles.point}>Points</Text>
                    <Text style={styles.text2}>Here are all your points. Keep it going for a reward!</Text>
                </View>

                <Text style={styles.largeText}>{this.state.count}</Text>
                <TouchableOpacity onPress={this.handleStrawClick} style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>You brought a reusable straw!</Text>
                    <Text style={styles.text6}>{this.state.strawClicked ? 'Points: CLAIMED!' : 'Points: 50'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleDriveClick} style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>You didn't drive this week!</Text>
                    <Text style={styles.text6}>{this.state.driveClicked ? 'Points: CLAIMED!' : 'Points: 20'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleBusClick} style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>You took the bus!</Text>
                    <Text style={styles.text6}>{this.state.busClicked ? 'Points: CLAIMED!' : 'Points: 10'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>Component 1</Text>
                    <Text style={styles.text6}>{this.state.strawClicked ? 'Points: CLAIMED!' : 'Points: 50'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>Component 2</Text>
                    <Text style={styles.text6}>{this.state.driveClicked ? 'Points: CLAIMED!' : 'Points: 20'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>Component 3</Text>
                    <Text style={styles.text6}>{this.state.busClicked ? 'Points: CLAIMED!' : 'Points: 10'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box, styles.elevation]}>
                    <Text style={styles.text5}>Component 4</Text>
                    <Text style={styles.text6}>{this.state.strawClicked ? 'Points: CLAIMED!' : 'Points: 50'}</Text>
                    <Text style={styles.text7}>Tap to claim points reward!</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container3: {
        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },

    banner: {
        flexDirection: 'row',
        backgroundColor: "#80A87D",
        width: '100%',
        height: '22%',
        justifyContent: 'space-evenly',
        
       },
    
       point: {
        fontSize: 35,
        color: 'white',
        fontFamily: 'Comfortaa_400Regular',
        top: 65,
        left: 30,
      },
    
      miniLogo2: {
        width: 40,
        height: 60,
        top: 20,
        left: 210,
      },
    
      text2: {
        fontSize: 15,
        color: 'white',
        top: 110,
        right: 53,
      },

      text3: {
        fontSize: 70,
        color: "#80A87D",
        bottom: 35,
        fontWeight: "bold",
      },

    largeText: {
        fontSize: 70,
        marginBottom: 10,
        color: "#80A87D",
        fontWeight: "bold",
    },

    box: {
        backgroundColor: 'white',
        width: 321,
        height: 70,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: "#171717",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
      },

      
    
      text5:{
        color: "#80A87D", 
        fontWeight:"bold",
        fontSize: 20,
        paddingTop: 10,
        alignSelf: 'center',
      },
    
      text6:{
        color: "black", 
        fontSize: 20,
        paddingBottom: 10,
        alignSelf: 'center',
        fontWeight: "bold",
      },

      text7:{
        color: "black", 
        fontSize: 10,
        bottom: 10,
        alignSelf: 'center',
      },
});

