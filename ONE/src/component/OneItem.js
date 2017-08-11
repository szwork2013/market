//LiuZh 2017-05-16
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

import OneSceneImgPop from './OneSceneImgPop';

let windowWidth = Dimensions.get('window').width;

export default class OneItem extends Component{

	constructor(props){
		super(props);

		this.state = {
			imgHeight: 200,
			popVisible: false,
		};
	}

	render() {
		let rowData = this.props.rowData;
		let weather = this.props.weather;
		//正则，/g是全部匹配
		let date = weather.date.replace(/-/g, ' / ');
		return(
			<View style={styles.itemBody}>
				<Modal
					transparent={true}
					animationType={'fade'}
					visible={this.state.popVisible}
					onRequestClose={()=>{}}>
					<OneSceneImgPop 
						imgSize={{height: this.state.imgHeight * 0.9,width: windowWidth*0.9,}}
						imgUrl={rowData.img_url}
						volume={rowData.volume}
						info={`${rowData.title} | ${rowData.pic_info}`}
						onPress={this.changePopVisible}/>
				</Modal>
				<Text style={styles.dateTxt}>{date}</Text>
				<Text style={styles.cityTxt}>{`${weather.climate}，${weather.city_name}`}</Text>
				<TouchableWithoutFeedback
					onPress={this.changePopVisible}>
					<View style={styles.imgBox}>
						<Image
							source={{uri: rowData.img_url}}
							style={[styles.imgPic, {height: this.state.imgHeight,},]}/>
						<Text style={styles.volTxt}>{rowData.volume}</Text>
					</View>
				</TouchableWithoutFeedback>
				<Text style={styles.titleTxt}>{`${rowData.title} | ${rowData.pic_info}`}</Text>
				<Text style={styles.contentTxt}>{rowData.forward}</Text>
				<Text style={styles.authorTxt}>{rowData.words_info}</Text>
				<View style={styles.bottom}>
					<TouchableWithoutFeedback onPress={this.pressEdit}>
						<View style={{flexDirection: 'row',}}>
							<Image style={styles.bottomImg}
								source={require('../img/bubble_edit.png')}/>
							<Text style={styles.bottomTxt}>小记</Text>
						</View>
					</TouchableWithoutFeedback>
					<View style={{flex:1,}}/>
					<TouchableWithoutFeedback onPress={this.pressLike}>
						<View style={{flexDirection: 'row',}}>
							<Text style={styles.bottomTxt}>{rowData.like_count}</Text>
							<Image style={styles.bottomImg}
								source={require('../img/bubble_like.png')}/>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={this.pressShare}>
						<Image style={styles.bottomImg}
							source={require('../img/bubble_share.png')}/>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}

	componentDidMount() {
		Image.getSize(this.props.rowData.img_url, this.getSizeSuccess(), this.getSizeFailure);
	}


	pressLike = () => {
		alert('press like'); 
	}

	pressShare = () => {
		alert('press share');
	}

	pressEdit = () => {
		const {navigate} = this.props.appNavigation;
		navigate('Edit',{
			editData: this.props.rowData,
			weather: this.props.weather,
			imgSize: {
				height: this.state.imgHeight,
				width: windowWidth,
			},
			title: '小记',
		});
	}

	changePopVisible = () => {
		this.setState({
			popVisible: !this.state.popVisible,
		});
	}

//img的getSize成功回调
	getSizeSuccess() {
		//用that指代本组件，否则函数内this指向Image了，setState()方法就不存在于Image而报错
		let that = this;
		return (width, height) => {
			height = (windowWidth / width) * height;
			that.setState({
				imgHeight: height,
			});
		}
	}
//img的getSize失败回调
	getSizeFailure(error) {
		alert(`get img size failure=>${error}`);
	}
}

const styles = StyleSheet.create({
	itemBody: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		marginBottom: 12,
		borderBottomWidth: 0.2,
		borderColor: '#DDDDDD',
	},
	dateTxt: {
		marginTop: 10,
		fontSize: 17,
		color: '#000000',
	},
	cityTxt: {
		fontSize: 11,
		color: '#222222',
	},
	imgBox: {
		marginTop: 7,
		marginBottom: 8,
		position: 'relative',
	},
	volTxt: {
		position: 'absolute',
		left: 8,
		top: 8,
		color: '#FFFFFF',
		fontSize: 13,
		textShadowOffset: {
			width: 1,
			height: 1,
		},
		textShadowRadius: 2,
	},
	imgPic: {
		width: windowWidth,
	},
	titleTxt: {
		fontSize: 11,
		color: '#888888',
	},
	contentTxt: {
		fontSize: 12,
		lineHeight: 24,
		color: '#111111',
		marginTop: 8,
		marginBottom: 8,
		marginLeft: 40,
		marginRight: 40,
	},
	authorTxt: {
		fontSize: 11,
		color: '#888888',
		marginTop: 14,
		marginBottom: 14,
	},
	bottom: {
		marginTop: 10,
		flexDirection: 'row',
		marginBottom: 8,
	},
	bottomImg: {
		width: 18,
		height: 18,
		marginLeft: 10,
		marginRight: 10,
	},
	bottomTxt: {
		color: '#888888',
		fontSize: 10,
		lineHeight: 16,
	},
});