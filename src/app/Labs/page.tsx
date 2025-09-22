import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs - Table of Contents</h1>
      <p>Ella Pitts</p>
      <p>CS5610 Web Development - Section 04</p>
      
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/Kambaz/Account/Signin" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
      <h3>Links</h3>
     <ul>
        <li><Link href="/Account/Signin">Kambaz Application</Link></li>
        <li><a href="https://github.com/ellapitts/kambaz-next-js" id="wd-github">Ella Pitts' GitHub Repository</a></li>
      </ul>
    </div>
  );
}