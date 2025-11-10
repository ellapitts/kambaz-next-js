"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import users from "../../Database/users.json";
import { setCurrentUser } from "../reducer";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const [error, setError] = useState("");

  // The function gets called when the button is clicked
  const signin = () => {
    console.log("credentials:", credentials);
    console.log("db.users:", users);
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    console.log("found user:", user);
    if (!user) {
      setError("Invalid username or password.");
      return;
    }
    setError("");
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };
  

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        value={credentials.username || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="username"
        id="wd-username"
      />
      <FormControl
        value={credentials.password || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        Sign in
      </Button>

      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
