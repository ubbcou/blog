# vuex 的简单示例

Author: ubbcou  
E-Mail: ubbcou@outlook.com  
GitHub: [ubbcou](https://github.com/ubbcou)  
Blog: [Blog](https://github.com/ubbcou/blog/issues)  
源码：[源码](https://github.com/ubbcou/blog/tree/master/Examples/vuexdemo-20180531)


有段时间没有使用 vuex 搭建应用了，倒是挺手生的。恰巧有人问起，于是看了看文档，利用 parcel 内置了的开发服务器搭配 axios，简单的搭建了一个 vuex 的示例。

## 注意
关于 vuex,这几点需要注意：  
- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
- mutation 必须同步执行
- Action 类似于 mutation，不同在于：
    1. Action 提交的是 mutation，而不是直接变更状态。
    2. Action 可以包含任意异步操作。

关于源码：  
可以简单使用 parcel 在服务器环境下使用。  
应确保已有 parcel：`yarn global add parcel-bundler` or `npm install -g parcel-bundler`。  
在当前目录执行 `parcel`，浏览器进入 `localhose:1234`。


## 代码

主要代码：
```html
<div id="root" v-cloak>
  <h3>电影列表</h3>
  <ul v-if="movie">
    <li v-for="(item, index) in movie.subjects" :key="index">
      <a :href="item.alt">{{item.original_title}}</a>
    </li>
  </ul>
</div>

<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script> <!-- 引入polyfill (如果你支持的浏览器并没有实现 Promise (比如 IE)) -->
<script src="https://unpkg.com/vue"></script> <!-- 引入vue -->
<script src="https://unpkg.com/vuex"></script><!-- 引入vuex -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

```javascript
var store = new Vuex.Store({
  state: {
    movie: null
  },
  // mutation 必须同步执行
  mutations: {
    'GET_MOVIE': function(state, result) {
      console.log(result)
      state.movie = result;
    }
  },
  actions: {
    getMovie: function(context) {
      axios.get('http://localhost:1234/api/movie.json')
      .then(function(response) {
        context.commit('GET_MOVIE', response.data);
      })
      .catch(function(error) {
        // 错误处理
        console.log(error)
      })
    }
  }
})


new Vue({
  el: '#root',
  data: {

  },
  computed: {
    movie: function() {
      return store.state.movie
    }
  },
  mounted: function() {
    this.getMovies();
  },
  methods: {
    // 分发 actions（更新state数据）
    getMovies: function() {
      store.dispatch('getMovie');
    }
  }
})
```

## 图样

效果图：
![](https://github.com/ubbcou/blog/blob/master/Examples/vuexdemo-20180531/20180531204604.png?raw=true)