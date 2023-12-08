import logo from "./logo.svg";
import "./App.css";
// useSelector Hook-> useSelector Hook을 사용하면 Store의 데이터를 읽을 수 있다
// useDispatch Hook ->  Action을 Dispatch
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, change } from "./store/slice/counterSlice";
import { Link } from "react-router-dom";
import useInputs from "./hooks/userInputs";
import AboutImpl from "./about/about";
// import About from ", useCallback./about/about";
import { memo, useMemo, useCallback } from 'react';

const About = memo(AboutImpl)

function App() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: "name",
        email: "email",
    });

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const aboutText = useMemo(() => {
        return username
    }, [username]);

    // const aboutFunciton = useCallback((e) => console.log(e),[])
    const aboutFunciton = (e) => {console.log(e)}


    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
                <main>
                    <section>
                        <button onClick={() => dispatch(decrement())}>1씩 감소</button>
                        <button onClick={() => dispatch(change({value:100}))}>100 변경</button>
                        <span>{count}</span>
                        <button onClick={() => dispatch(increment())}>1씩 증가</button>
                    </section>
                    {/* <section>
                        <Link to="/about"> About </Link>
                    </section> */}
                    <section>
                        <About text={aboutText} func={aboutFunciton}></About>
                    </section>
                    <section>
                        <input
                            type="text"
                            onChange={(e) => onChange(e)}
                        ></input>
                        {username}
                    </section>
                    <section>{email}</section>
                </main>
            </header>
        </div>
    );
}

export default App;
