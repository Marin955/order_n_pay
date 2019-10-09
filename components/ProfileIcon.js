import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

class ProfileIcon extends React.Component {

    onPressHandler = () => {
        this.props.navigate('Profile');
    };  

    render() {
        return (
            <TouchableOpacity onPress={this.onPressHandler}>
                <View>
                    <Image 
                        source={require('../assets/profile_icon.png')}
                    />
                </View>
            </TouchableOpacity>
        );
    };
};

export default ProfileIcon;