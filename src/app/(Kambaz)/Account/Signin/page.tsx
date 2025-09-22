import Link from "next/link";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input type="text" placeholder="Username" className="wd-username" /> <br />
            <input type="password" placeholder="Password" className="wd-password" /> <br />
            <Link href="Profile" id="wd-singin-btn"> Sign in </Link> <br />
            <Link href="Signup" id="wd-signup-link"> Sign up </Link>
        </div>
    );
}