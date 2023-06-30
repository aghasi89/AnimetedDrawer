import * as React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import StartScreen from '../Views/Start';
import { DrawerMenuNames, IDrawer } from '../types';

const menuLabels: IDrawer[] = [
    {
        name: DrawerMenuNames.Start,
        label: 'Start',
        component: StartScreen,
    },
    {
        name: DrawerMenuNames.YourCard,
        label: 'Your Card',
        component: StartScreen,
    },
    {
        name: DrawerMenuNames.Favorites,
        label: 'Favorites',
        component: StartScreen,
    },
    {
        name: DrawerMenuNames.YourOrder,
        label: 'Your Order',
        component: StartScreen,
    },
];

export const CostumDrawerContent = (props: DrawerContentComponentProps) => {
    const progressdata = useDrawerProgress();
    const [activeIndex, setActiveIndex] = useState(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(progressdata.value, [0, 1], [0, 20]),
                }
            ],
        };
    });
    const handlePress = (name: DrawerMenuNames, index: number) => {
        setActiveIndex(index);
        props.navigation.navigate(name);
    };
    
    return <Animated.View
        style={[styles.container, animatedStyle]}>
        <View style={styles.header}>
            <Text style={styles.title}>Beka</Text>
        </View>
        <DrawerContentScrollView
            scrollEnabled={false}
        >
            {menuLabels.map((menuItem, index) => {
                return <DrawerItem
                    onPress={() => handlePress(menuItem.name, index)}
                    focused={activeIndex === index}
                    activeBackgroundColor={'rgba(233, 105, 105,0.25)'}
                    key={index}
                    label={(props) => {
                        return (
                            <Text style={props.focused ? styles.activeTint : styles.inActiveTint}>
                                {menuItem.label}
                            </Text>
                        )
                    }}
                />
            })}
        </DrawerContentScrollView>
        <View style={styles.line} />
        <View style={styles.bottom}>
            <DrawerItem
                onPress={() => { }}
                label={(props) => {
                    return (
                        <Text style={props.focused ? styles.activeTint : styles.inActiveTint}>
                            Sign Out
                        </Text>
                    )
                }}
            />
        </View>
    </Animated.View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(26 23 42)',
        width: Dimensions.get("window").width,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 16,
    },
    header: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 24,
    },
    activeTint: {
        color: 'rgb(233, 105, 105)',
        fontWeight: 'bold',
        fontSize: 18,
    },
    inActiveTint: {
        color: "white",
        fontWeight: 'normal',
        fontSize: 18,
    },
    line: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'white',
    },
    bottom: {
        height: 150,
        paddingHorizontal: 16,
        marginTop: 20,
    }

})