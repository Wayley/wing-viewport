const userAgent = window.navigator.userAgent;
const clientWidth = window.visualViewport.width;

export const viewport = {
  isMobile() {
    return userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  },
  isExtraSmallViewPort() {
    return clientWidth < 576;
  },
  isMediumViewPort() {
    return clientWidth >= 576;
  },
  isSmallViewPort() {
    return clientWidth >= 768;
  },
  isLargeViewPort() {
    return clientWidth >= 992;
  },
  isExtraLargeViewPort() {
    return clientWidth >= 1200;
  },
  isExtraExtraLargeViewPort() {
    return clientWidth >= 1400;
  },
};

export default viewport;
