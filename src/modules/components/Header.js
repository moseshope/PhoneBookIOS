import React from 'react';
// import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Input, Text, theme } from 'galio-framework';




const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const Header = ({ navigation, title, white, transparent, back, move }) =>
{
  const handleLeftPress = () =>
  {
    // return (back ? navigation.goBack() : navigation.openDrawer());
    navigation.navigate(move)
  }

  // const { back, title, white, transparent, navigation } = this.props;
  // const { routeName } = navigation.state;
  const noShadow = ["Search", "Categories", "Deals", "Pro", "Profile"].includes(title);
  const headerStyles = [
    !noShadow ? styles.shadow : null,
    transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
  ];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={back}
        title={title}
        style={styles.navbar}
        transparent={transparent}
        leftStyle={{ flex: 0.3, paddingTop: 2 }}
        leftIconName={'close'}
        leftIconColor={theme.COLORS.INFO}
        titleStyle={[
          styles.title,
          { color: theme.COLORS[white ? 'WHITE' : 'ICON'] },
        ]}
        onLeftPress={handleLeftPress}
      />
      {/* {
        navigation.state.name === 'App' ? (
          <EvilIcons
            name="search"
            size={24}
            color="black"
            style={styles.search}
            onPress={() => navigation.navigate('Contact')}
          />
        ) : null
      } */}

    </Block>
  );
}

export default Header;

const styles = StyleSheet.create({
  title: {
    width: '100%',
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center'
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: 0,
    paddingTop: iPhoneX ? theme.SIZES.BASE : theme.SIZES.BASE,
    zIndex: 5,
    position: 'relative'
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  search: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    bottom: theme.SIZES.BASE,
    zIndex: 10
  }
})