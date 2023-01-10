import { useState } from 'react';
import { Input } from '../../Ui';
import { icon } from '../constanst';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-2" src={icon} alt="" width="72" height="60" />
                    <h1 className="h3 mb-3 fw-normal">Please login</h1>
                    <Input
                        type={"email"}
                        label={"Email address"}
                        bId={"floatingEmail"}
                        state={email}
                        setState={setEmail} />
                    <Input
                        type={"password"}
                        label={"Password"}
                        bId={"floatingPassword"}
                        state={password}
                        setState={setPassword} />
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">©2022-2023</p>
                </form>
            </main>
        </div>
    );
}

export default Login;