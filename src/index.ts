/*
 * @Author: Robben Wadlay
 * @Date: 2023-10-09 17:18:51
 * @Description: viewport utils
 * @LastEditors: Robben Wadlay
 * @LastEditTime: 2023-10-10 17:41:52
 */
const userAgent: string = window.navigator.userAgent;
const visualViewport: VisualViewport | null = window.visualViewport;
const clientWidth: number = visualViewport ? visualViewport.width : document.body.clientWidth;

export declare interface Viewport {
  /**
   * @description Check whether it is a mobile browser
   * @date 2023-10-10 03:10:54
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isMobile(): boolean;

  /**
   * @description It returns true when the client width is less than 576.(width < 576)
   * @date 2023-10-10 03:10:34
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isExtraSmallViewPort(): boolean;

  /**
   * @description It returns true when the client width is greater than or equal to 576.(width >= 576)
   * @date 2023-10-10 03:10:43
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isMediumViewPort(): boolean;

  /**
   * @description It returns true when the client width is greater than or equal to 768.(width >= 768)
   * @date 2023-10-10 04:10:58
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isSmallViewPort(): boolean;

  /**
   * @description It returns true when the client width is greater than or equal to 992.(width >= 992)
   * @date 2023-10-10 04:10:01
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isLargeViewPort(): boolean;

  /**
   * @description It returns true when the client width is greater than or equal to 1200.(width >= 1200)
   * @date 2023-10-10 04:10:21
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isExtraLargeViewPort(): boolean;

  /**
   * @description  It returns true when the client width is greater than or equal to 1200.(width >= 1200)
   * @date 2023-10-10 04:10:36
   * @return {*}  {boolean}
   * @memberof Viewport
   */
  isExtraExtraLargeViewPort(): boolean;
}

export const viewport: Viewport = {
  isMobile() {
    const matchResult: RegExpMatchArray | null = userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    return matchResult ? matchResult.length > 0 : false;
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
