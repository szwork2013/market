/**
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ActivityIndicator,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import OnLineNewsPage from './OnLineNewsPage';
import NavigatorRoute from './../common/NavigatorRoute';
import ScrollableTabView , { ScrollableTabBar } from 'react-native-scrollable-tab-view';
/**
 * 微信精选列表（上拉分页加载）
 * 核心知识点：上拉分页加载更多的ListView
 * http://apistore.baidu.com/apiworks/servicedetail/632.html
 */
const pageLimit = 10;

class NewsCategoryListScene extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };

  render() {
    const {route} = this.props;
    return (
      <View style={styles.container}>
        <ActionBar
          title={"在线新闻"}
          onIconClicked={this._onIconClicked.bind(this)}/>
        <ScrollableTabView
          tabBarPosition='top'
          tabBarUnderlineStyle={{backgroundColor: '#03a9f4', height: 2}}
          tabBarBackgroundColor='#ffffff'
          tabBarUnderlineColor='#03a9f4'
          tabBarActiveTextColor='#03a9f4'
          tabBarInactiveTextColor='#9b9b9b'
          scrollWithoutAnimation={false}
          tabBarTextStyle={{fontSize:14}}
          initialPage={this._currentSelectedPageIndex(route.categories, route.curKey)}
          renderTabBar={() => <ScrollableTabBar/>}>
          {this._renderTabPage(route.categories)}
        </ScrollableTabView>
      </View>
    );
  }

  _currentSelectedPageIndex(categories, curKey) {
    let index = 0;
    for (let i=0; i<categories.length; i++) {
      if (categories[i].key == curKey) {
        index = i;
        break;
      }
    }
    return index;
  }

  _renderTabPage(categories) {
    let pages = [];
    for (let index=0; index<categories.length; index++) {
      let category = categories[index];
      pages.push(
        <OnLineNewsPage
          navigator={this.props.navigator}
          route={this.props.route}
          categoryKey={category.key}
          key={category.key}
          tabLabel={category.title}/>
      );
    }
    return pages;
  }

  _itemPressed(wxNewsBean) {
    NavigatorRoute.pushToWebViewScene(this.props.navigator, 'wxNews', wxNewsBean);
  }

  _onIconClicked() {
    NavigatorRoute.navigatorPopBack(this.props.navigator);
  }
}

function mapStateToProps(state) {
  const { wxNews } = state;
  return {
    wxNews,
  }
}
export default connect(mapStateToProps)(NewsCategoryListScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  listview: {
    flex: 1,
    padding: 5,
  },

  footerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});