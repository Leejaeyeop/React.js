import logo from "../logo.svg";
import "../App.css";
// useSelector Hook-> useSelector Hook을 사용하면 Store의 데이터를 읽을 수 있다
// useDispatch Hook ->  Action을 Dispatch
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slice/counterSlice";
import { Link } from "react-router-dom";

function About() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
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
                        <span>{count}</span>
                        <button onClick={() => dispatch(increment())}>1씩 증가</button>
                    </section>
                    <section>
                        <Link to="/about"> About </Link>
                    </section>
                </main>
            </header>
        </div>
    );
}

export default About;
