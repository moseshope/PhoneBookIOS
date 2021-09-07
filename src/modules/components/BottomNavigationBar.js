import * as React from 'react';
import { Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import materialTheme from '../../constants/Theme';
import CallLogScreen from '../pages/Calllogs';
import ContactScreen from '../pages/Contact';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const BottomNavigationBar = ({ navigation }) =>
{
  const callLogRoute = () => <CallLogScreen navigation={navigation}></CallLogScreen>;

  const contactRoute = () => <ContactScreen navigation={navigation}></ContactScreen>;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'callLog', title: 'Call Logs', icon: <MaterialIcon name="access-time" family='Galio' color='green' size={20} />, color: materialTheme.COLORS.ERROR },
    { key: 'contact', title: 'Contact', icon: 'contacts', color: materialTheme.COLORS.ERROR },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    callLog: callLogRoute,
    contact: contactRoute,
  });

  return (
    // <BottomNavigation
    //   navigationState={{ index, routes }}
    //   onIndexChange={setIndex}
    //   barStyle={{ backgroundColor: materialTheme.COLORS.PRIMARY }}
    //   renderScene={renderScene}
    // />
    <Tab.Navigator
      tabBarOptions={{
        style: { height: Platform.OS === 'ios' ? 90 : 50 },
        showIcon: true,
        inactiveTintColor: 'white',
        tabStyle: {
          backgroundColor: materialTheme.COLORS.PRIMARY,
        },
      }}

    >
      <Tab.Screen
        name="CallLog"
        component={CallLogScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon name='access-time' style={{ color: focused ? materialTheme.COLORS.ACTIVE : 'white' }} family="Galio" size={20} />
          ),
          tabBarLabel: ({ focused }) => <Text style={{ fontSize: 15, color: focused ? materialTheme.COLORS.ACTIVE : 'white' }}>Call Logs</Text>
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon name='contacts' style={{ color: focused ? materialTheme.COLORS.ACTIVE : 'white' }} family="Galio" size={20} />
          ),
          tabBarLabel: ({ focused }) => <Text style={{ fontSize: 15, color: focused ? materialTheme.COLORS.ACTIVE : 'white' }}>Contacts</Text>
        }}
        name="Contact"
        component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;