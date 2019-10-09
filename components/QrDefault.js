import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { material } from 'react-native-typography';

class QrDefault extends React.Component {

    width = Dimensions.get('window').width;

    render() {
        return (
            <View style={styles.qrButtonContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/slide1.png')}
                        resizeMode='contain'
                        style={{ width: parseInt(this.width * 0.5, 10) }}
                    />
                </View>
                <View style={styles.QRtextContainer}>
                    <Text style={material.display1}>
                        Skeniraj QR kod
                            </Text>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '60%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    QRtextContainer: {
        height: '20%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
    qrButtonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default QrDefault;