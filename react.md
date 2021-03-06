# React Hooks
> Hooks时React的一个新特性,支持在函数组件中使用state.
## hooks解决的问题
+ 状态逻辑的复用便捷，还有代码的简洁，以及帮助函数组件增强功能.

# 高阶组件 (就是一个React组件包含另一个React组件)
> 高阶组件的思路是函数式的，核心就是对组件进行扩展。就是定义一个Enhance(扩展)函数，接受一个组件并对其进行扩展后返回一个新的组件。
> 可以进行多次扩展，及级联扩展,用一个Enhance方法，这个方法接受一个组件作为参数，并且为传入的组件进行扩展。在这个扩展的过程中可以在高阶组件中定义一些会共用到的的逻辑
```
 const newComponent = Enhance1(Enhance2(Enhance3(originComponent)))
```
```
import { Component } from React;
const Enhance = (originComponent) => class extends Component {
    constructor() {
        this.state = {
            data: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    componentDidMounted() {
        this.setState({ data: '获取接口返回的数据' });
    }

    onChange(event) {
        this.setState({
            data: event.target.value
        })
    }

    render () {
        return <HigherComponent { ...this.props } data={this.state.data} onchange={this.onCHange} /> 
    }
}

export default Enhance;

import Enhance from './Enhance';
class Mycomponent extends React.Component {
    render () {
        <div>
            {this.props.data && <h1>hello {this.props.data}</h1>}
        </div>
    }
}

export default Enhance(Mycomponent)

```
## 两种主流的实现高阶组件的方法，属性代理(props proxy)和反向继承(inheritance inversion)

### 属性代理
```
function enhance (wrappedComponent) {
    return class extends React.Component {
        render() {
            return <WrapperComponent {...this.props}>
        }
    }
}
```
> 在这里我们把高阶组件所获取到的Props传递给被包装的组件，因此叫属性代理
+ 更改props 即可以在高阶组件内增删改查传递给被包装组件的props
+ 通过refs获取组件实例
```
function refsHoc(wrappedComponent) {
    proc(wrappedComponentInstance) { //获取被包装组件的实例
        wrappedComponentInstance.method(); //调用被包装组件的方法
    }
    return class extends React.Component {
        const props = Object.assgin({}, this.props, { ref: this.props.bind(this) })
        return <WrappedComponent {this.props}>
    }
}
```
+ 抽象state(代码见上方)
+ 将被包装组件和其他的元素进行组合
```
function enhance(wrappedComponent) {
    return class extends React.Componengt {
        render () {
            return (
                <div id='root'>
                    <WrappedComponent {...this.props}>
                </div>
            )
        }
    }
}
```

### 反向继承
> 使用高阶组件去继承传入的组件
```
function iiHoc(wrappedComponent) {
    return class extends wrappedComponent {
        render() {
            return super.render()
        }
    }
}
```