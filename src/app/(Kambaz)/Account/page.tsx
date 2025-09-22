// This is the redirect page for signup 
import { redirect } from "next/dist/client/components/navigation";

export default function AccountPage() {
 redirect("/Account/Signin");
}
