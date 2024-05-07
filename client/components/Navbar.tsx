import { useEffect, useState } from 'react';
import classes from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';
// import Image from 'next/image'
// import logoIcon from '../public/assets/icons/logo.svg';

const data = [
  { link: '/', label: 'Movies' },
  { link: '/rated', label: 'Rated movies' },
];

export default function Navbar() {
  const router = useRouter()
  const [active, setActive] = useState('/');

  useEffect(() => {
    setActive(router.pathname);
  }, [router.query.value]);

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src="/assets/icons/logo.svg" alt="" />
        <span>ArrowFlicks</span>
      </div>
      <nav className={classes.menu}>
        {
          data.map(({ link, label }) => (
            <Link
              className={classes.link}
              data-active={link === active || undefined}
              href={link}
              key={label}
            >
              <span>{label}</span>
            </Link>
          ))
        }
      </nav>
    </div>
  );
}