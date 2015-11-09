/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RCCManager = React.NativeModules.RCCManager;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeAppEventEmitter,
} = React;

var subscription = NativeAppEventEmitter.addListener(
  'NavItemClicked',
  (navItemParams) => { 
    RCCManager.SideMenuControllerIOS("mainSideMenu", "openSideMenu", {
      side: "left",
    }); 
}
);
// Don't forget to unsubscribe, typically in componentWillUnmount
//subscription.remove();

var ControllersExample = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
  },
});

AppRegistry.registerComponent('ControllersExample', () => ControllersExample);

var MovieListScreen = React.createClass({

  componentDidMount: function() {
    RCCManager.NavigationControllerIOS("movies", "setNavItem", {
      side: "left",
      title: "Side",
      id: 1,
    });
  },

onButtonClick: function(val) {
  this.underlayColor = "green"
    RCCManager.SideMenuControllerIOS("mainSideMenu", "changeSideMenuAnimation", {
      animationType: val,
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Movie List Screen Screen
        </Text>
        
        <TouchableHighlight underlayColor="#cccccc" onPress={ this.onButtonClick.bind(this, "door") }>
          <Text style={styles.button}>Door</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#cccccc" onPress={ this.onButtonClick.bind(this, "parallax") }>
          <Text style={styles.button}>Parallax</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#cccccc" onPress={ this.onButtonClick.bind(this, "slide") }>
          <Text style={styles.button}>Slide</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#cccccc" onPress={ this.onButtonClick.bind(this, "slideAndScale") }>
          <Text style={styles.button}>Slide & Scale</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

AppRegistry.registerComponent('MovieListScreen', () => MovieListScreen);

var SearchScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Search Screen
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('SearchScreen', () => SearchScreen);

var FavoritesScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Favorites Screen2
        </Text>

        <TouchableHighlight underlayColor="#cccccc" onPress={ this.onButtonClick.bind(this) }>
          <Text style={styles.button}>Push</Text>
        </TouchableHighlight>
      </View>
    );
  },

  onButtonClick: function() {
    RCCManager.NavigationControllerIOS("favorites", "push", {
      title: "Pushed screen",
      component: "PushedScreen",
      animated: true,
    });
  },
});

AppRegistry.registerComponent('FavoritesScreen', () => FavoritesScreen);

var PushedScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pushed Screen 100% Native
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('PushedScreen', () => PushedScreen);

var SideMenuComponenet = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          SideMenu Screen
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('SideMenuComponent', () => SideMenuComponenet);

