import { StackViewTransitionConfigs } from 'react-navigation';

export default (transitionProps, prevTransitionProps) => {
  const modalStackKeys = Object.keys({});
  const isIncludesScreen = modalStackKeys.includes(
    transitionProps.scene.route.routeName
  );
  const isIncludesPrevScreen =
    prevTransitionProps &&
    modalStackKeys.includes(prevTransitionProps.scene.route.routeName);

  if (
    (isIncludesScreen || isIncludesPrevScreen) &&
    !(isIncludesScreen && isIncludesPrevScreen)
  ) {
    // 如果之前的页面不是modal的就从下往上弹出
    return StackViewTransitionConfigs.ModalSlideFromBottomIOS;
  }

  // 如果之前的页面是modal的就从左往右弹出
  return StackViewTransitionConfigs.SlideFromRightIOS;
};
