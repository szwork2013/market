//LiuZh 2017-05-16
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
//导入SN用作顶部back等的导航
import {
	StackNavigator,
} from 'react-navigation';

import HomeScene   from '../scene/Home';//主页
import DetailScene from '../scene/DetailScene';//内容详情页
import UserScene   from '../scene/UserScene';//用户界面
import SearchScene from '../scene/SearchScene';//搜索界面
import EditScene   from '../scene/EditScene';//编辑内容界面
import Toolbar     from '../component/Toolbar';//Toolbar

const AppNav = StackNavigator({
		Home: {
			screen: HomeScene,
			navigationOptions: ({navigation}) => ({
			header: (
					<Toolbar
						inHome={true}
						navigation={navigation}/>
				),
		}),
		},
		Detail: {
			screen: DetailScene,
			navigationOptions: ({navigation}) => ({
				header: (
					<Toolbar
						navigation={navigation}/>
				),
			}),
		},
		User: {
			screen: UserScene,
			navigationOptions: ({navigation}) => ({
				header: (
					<Toolbar
						onlyLeft={true}
						navigation={navigation}
						bgColor={'rgba(0,0,0,0)'}/>
				),
			}),
		},
		Search: {
			screen: SearchScene,
			navigationOptions: () => ({
				header: null,
			}),
		},
		Edit: {
			screen: EditScene,
			navigationOptions: ({navigation}) => ({
				header: (
					<Toolbar
						navigation={navigation}/>
				),
			}),
		},
	}, {
		initialRouteParams: {
			oneSceneNum: 0,
			title: '一个',
	},
});

export default AppNav;
