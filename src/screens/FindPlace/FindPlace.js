import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import { Navigation } from "react-native-navigation";

class FindPlaceScreen extends Component {

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        Navigation.push(this.props.componentId, {
            component: {
                name: 'ReactNativeStart.PlaceDetail',
                passProps: {
                    selectedPlace: selPlace
                },
                options: {
                    topBar: {
                        title: {
                            text: selPlace.name
                        }
                    }
                }
            }
        });
    };

    render() {
        return (
            <View>
                <Text>Find Place Screen</Text>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
};

export default connect(mapStateToProps)(FindPlaceScreen);