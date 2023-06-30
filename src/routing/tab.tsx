import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoute, { StackParamList } from './stack';
import Container from '../Views/Container';
import { DrawerParamList } from './drawer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import Stack1Screen from '../Views/Stack1';

type TabParamList = {
    Home: NavigatorScreenParams<StackParamList>;
    Settings: undefined;
  };


const Tab = createBottomTabNavigator<TabParamList>();

export default function TabRouting(): JSX.Element {
    return (
        <Container>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarIcon: () => null,
                    tabBarLabelStyle: styles.tabBarLabelStyle
                }}>
                <Tab.Screen name="Home" component={StackRoute} />
                <Tab.Screen name="Settings" component={Stack1Screen} />
            </Tab.Navigator>
        </Container>
    );
}

const styles = StyleSheet.create({
    tabBarLabelStyle: { marginBottom: 20, fontSize: 16 }
})