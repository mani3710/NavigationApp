import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import LogoutScreen from '../Screens/Logout';
import ProfileScreen from '../Screens/Profile';
import SettingsScreen from '../Screens/Settings';
import SplashScreen from '../Screens/Splash';
import StoryScreen from '../Screens/Story';
import LikeScreen from '../Screens/Like';
import DashBoardScreen from '../Screens/DashBoard';





const MainNav = createStackNavigator({
   HomeScreen:{screen:HomeScreen},
   Profile:{screen:ProfileScreen},
   Story:{screen:StoryScreen},
   Like:{screen:LikeScreen},
//    Settings:{screen:SettingsScreen},



});
const SettingNav =  createStackNavigator({
    Settings:{screen:SettingsScreen},
    Profile:{screen:ProfileScreen},
    Story:{screen:StoryScreen}
});

const DrawNav=createDrawerNavigator({
    Home:{screen:MainNav},
    Settings:{screen:SettingNav},
    Logout:{screen:LogoutScreen},

    
    
 });

const AuthNav = createSwitchNavigator({
    SplashScreen:{screen:SplashScreen},
    LoginScreen:{screen:LoginScreen},
    MainNav:{screen:MainNav},
    DrawNav:{screen: DrawNav}

});

export default createAppContainer(AuthNav);

