import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { material } from 'react-native-typography';

import LogoTitle from '../components/LogoTitle';
import ProfileIcon from '../components/ProfileIcon';
import QrDefault from '../components/QrDefault';
import QRCodeScanScreen from '../screens/QRCodeScanScreen';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           default: true
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle />,
            headerRight: <ProfileIcon navigate={navigation.navigate} />,
            headerRightContainerStyle: { paddingRight: 15 },
            headerLeft: null
        };
    };

    onQRButtonPressHandler = () => {
        this.setState({default: !this.state.default});
    };

    onOtherCaffesButtonPressHandler = () => {
        this.props.navigation.navigate('Kafici')
    };

    render() {

        var content;
        if(this.state.default) {
            content = <QrDefault />
        }
        else {
            content = <QRCodeScanScreen onNavigation={this.props.navigation.navigate}/>
        };

        return (
            <View style={styles.mainScreen}>
                <View style={styles.first}>
                    <TouchableOpacity style={styles.qrButtonContainer} activeOpacity={0.6} onPress={this.onQRButtonPressHandler}>
                        {content}
                    </TouchableOpacity>
                </View>
                <View style={styles.second}>
                    <View style={styles.or_line}>
                        <View style={styles.lineContainer}>
                            <View style={styles.rectLine} />
                        </View>
                        <View style={styles.orTextContainer}>
                            <Text style={material.body1}>
                                ili
                            </Text>
                        </View>
                        <View style={styles.lineContainer}>
                            <View style={styles.rectLine} />
                        </View>
                    </View>
                </View>
                <View style={styles.third}>
                    <TouchableOpacity style={styles.otherTouchable} activeOpacity={0.6} onPress={this.onOtherCaffesButtonPressHandler}>
                        <Text style={material.subheading}>
                            Pogledaj ponudu kafića
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
};

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    first: {
        flex: 10,
        width: '90%',
        marginVertical: 5,
        paddingTop: 5
    },
    qrButtonContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
    },
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
    second: {
        flex: 3,
        width: '90%',
        marginVertical: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    or_line: {
        width: '95%',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orTextContainer: {
        width: '5%',
        justifyContent: 'center'
    },
    rectLine: {
        width: '100%',
        height: '10%',
        backgroundColor: '#262c47',
    },
    lineContainer: {
        width: '45%',
        height: '90%',
        justifyContent: 'center',
        paddingTop: 3
    },
    third: {
        flex: 3,
        width: '90%',
        marginVertical: 5
    },
    otherTouchable: {
        height: '70%',
        width: '100%',
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5
    }
});

export default HomeScreen;