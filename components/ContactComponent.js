import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title='Contact Information' wrapperStyle={{ margin: 20 }}>
                        <Text>123 Fake Street</Text>
                        <Text>Salt Lake City, UT 84044</Text>
                        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                        <Text>Phone: 801-234-5678</Text>
                        <Text>Email: contactus@healthysnacks.com</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;