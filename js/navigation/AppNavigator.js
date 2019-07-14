import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import transitionConfig from './transitionConfig.js';
import { gestureConfig } from './gestureConfig';

// 需要登录页面 (包括第三方登录)
export const requiredLogin = [
  'AdditionalProfile', 'AccountInfor',
];
// 需要用户信息页面
export const requiredUserInfo = [
  'Asset', 'AssetShare', 'AssetStockShare', 'AccountSecurity', 'BindUsername', 'UsernameInfo', 'ThirdPartyBind',
  'BindingGoogleVerifyStep1', 'BindingGoogleVerifyStep2', 'BindingGoogleVerifyStep3', 'ResetPassword', 'ResetAssetPassword',
  'MultipleVerify', 'SingleVerify', 'TransactionConfirm', 'Order', 'OrderDetail', 'AssetMoneyGuide', 'CoinRecordDetail', 'DrawCoin',
  'CoinAsset', 'ChangellyDeposit', 'ChangellyDepositingDetail', 'ChangellyOrderDetail', 'InvitationShare', 'Partnership',
  'InviteHistory', 'PartnershipRule', 'NewStockOrderResult', 'NewStockOrderForm', 'Transaction',
];

export default createStackNavigator(
  {
    FirstPage: MainTabNavigator,
  },
  {
    headerMode: 'none',
    navigationOptions: gestureConfig,
    transitionConfig,
  }
);
