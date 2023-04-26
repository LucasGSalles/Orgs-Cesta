import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const tab = createBottomTabNavigator();

import MainPage from '../src/pages/main-page/main-page';

export default function Routes() {
    return (
        <NavigationContainer>
            <tab.Navigator screenOptions={() => ({ tabBarStyle: {display: 'none'}})}>
                <tab.Screen name="Home" component={MainPage} options={{ headerShown: false }} />
            </tab.Navigator>
        </NavigationContainer>
    );
}