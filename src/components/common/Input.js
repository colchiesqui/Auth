import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{padding: 0, height: 20,width: 100 }}

            />
        </View>
    );
};

export { Input };
