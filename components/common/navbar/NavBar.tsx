import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ConnectButton from "./wallet/ConnectButton";

export default function NavBar() {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : "";
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className={isActive("/")} data-cy="navbar-home-link">
        Home
      </Link>
      <Link
        href="/leaderboards"
        className={isActive("/leaderboards")}
        data-cy="navbar-leaderboards-link"
      >
        Leaderboards
      </Link>
      <Link
        href="/submit"
        className={isActive("/submit")}
        data-cy="navbar-submit-link"
      >
        Submit
      </Link>

      <ConnectButton />
    </nav>
  );
}
