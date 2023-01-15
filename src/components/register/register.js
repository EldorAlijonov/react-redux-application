import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../Ui';
import { icon } from '../constanst'
import {registerUserStart} from '../../slice/auth'
const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);


    console.log(isLoading);

    const registerHandler = (e) => {
        e.preventDefault()
        dispatch(registerUserStart())
    }

    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-2" src={icon} alt="" width="72" height="60" />
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <Input
                        label={"User name"}
                        bootstrapId={"floatingUser"}
                        state={name}
                        setState={setName} />
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
                        onClick={registerHandler}
                    >
                        {isLoading ? 'loading...' : 'Login'}
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Register;