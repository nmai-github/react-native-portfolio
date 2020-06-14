import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                        featuredTitle='Laiki Rice Crackers'
                        image={require('./images/laiki.png')}>
                        <Text style={{ margin: 10 }}>
                            LAIKI rice crackers are 100% wholegrain, vegan, gluten-free, non-GMO and delicious. Now with 4 different flavors, you’ll have more LAIKI to enjoy at home or on the go.
                        </Text>
                    </Card>
                    <Card
                        featuredTitle='Inka Sea Salt Plantain Chips'
                        image={require('./images/inka-main.jpg')}>
                        <Text style={{ margin: 10 }}>
                            Inka Crops uses carefully selected, high quality Plantains that are sliced and fried in pure palm oil for a light and crispy snack that can be enjoyed straight from the bag.
                        </Text>
                    </Card>
                    <Card
                        featuredTitle="Annie's Organic Bunny Fruit Snacks"
                        image={require('./images/annies-main.jpg')}>
                        <Text style={{ margin: 10 }}>
                            Certified Organic, these gluten free bunny-shaped fruit snacks are made with real fruit juice and packed with 100% daily value of vitamin C.
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Home;