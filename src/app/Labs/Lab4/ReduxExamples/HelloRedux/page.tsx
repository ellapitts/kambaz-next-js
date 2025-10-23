import { useSelector, useDispatch } from "react-redux";
export default function HelloReudx() {
    const { message } = useSelector((state: any) => state.helloReducer);
    return (
        <div id="wd-hello-redux">
            <h3>Hello Redux</h3>
            <h4>{message}</h4>
            <hr/>
        </div>
    );
}