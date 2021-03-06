/**
 * 首页
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

// ES5
var Shop = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    <Text style={styles.welcome}>
                        Shop
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    // 跳转到首页详细页
    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,   // 要跳转过去的组件
            title:'首页详细页'
        });
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出
module.exports = Shop;
