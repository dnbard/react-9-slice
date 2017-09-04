# REACT-9-SLICE

![logo](https://github.com/dnbard/react-9-slice/blob/master/images/logo.png?raw=true)

React library to create [9-slice image](http://rwillustrator.blogspot.com/2007/04/understanding-9-slice-scaling.html) surfaces.

## Install

```shell
npm install react-9-slice --save
```

## Usage example

```js
import React, { Component } from 'react';
import React9Slice from 'react-9-slice';

class MyComponent extends Component(){
    render(){
        return <React9Slice width={ 256 }
                            height={ 256 }
                            border={ 85 }
                            image="/images/myImage.png"
                            imageSize={{ x: 1024, y: 512 }}>
            HELLO WORLD!
        </React9Slice>
    }
}
```

## API

* `width`, `height` - size of the surface
* `border` - size of the non-scalable parts
* `image` - path to the image (you should provide it yourself)
* `imageSize` - initial size of the image
* `style` - styles for the `children`
* `children` - this element are going to be placed in the center of the surface
