import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/Account/Signin");
}
