import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';

const ITEMS = [
    { id: '1', title: 'Kava', price: 7 },
    { id: '2', title: 'Kava bez kofeina', price: 10 },
    { id: '3', title: 'Bijela kava', price: 15 },
    { id: '4', title: 'Machiatto', price: 9 },
    { id: '5', title: 'Machiatto bez kofeina', price: 10 },
    { id: '6', title: 'Kava sa šlagom', price: 10 },
    { id: '7', title: 'Veliki machiatto', price: 12 },
    { id: '8', title: 'Velika kava sa šlagom', price: 15 },
    { id: '9', title: 'Ledena kava', price: 30 },
    { id: '10', title: 'Čaj', price: 13 },
    { id: '11', title: 'Kakao', price: 15 },
    { id: '12', title: 'Ožujsko', price: 18 },
    { id: '13', title: 'Karlovačko', price: 18 },
    { id: '14', title: 'Laško', price: 18 },
    { id: '15', title: 'Heiniken', price: 25 },
    { id: '16', title: 'Stella Artois', price: 25 },
    { id: '17', title: 'Crno pivo', price: 26 },
    { id: '18', title: 'Leffe', price: 28}
];

const width = Dimensions.get('window').width;

function Item({ title, price }) {
    return (
        <TouchableOpacity style={styles.item} activeOpacity={0.6}>
            <Text style={styles.itemTitle}>
                {title}
            </Text>
            <Text>
                {price.toString()} kn
            </Text>
        </TouchableOpacity>
    );
};

class ChooseDrinks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            qrDataArray: (props.navigation.getParam('qrData')).split(';')
        }
    };

    render() {

        return (
            <View style={styles.mainView}>
                <View style={styles.titleCaffe}>
                    <Text style={material.display1}>
                        Caffe Bar {this.state.qrDataArray[0]}
                    </Text>
                </View>
                <View style={styles.brojStola}>
                    <Text style={material.subheading}>
                        Stol broj: {this.state.qrDataArray[1]}
                    </Text>
                </View>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        data={ITEMS}
                        renderItem={({ item }) => <Item title={item.title} price={item.price} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <TouchableOpacity style={styles.totalButton} activeOpacity={0.6}>
                    <View style={styles.totalButtonLeftContent}>
                        <Text style={material.titleWhite}>
                            Ukupno:
                        </Text>
                    </View>
                    <View style={styles.totalButtonRightContent}>
                        <Text style={material.titleWhite}>
                            69 kn
                        </Text>
                        <Image
                            source={require('../assets/arrowRight.png')}
                            style={{ width: parseInt(width*0.05, 10), height: parseInt(width*0.05, 10)}}
                        />
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleCaffe: {
        flex: 2,
        width: '80%',
        alignItems: "center",
        justifyContent: 'center'
    },
    brojStola: {
        flex: 1,
        width: '60%',
        alignItems: "center"
    },
    flatlistContainer: {
        flex: 15,
        width: '95%'
    },
    totalButton: {
        width: '100%',
        flex: 2,
        backgroundColor: '#32323e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    totalButtonLeftContent: {
        flex: 3,
    },
    totalButtonRightContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: '#e2e2e2',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 4,
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 15,
    },
});

export default ChooseDrinks;