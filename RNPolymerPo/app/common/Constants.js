/**
 */
'use strict';
/**
 * 常量
 * 特别声明：数据 API 均来自网络，使用个人帐号注册申请，里面涉及 KEY、SIGN 的字段本着开源项目
 *          可以正常运行没有进行处理，请大家不要抱有非分想法，本着技术学习交流的态度使用 API。
 */

//在线新闻
export const APP_KEY_ONLINE_NEWS = 'd1198f006ce1df5c45d6a0dade8d9b3a';  
export const URL_ONLINE_NEWS = 'http://v.juhe.cn/toutiao/index';

//万年历
export const APP_KEY_WAN_NIAN_LI = '5a9a1cd663013c456120fd6fdc9883cb';
export const URL_WAN_NIAN_LI = 'http://japi.juhe.cn/calendar/day';

//问答机器人
export const APP_KEY_TULING_ROBOT = '49fbd37b1c98c4b760197222d2268e4b';
export const URL_TULING_ROBOT = 'http://op.juhe.cn/robot/index';

//最近影讯
export const APP_RECENT_MOVIES = '37621eeefd05cde6bf0e4aa8c1516b11';
export const URL_RECENT_MOVIES = 'http://op.juhe.cn/onebox/movie/pmovie';

//微信精选
export const URL_WEI_XIN_JINGXUAN = 'http://api.tianapi.com/wxnew/';
export const APP_KEY_WEI_XIN_JINGXUAN = '56ea19cddad7e896b6e90d5d4cde3628';
                    
//Home页top banner数据（网络没有接口，只能本地模拟造假）
export const FAKE_BANNER_NET_DATA =[{
        id: 1234567890,
        img_url: 'http://zxpic.gtimg.com/infonew/0/wechat_pics_-7976502.jpg/640',
        title: '你不知道的iPhone的隐藏功能',
        click_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        id: 1234567891,
        img_url: 'http://zxpic.gtimg.com/infonew/0/wechat_pics_-7968791.jpg/640',
        title: '青春就是一场旅行',
        click_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905046499'
    },
    {
        id: 1234567892,
        img_url: 'http://zxpic.gtimg.com/infonew/0/wechat_pics_-7968826.jpg/640',
        title: '绝世限量版跑车',
        click_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905046549'
    },
];

//Home页news分类列表（网络没有接口，只能本地模拟造假）
export const FAKE_NEWS_CATEGORY_NET_DATA =[{
        key: 'top',
        title: '头条',
        icon_url: 'http://www.iconpng.com/download/png/48370'
    },
    {
        key: 'shehui',
        title: '社会',
        icon_url: 'http://www.iconpng.com/download/png/48369'
    },
    {
        key: 'guonei',
        title: '国内',
        icon_url: 'http://www.iconpng.com/download/png/48367'
    },
    {
        key: 'guoji',
        title: '国际',
        icon_url: 'http://www.iconpng.com/download/png/48366'
    },
    {
        key: 'yule',
        title: '娱乐',
        icon_url: 'http://www.iconpng.com/download/png/48370'
    },
    {
        key: 'tiyu',
        title: '体育',
        icon_url: 'http://www.iconpng.com/download/png/48369'
    },
    {
        key: 'junshi',
        title: '军事',
        icon_url: 'http://www.iconpng.com/download/png/48367'
    },
    {
        key: 'keji',
        title: '科技',
        icon_url: 'http://www.iconpng.com/download/png/48366'
    },
    {
        key: 'caijing',
        title: '财经',
        icon_url: 'http://www.iconpng.com/download/png/48370'
    },
    {
        key: 'shishang',
        title: '时尚',
        icon_url: 'http://www.iconpng.com/download/png/48369'
    },
];
