import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    image: {
        width: 320,
        height: 500,
    },
    text: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    }
});

const slides = [
    {
        key: 'somethun',
        text:
            'Skeniraj QR kod',
        image: require('../assets/slide1.png'),
        colors: ['#63E2FF', '#B066FE']
    },
    {
        key: 'somethun1',
        text:
            'Odaberi što ćeš popiti',
        image: require('../assets/slide2.png'),
        colors: ['#A3A1FF', '#3A3897']
    },
    {
        key: 'somethun2',
        text: 'Plati karticom on-line',
        image: require('../assets/slide3.png'),
        colors: ['#29ABE2', '#4F00BC']
    },
    {
        key: 'somethun3',
        text: 'Opusti se i pričekaj konobara',
        image: require('../assets/slide4.png'),
        colors: ['#A3A1FF', '#3A3897']
    },
];

export default class StartSlider extends React.Component {

    static navigationOptions = {
        header: null
    }

    _onDone = () => {
        this.props.navigation.navigate('Home');
    };

    _renderItem = ({ item, dimensions }) => (
        <LinearGradient
            style={[
                styles.mainContent,
                {
                    flex: 1,
                    paddingTop: item.topSpacer,
                    paddingBottom: item.bottomSpacer,
                    width: dimensions.width,
                },
            ]}
            colors={item.colors}
            start={{ x: 0, y: 0.1 }}
            end={{ x: 0.1, y: 1 }}
        >
            <Image
                style={{width: 200, height: 200}}
                source = {item.image}
            />
            <View>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </LinearGradient>
    );

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderItem={this._renderItem}
                onDone = {this._onDone}
            />
        );
    }
}