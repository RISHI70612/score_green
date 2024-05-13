import * as React from 'react';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable, Switch, Alert } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold, } from '@expo-google-fonts/comfortaa';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Camera from './Camera';
import Points from './Points';
import earth from './earth';
import leaderboard from './leaderboard'
import news from './news';
import EcoReminder from './EcoReminder'


// //firebase configuration 
// const firebaseConfig = {
//   apiKey: "AIzaSyCaNQPDxXZ32K9VTSt31061OVPJ3bT3y68",
//   authDomain: "ecothon-9ac20.firebaseapp.com",
//   projectId: "ecothon-9ac20",
//   storageBucket: "ecothon-9ac20.appspot.com",
//   messagingSenderId: "934226074203",
//   appId: "1:934226074203:web:436d0540a31dbf18cafd7e",
//   measurementId: "G-NXMRXK8JFJ"
// };
// const app = initializeApp(firebaseConfig);

/* starting page -> this is what the user will first see when they download the app. they can sign up or log in */
function StartingPage({ navigation }){
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}> Green Code</Text>

      <Image style={styles.logo} source={require('./assets/logo.png')} />

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login Page')}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up Page')}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}
/* login page -> the user will enter their email and password to login. this is only required once unless the user logs out of their account */
function LoginPage({ navigation }) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Log In</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

/* signup page -> the user will enter their email and password to sign up */
function SignUpPage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Sign Up</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Enter Your Name Page')}>
      <Text style={styles.loginButtonText2}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}



// // Login page component
// function LoginPage({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Authenticate user with email and password
//       await signInWithEmailAndPassword(firebase.auth(), email, password);
//       console.log('User logged in successfully!');
//       // Navigate to Home Page upon successful login
//       navigation.navigate('Home');
//     } catch (error) {
//       console.error('Login error:', error.message);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.loginTitle}>Log In</Text>

//       <TextInput
//         style={styles.loginInput}
//         placeholder='Email'
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.loginInput}
//         placeholder='Password'
//         secureTextEntry={true}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>LOG IN</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// // Signup page component
// function SignUpPage({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       // Create user with email and password
//       await createUserWithEmailAndPassword(firebase.auth(), email, password);
//       console.log('User created successfully!');
//       // Navigate to Enter Your Name Page upon successful signup
//       navigation.navigate('EnterName');
//     } catch (error) {
//       console.error('Signup error:', error.message);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.loginTitle}>Sign Up</Text>

//       <TextInput
//         style={styles.loginInput}
//         placeholder='Email'
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.loginInput}
//         placeholder='Password'
//         secureTextEntry={true}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
//         <Text style={styles.loginButtonText}>SIGN UP</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

