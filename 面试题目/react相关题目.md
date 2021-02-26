# diff算法（差异查找算法）
## React diff三大策略（将O(n3)降低到O(n)）
+ tree diff: Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
+ component diff: 拥有想同类的两个组件生成相似的树形结构，不同类的两个组件生成不同的树形结构。
+ element diff: 对于同一层级的一组子节点，通过唯一id区分

### tree diff
> 对树分层比较，两棵树只对同一层次节点进行比较，如果该节点不存在，则该节点及其子节点会完全删除，不会再比较。只需一次遍历，就能完成整个dom树的比较

### component diff
> 同一类型的两个组件，按原策略（层级比较）继续比较vitual dom
> 同一类型的两个组件，组件A变化为组件B时，可能Virtual DOM没有任何变化，如果知道这点（变换的过程中，Virtual DOM没有改变），可节省大量计算时间，所以用户可以通过 shouldComponentUpdate来判断是否需要判断计算。
> 不同类型的组件，将一个（将被改变的）组件判断为dirty component（脏组件），从而替换 整个组件的所有节点。

### element diff
> 当节点处于同一层级时，diff提供三种节点操作：删除、插入、移动。

# react setState的同步与异步
+ 由react引发的事件处理(onClick等),调用setState不会同步的去更新this.state。
+ 除此之外，绕过react从addEventListener或从setTimeout/setTimeInterval的setState调用会同步更新this.state
> 原因就是React中有一个isBatchingUpdates(默认false,React调用事件处理函数之前会通过batchingUpdate来把它改为true)变量来判断是直接更新this.state还是放到队列里后续处理
> 并且这里说的同步/异步并不是真正的同步异步，它本身还是同步执行的，这里的异步指的是多个state会合成到一起批量更细。即在事件内部和钩子函数中没法拿到立即更新的state的值,可以通过回调函数解决。

# setState笔试题
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
//0023