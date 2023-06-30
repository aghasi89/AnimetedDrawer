import * as React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TabRouting from '../routing/tab';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../routing/drawer';
import { useNavigation } from '@react-navigation/native';

const menuIconUrl = 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png';

type PropsScreen = DrawerNavigationProp<DrawerParamList, 'Start'>;

type Props = {
  children: React.ReactNode,
};

export default function Container({ children }: Props): React.ReactElement {
  const navigation = useNavigation<PropsScreen>();
  const dP = useDrawerProgress()

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
  return (<Animated.View style={[styles.container, animatedStyle]}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {
        navigation.toggleDrawer()
      }}>
        <Image
          style={styles.image}
          source={{ uri: menuIconUrl }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Start</Text>
    </View>
    {children}
  </Animated.View>);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 32
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    tintColor: 'rgb(164 164 176)',
  },
  title: {
    fontSize: 24,
    marginLeft: 15,
    color: 'rgb(164 164 176)',
  }
})