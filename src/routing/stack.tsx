
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Stack2Screen from '../Views/Stack2';
import Stack1Screen from '../Views/Stack1';

export type StackParamList = {
    Stack1: undefined;
    Stack2: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function StackRoute() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Stack1" component={Stack1Screen} />
            <Stack.Screen name="Stack2" component={Stack2Screen} />
        </Stack.Navigator>
    );
}

