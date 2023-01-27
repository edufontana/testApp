import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../screens/Home'
import {List} from '../screens/List'


 const {Navigator, Screen} = createNativeStackNavigator()


export function AppRoutes(){
   return(
    <Navigator screenOptions={{
      headerShown:false
    }}>
      <Screen name="Home" component={Home}/>
      <Screen name="List" component={List}/>
        
 
    </Navigator>
   )
}