import React from 'react';
import { View, Text } from 'react-native';
import { material } from 'react-native-typography';

class LogoTitle extends React.Component {
    render() {
        return (
            <View>
                <Text style={material.titleWhite}>
                    Naruči i plati
                </Text>
            </View>
        );
    };
};

export default LogoTitle;