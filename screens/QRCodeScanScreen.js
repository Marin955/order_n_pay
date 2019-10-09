import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

class QRCodeScanScreen extends React.Component {

    state = {
        hasCameraPermission: null,
        scanned: false,
    };

    async componentDidMount() {
        this.getPermissionsAsync();
    };

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    render() {
        if (this.state.hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        };
        if (this.state.hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        };
        return (
            <View style={styles.wrapScan}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>
                    <BarCodeScanner
                        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {this.state.scanned && (
                        <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
                    )}
                </View>
            </View>
        );
    };

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        this.props.onNavigation('OdabirPica', {qrData: data});
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
};

const styles = StyleSheet.create({
    wrapScan: {
        width: '100%',
        height: '100%',
    }
});

export default QRCodeScanScreen;