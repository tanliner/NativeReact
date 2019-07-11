import { NavigationActions } from 'react-navigation';
import isEmpty from 'lodash/isEmpty';
import { requiredLogin, requiredUserInfo } from './navigation/AppNavigator';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params = {}) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
  return true;
};

/**
 * 返回
 * @param num 返回层级 (-1上一级)
 */
const goBack = (num = -1) => {
  num *= -1;
  if (num > 1) {
    const routesStack = getRoutesStack();
    const key = (routesStack[routesStack.length - num] || {}).key;
    if (key) {
      navigator.dispatch(NavigationActions.back({ key }));
    }
    else {
      navigator.dispatch(NavigationActions.back());
    }
  }
  else {
    navigator.dispatch(NavigationActions.back());
  }
};

const getCurrentRoute = () => {
  let route = navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
};

const getRoutesStack = () => {
  const route = navigator.state.nav;
  return route.routes;
};

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  getRoutesStack,
  goBack,
};
