import { useEffect, useState } from 'react';
import classes from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';

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

  const links = data.map(({link, label}) => (
    <Link
      className={classes.link}
      data-active={link === active || undefined}
      href={link}
      key={label}
    >
    <span>{label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>
    </nav>
  );
}