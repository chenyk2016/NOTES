# react hooks

## useState

- 更新数据

## useEffect(update, [watchValues])

- 视图更新后执行，例如以前的 componentDidMount 和 componentDidUpdate
- useEffect可以返回一个新的函数。
  - 会在每次update前执行
  - 组件销毁之前执行

示例:

```javascript
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

## useContext(MyContext)

- MyContext: React.createContext返回的结果
- 返回的值是最接近的MyContext.Provider的props.value
- 当MyContext的值变化时，组件就会重新渲染
  - 性能优化方案:
  - <https://github.com/facebook/react/issues/15156#issuecomment-474590693>
  - 1. 将MyContext拆分成最小可变单位
  - 2. 用memo和useMemo包裹子组件，防止重新渲染

示例:

```javascript
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

性能优化方案memo

```javascript
function Button() {
  let appContextValue = useContext(AppContext);
  let theme = appContextValue.theme; // Your "selector"
  return <ThemedButton theme={theme} />
}

const ThemedButton = React.memo(({ theme }) => {
  // The rest of your rendering logic
  return <ExpensiveTree className={theme} />;
});
```

性能优化方案useMemo

```javascript
function Button() {
  let appContextValue = useContext(AppContext);
  let theme = appContextValue.theme; // Your "selector"

  return useMemo(() => {
    // The rest of your rendering logic
    return <ExpensiveTree className={theme} />;
  }, [theme])
}
```

## useReducer(reducer, initialState, initFunction)

- 小型的数据管管理功能那个，类似于redux
- 组件重新渲染时，数据不会变化
- 其实和自己在外面写一个数据管理一样，只是会hack下数据变化后的re-render

示例:

```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```

## useCallback(callback, dependencies: array)

- 依赖变化执行callback
- 类似vue的同事watch多个值

useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)

## useMemo(() => { return computeExpensiveValue(a, b) }, [a, b])

- 类似计算属性，返回一个计算后缓存的值
- 不要在里面进行其他逻辑处理
- 如果没有提供数组，则每次渲染都会计算一个新值。

## useRef(initialValue)

- 返回一个可变的ref Object，.current属性是绑定的当前值
- 用ref获取子元素
- 当re-render时，数据不变化

## useImperativeHandle

- 自定义向父元素公开的实例值ref

```javascript
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    // 返回的对象就是父元素调用的ref对象
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

## useLayoutEffect

- 在浏览器渲染之前，同步执行更新。useEffect在浏览器渲染之后才会执行。
- useLayoutEffect和useEffect在服务端均不会执行
- componentDidMount 和 componentDidUpdate 也是同步执行的
- useEffect则晚一个阶段执行
