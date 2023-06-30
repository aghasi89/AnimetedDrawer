import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { DrawerNavigationProp, useDrawerProgress } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../routing/drawer';

type PropsScreen = DrawerNavigationProp<DrawerParamList, 'Start'>;

export default function StartScreen() {
    const dP = useDrawerProgress();
    const navigation = useNavigation<PropsScreen>();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${interpolate(dP.value, [0, 1], [0, -15])}deg`,
                },
                {
                    translateX: interpolate(dP.value, [0, 1], [0, 100]),
                }
                ,
                {
                    translateY: interpolate(dP.value, [0, 1], [0, 40]),
                }
            ],
        };
    });
    return (
        <Animated.View style={[
            styles.container,
            animatedStyle]}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.toggleDrawer()
                }}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png' }} />
                </TouchableOpacity>
                <Text style={styles.text}>Start</Text>
            </View>
        </Animated.View>);

};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 32,
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        tintColor: 'rgb(164 164 176)',
    },
    text: {
        fontSize: 24,
        marginLeft: 15,
        color: 'rgb(164 164 176)',
    }
})
