import React from 'react';
import {
    View
} from 'react-native';

const CardSection = (properties) => {
    return (
        <View style={styles.containerStyle}>
            {properties.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
