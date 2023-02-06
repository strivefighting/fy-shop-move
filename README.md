# fy-shop-move

[![NPM version](https://badgen.net/npm/v/fy-shop-move)](https://www.npmjs.com/package/fy-shop-move)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/fy-shop-move)](https://www.npmjs.com/package/fy-shop-move)
[![License](https://badgen.net/npm/license/fy-shop-move)](https://www.npmjs.com/package/fy-shop-move)

A simple shopping cart animation effect

Install with [npm](https://www.npmjs.com/), or [Yarn](https://yarnpkg.com/):

```bash
# via npm
npm install fy-shop-move --save

# or Yarn (note that it will automatically save the package to your `dependencies` in `package.json`)
yarn add fy-shop-move
```



## Usage

```typescript
    import MoveFactory from 'fy-shop-move';
    import 'fy-shop-move/style';

    MoveFactory.create({
        clickEle: document.querySelector('.click'),
        storeEle: document.querySelector('.store'),
        moveHTML: `<div class="plus">+</div>`,
        moveEleSize: 30,
        moveEndCallback: () => {
            console.log('move end.')
        }
    })

```


## Params
| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| clickEle | HTMLElement | ✓ | Elements of starting animation |
| storeEle | HTMLElement | ✓ | Elements of ending animation |
| moveHTML | String | ✓ | Animation element html string |
| moveEleSize | Number | ✓ | Animation element size, width and height are consistent; Unit: px |
| moveEndCallback | Function |  | Animation end callback function |


## Example

![demo](https://raw.githubusercontent.com/strivefighting/fy-image/master/assets/3.gif)