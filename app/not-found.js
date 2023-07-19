import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource. Redirecting to homepage in 5s</p>
      <p style={{ color: "indigo" }}>
        <Link href="/">Go to homepage</Link>
      </p>
    </div>
  );
}
