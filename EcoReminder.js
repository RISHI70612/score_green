// import React, { useState } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   reminder: {
//     padding: 20,
//   },
//   switch: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   sliderIcon: {
//     fontSize: 24,
//     marginRight: 10,
//   },
// });

// const EcoReminder = () => {
//   const [reminder1Enabled, setReminder1Enabled] = useState(true);
//   const [reminder2Enabled, setReminder2Enabled] = useState(true);
//   const [reminder3Enabled, setReminder3Enabled] = useState(true);

//   const toggleReminder1 = () => {
//     setReminder1Enabled((prevState) => !prevState);
//   };

//   const toggleReminder2 = () => {
//     setReminder2Enabled((prevState) => !prevState);
//   };

//   const toggleReminder3 = () => {
//     setReminder3Enabled((prevState) => !prevState);
//   };

//   return (
//     <View style={styles.reminder}>
//       <View>
//         <Text>Send me ecofriendly text reminders!</Text>
//         <TouchableOpacity style={styles.switch} onPress={toggleReminder1}>
//           <AntDesign
//             name={reminder1Enabled ? "checksquare" : "closesquare"}
//             style={styles.sliderIcon}
//           />
//           <Text>{reminder1Enabled ? "On" : "Off"}</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <Text>Remind me when I am near an Ecocode!</Text>
//         <TouchableOpacity style={styles.switch} onPress={toggleReminder2}>
//           <AntDesign
//             name={reminder2Enabled ? "checksquare" : "closesquare"}
//             style={styles.sliderIcon}
//           />
//           <Text>{reminder2Enabled ? "On" : "Off"}</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <Text>Send me a reminder to bring a reusable bag!</Text>
//         <TouchableOpacity style={styles.switch} onPress={toggleReminder3}>
//           <AntDesign
//             name={reminder3Enabled ? "checksquare" : "closesquare"}
//             style={styles.sliderIcon}
//           />
//           <Text>{reminder3Enabled ? "On" : "Off"}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default EcoReminder;

import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import * as Notifications from 'expo-notifications';

const styles = StyleSheet.create({
  reminder: {
    padding: 20,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sliderIcon: {
    fontSize: 24,
    marginRight: 10,
  },
});

const EcoReminder = () => {
  const [reminder1Enabled, setReminder1Enabled] = useState(true);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // Add notification listener
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // Add notification response listener
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Remove notification subscriptions when component unmounts
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  };

  const toggleReminder1 = () => {
    setReminder1Enabled((prevState) => !prevState);
    if (reminder1Enabled) {
      // If reminder is enabled, schedule notification
      scheduleNotification();
    } else {
      // If reminder is disabled, cancel any scheduled notification
      Notifications.cancelAllScheduledNotificationsAsync();
    }
  };

  const scheduleNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Eco Reminder',
        body: "Don't forget to live eco-friendly!",
      },
      trigger: { seconds: 10 },
    });
  };

  return (
    <View style={styles.reminder}>
      <View>
        <Text>Send me ecofriendly text reminders!</Text>
        <TouchableOpacity style={styles.switch} onPress={toggleReminder1}>
          <AntDesign
            name={reminder1Enabled ? "checksquare" : "closesquare"}
            style={styles.sliderIcon}
          />
          <Text>{reminder1Enabled ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EcoReminder;

