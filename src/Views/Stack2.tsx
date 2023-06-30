
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../routing/stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<StackParamList, 'Stack2'>;

export default function Stack2Screen():JSX.Element {
    const navigation =useNavigation<Props>();

    return (
        <View style={styles.container}>
            <Text>Stack1</Text>
            <Button onPress={() => navigation.navigate("Stack1")} title="Stack2" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
