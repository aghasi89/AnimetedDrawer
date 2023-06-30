import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StartScreen from '../Views/Start';
import TabRouting from './tab';
import { CostumDrawerContent } from './CostumDrawerContent';

export type DrawerParamList = {
    Start: undefined;
    YourCard: undefined;
    Favorites: undefined;
    YourOrder: undefined
};
const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerRouting(): JSX.Element {
    return (
        <View style={styles.container}>
            <Drawer.Navigator
                initialRouteName="Start"
                drawerContent={(props) => <CostumDrawerContent {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerType: 'back',
                    overlayColor: 'transparent',
                    drawerStyle: styles.drawerStyle,
                    sceneContainerStyle: styles.sceneContainerStyle
                }}>
                <Drawer.Screen name="Start" component={TabRouting} />
                <Drawer.Screen name="YourCard" component={StartScreen} />
                <Drawer.Screen name="Favorites" component={StartScreen} />
                <Drawer.Screen name="YourOrder" component={StartScreen} />
            </Drawer.Navigator>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    drawerStyle: {
        flex: 1,
        width: '30%',
        backgroundColor: 'transparent'
    },
    sceneContainerStyle: {
        backgroundColor: 'transparent',
    },
})