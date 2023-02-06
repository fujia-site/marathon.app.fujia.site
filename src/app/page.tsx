// import Image from 'next/image';
// import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ol>
          <li>
            <Link href="/user">Add User</Link>
          </li>
          <li>
            <Link href="/user/list">User List</Link>
          </li>
        </ol>
      </nav>
    </main>
  );
}