/* enter your name page -> after signing up, the user enter's their name for personalization in the app */
function EnterYourNamePage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Enter Your Name</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Enter your name'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LET'S GO!</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomePage({navigation}) {
  return (
    <View style={styles.container3}>
      
      <Image style={styles.miniLogo} source={require('./assets/logo.png')} />
      <Text style={styles.userName}>Hi Hannah,</Text>
      <Text style={styles.text1}>SCAN THE QR CODE. SAVE THE PLANET!</Text>
      <Image style={styles.background} source={require('./assets/environment.jpg')} />

      <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Camera')}>
      <Entypo name="camera" size={50} color="white" />
      </TouchableOpacity> 

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Leaderboard')}>
          <AntDesign name="Trophy" size={24} color="white" />
          </TouchableOpacity> 
           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points')}>
          <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity> 

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Earth Page')}>
          <AntDesign name="earth" size={24} color="white" />
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
}

function ProfilePage({navigation}) {
  return (
    <View style={styles.container3}>

      <Image style={styles.profile} source={require('./assets/hannah.jpeg')} />
      <Text style={styles.userName1}>jenny</Text>
      <Ionicons style={styles.location} name="location-outline" size={30} color="black" />
      <Text style={styles.text4}>OAKVILLE, ON, CANADA</Text>

      <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('Sign Up Page')}>
      <Text style={styles.loginButtonText2}>EDIT PROFILE</Text>
      </TouchableOpacity>

      {/* <Image style={styles.reminders} source={require('./assets/reminders.png')} /> */}
      <EcoReminder />


      <View style={styles.br}></View>

      <View style={styles.navContainer}>  
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points')}>
          <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('news')}>
          <AntDesign name="Globe" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, error] = useFonts ({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starting Page" component={StartingPage} />
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="Sign Up Page" component={SignUpPage} />
        <Stack.Screen name="Enter Your Name Page" component={EnterYourNamePage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Profile Page" component={ProfilePage} />
        <Stack.Screen name="Earth Page" component={earth} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Points" component={Points} /> 
        <Stack.Screen name="Leaderboard" component={leaderboard} />
        <Stack.Screen name="news" component={news} />
        <Stack.Screen name="EcoReminder" component={EcoReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* STARTING PAGE ---------------------------------*/
  name: {
    fontSize: 40,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 50,
  },

  logo: {
    width: 260,
    height: 300,
    marginBottom: 150,
  },

  loginButton: {
    width: "42%",
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#92B88F",
    position: 'absolute',
    left: 25,
    top: 570,
  },

  loginButtonText: {
    fontWeight: "bold",
    color: '#92B88F',
  },

  signUpButton: {
    width: "42%",
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    position: 'absolute',
    right: 25,
    top: 570,
  },

  signUpButtonText: {
    fontWeight: "bold",
    color: 'white',
  },

  /* LOGIN PAGE -----------------------------*/
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginTitle: {
    fontSize: 30,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 20,
  },

  loginInput: {
    width: "80%",
    backgroundColor: "white",
    borderColor: "black",
    marginBottom: 10,
  },

  loginButton2: {
    width: "80%",
    marginTop: 20,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    marginBottom: 10,
  },

  loginButtonText2: {
    fontWeight: "bold",
    color: 'white',
  },

  /* HOME PAGE ---------------------------*/
  container3: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },

  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#EBEBEB',
    paddingTop: 7, 
    paddingBottom: 25, 
  },

  iconBehave: {
    backgroundColor: '#80A87D',
    borderRadius: 20,
    padding: 8,
  },

  cameraButton: {
    backgroundColor: '#80A87D',
    borderRadius: 200,
    padding: 20,
    bottom: 80,
  },

  miniLogo: {
    width: 40,
    height: 60,
    bottom: 80,
  },

  userName: {
    fontSize: 35,
    right: 83,
    bottom: 65,
    fontWeight: 'bold',
    color: '#80A87D',
    fontFamily: 'Comfortaa_400Regular',
  },

  text1: {
    right: 34,
    fontSize: 15,
    fontWeight: "bold",
    bottom: 50,
  },

  background: {
    width: '100%',
    bottom: 30,
  },

  /* PROFILE PAGE ---------------------------*/
  userName1: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#80A87D',
    fontFamily: 'Comfortaa_400Regular',
  },

  profile: {
    borderRadius: 100,
    width: 120,
    height: 120,
    bottom: 20,
  },

  editProfileButton: {
    width: "80%",
    marginTop: 20,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    bottom: 60,
  },

  text4: {
    fontSize: 15,
    fontWeight: "bold",
    bottom: 55,
  },

  location: {
    paddingTop: 10,
    paddingBottom: 55,
  },

  reminders: {
    width: 300,
    height: 200,
  },

  br: {
    height: 80,
  },


   /* POINTS PAGE ---------------------------*/
   banner: {
    flexDirection: 'row',
    backgroundColor: "#80A87D",
    width: '100%',
    height: '22%',
    justifyContent: 'space-evenly',
    bottom: 50,
   },

   point: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Comfortaa_400Regular',
    top: 65,
  },

  miniLogo2: {
    width: 40,
    height: 60,
    top: 20,
    left: 170,
  },

  text2: {
    fontSize: 15,
    color: 'white',
    top: 110,
    right: 75,
  },

  text3: {
    fontSize: 70,
    color: "#80A87D",
    bottom: 35,
    fontWeight: "bold"
  },

  box: {
    backgroundColor: 'white',
    width: 321,
    height: 70,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  
  elevation: {
    elevation: 1,
    shadowColor: '#171717',
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
  },

});
