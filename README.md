### 前言

学习React后，对其中的一些基础知识有所了解，开始了自己的第一个小项目，这个项目并没有涉及到数据的请求，因为完全是模仿小米有品的UI来做的，所以很大程度上是用来练练手，熟悉熟悉React的开发，对样式保证高保真还原。

### 概述
- React & React-Router 前端框架
- SPA单页面应用
- 高保真还原设计图
- 移动端Felxible设备兼容
- 定制化Ant Design UI组件
- ESlint书写格式规范
- styled-components实现CSS In JS样式组件化方案

### Ant Design

这里我选用的是antd-mobile这个UI库，其中封装了很多较为成熟的CSS库，很大程度上提高了开发效率，尽管如此，项目中对其进行了较多的“私人定制”，比如说tab-bar的颜色以及border的宽度，都进行了很大的调整，方法是直接在index.css中假如需要定制的样式：


```
.am-tab-bar-tab-title{
  color:#ab927d
}
.am-tabs-default-bar-tab{
  font-size: 10px;
}
.am-modal-content{
  text-align:start ;
}
```

### styled-components

这是一个新出的CSS In JS的方案，它可以让写React样式就像写React组件一样，styled-components只需要安装一次，便可以像一个组件一样在任何地方使用，并不需要配置webpack，这一点充分体现出开箱即用的优点，相比于繁琐的css-moudule，styled-components写起来非常优雅，如：


```
render() {
    const Wrapper = styled.div`
      margin: 10px auto;
      width: 300px;
      height: 100px;
      border: 1px solid pink;
      text-align: center;
    `;
    const Button = styled.button`
      width: 100px;
      background: yellow;
    `;
    return (
      <Wrapper>
        <Button>Hello World</Button>
      </Wrapper>
    );
  }
```


### GIF图展示：

**由于GitHub加载gif缓慢，请移步到我的博客页面查看：** [传送门](http://vince.xin/article/5acc352a6b78214ab8ac58c1)

- 主页：

![image](http://static.vince.xin/HIUHIUHWIUF11.gif)

- 分类页：

![image](http://static.vince.xin/GVBYWBDUN11.gif)

- 其他页：

![image](http://static.vince.xin/YGYHBDUAJN11.gif)

- 登录注册页：

![image](http://static.vince.xin/NJFNWNWRKF.gif)

- 商品详情页：

![image](http://static.vince.xin/NJNWIFNWEPORF.gif)

### 使用

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### 总结 

虽然这个项目并没有向后台获取数据，是一个静态页面。不过虽然如此，经过这次开发，对React的使用进一步巩固，对如何在React写CSS有了一些自己的心得，但是还有一点比较遗憾，就是没有后端的支持，整个项目也就是一个展示页，之后我将会在后端方面进进一步的探索。
