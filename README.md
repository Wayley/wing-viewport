# wing-viewport

viewport utility

## Usage

```js
import viewport from 'wing-viewport';

viewport.isMobile();
viewport.isExtraSmallViewPort();
viewport.isMediumViewPort();
viewport.isSmallViewPort();
viewport.isLargeViewPort();
viewport.isExtraLargeViewPort();
viewport.isExtraExtraLargeViewPort();
```

|            Method             |             Description              |
| :---------------------------: | :----------------------------------: |
|         `isMobile()`          | Check whether it is a mobile browser |
|   `isExtraSmallViewPort()`    |          clientWidth < 576           |
|     `isMediumViewPort()`      |          clientWidth >= 576          |
|      `isSmallViewPort()`      |          clientWidth >= 768          |
|      `isLargeViewPort()`      |          clientWidth >= 992          |
|   `isExtraLargeViewPort()`    |         clientWidth >= 1200          |
| `isExtraExtraLargeViewPort()` |         clientWidth >= 1400          |
