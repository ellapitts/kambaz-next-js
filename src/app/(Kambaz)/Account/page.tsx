// This is the redirect page for signup 
import { redirect } from "next/navigation";

export default function AccountPage() {
 redirect("/Account/Signin");
}
