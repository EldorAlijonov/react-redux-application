import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../Ui';
import { icon } from '../constanst';
import { signUserFailure, signUserStart, signUserSuccess } from '../../slice/auth'
import AuthServices from '../../services/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);


    const loginHandler = async (e) => {
        e.preventDefault()
        dispatch(signUserStart());

        const user = { email, password }

        try {
            const response = await AuthServices.userLogin(user)
            dispatch(signUserSuccess(response.user));
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors));
        }
    }

    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-2" src={icon} alt="" width="72" height="60" />
                    <h1 className="h3 mb-3 fw-normal">Please login</h1>
                    <Input
                        type={"email"}
                        label={"Email address"}
                        bootstrapId={"floatingEmail"}
                        state={email}
                        setState={setEmail} />
                    <Input
                        type={"password"}
                        label={"Password"}
                        bootstrapId={"floatingPassword"}
                        state={password}
                        setState={setPassword} />
                    <button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"
                        disabled={isLoading}
                        onClick={loginHandler}
                    >
                        {isLoading ? 'loading...' : 'Login'}
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Login;