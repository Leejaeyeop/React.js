import logo from "./logo.svg";
import "./App.css";
import React from "react";
// useSelector Hook-> useSelector Hook을 사용하면 Store의 데이터를 읽을 수 있다
// useDispatch Hook ->  Action을 Dispatch
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, change } from "./store/slice/counterSlice.js";
import useInputs from "./hooks/userInputs.js";
import AboutImpl from "./about/about.js";
// import About from ", useCallback./about/about";
import { memo, useMemo, useCallback, useState, Suspense } from "react";

// const AboutMemo = memo(AboutImpl);

function App() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "name",
    email: "email",
  });

  const count = useSelector((state) => state.counter.value);

  const [stateA, setStateA] = useState(50);
  const dispatch = useDispatch();

  const aboutText = useMemo(() => {
    return username;
  }, [username]);

  const [showLazy, setShowLazy] = useState(false);
  // 로딩 상태를 확인하기 위해, 테스트를 위한 지연값을 추가합니다.
  function delayForDemo(promise) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
  const LazyComponent = React.lazy(() =>
    delayForDemo(import("./components/lazyComponent.jsx"))
  );

  const aboutFunciton = useCallback((e) => console.log(e), []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <section>
            <button onClick={() => dispatch(decrement())}>1씩 감소</button>
            <button onClick={() => dispatch(change({ value: 100 }))}>
              100 변경
            </button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>1씩 증가</button>
          </section>
          {/* <section>
                        <Link to="/about"> About </Link>
                    </section> */}
          <section>
            {/* <AboutMemo text={aboutText} func={aboutFunciton}></AboutMemo> */}
            <Suspense fallback={<div>Loading...!</div>}>
              <AboutImpl text={aboutText} func={aboutFunciton}></AboutImpl>
            </Suspense>
          </section>
          <section>
            {showLazy && (
              <Suspense fallback={<div>Loading...!</div>}>
                <LazyComponent
                  text={aboutText}
                  func={aboutFunciton}
                ></LazyComponent>
              </Suspense>
            )}
            <button onClick={() => setShowLazy(!showLazy)}>show lazy</button>
          </section>
          <section>
            <input type="text" onChange={(e) => onChange(e)}></input>
            {username}
          </section>
          <section>
            <button onClick={() => setStateA((p) => p + 1)}>Pro!</button>
          </section>
          <article>
            <div>A</div>
            <div></div>
            <div>B</div>
          </article>
        </main>
      </header>
    </div>
  );
}

export default App;
