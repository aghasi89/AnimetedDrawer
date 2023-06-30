
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../routing/stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<StackParamList, 'Stack1'>;

export default function Stack1Screen(): JSX.Element {
    const navigation = useNavigation<Props>();
    return (
        <View style={styles.container}>
            <Text>Stack1</Text>
            <Button onPress={() => navigation.navigate("Stack2")} title="Stack2" />
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


