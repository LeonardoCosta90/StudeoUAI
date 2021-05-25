  
import { ActiveLink } from '../ActiveLink';
import { Logo } from '../Header/Logo';


import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
       <Logo/>        
      </div>
    </header>
  );
}