import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function Mission() {
    return (
        <Card title='About Us' wrapperStyle={{ margin: 20 }}>
            <Text style={{marginBottom:10}}>
                Do you love to snack as much as we do? Do you prefer gluten-free snacks, or are you just looking for healthy snack ideas packed with protein and not too much sugar? 
            </Text>
            <Text>
                Whether you are a foodie looking for new ideas, or a busy professional, we've a snack for everyone.
            </Text>
        </Card>
    );
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default (About);