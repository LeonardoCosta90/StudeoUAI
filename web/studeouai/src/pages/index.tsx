import { Button } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/HeaderHome';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>StudeoUAI</title>
      </Head>
      <Header/>
      <main className={styles.contentContainer}>
        
        <section className={styles.hero}>
          <span>👏 Olá, seja bem vindo(a)</span>

          <h1>
           Pronto para utilizar realidade virtual em suas aulas práticas?
          </h1>

          <p>
            Embarque nesse foquete <br />
            <span>🚀</span>
          </p>

          <Button
            type="submit"
            mt="6"
            colorScheme="purple"
            size="lg"
          >
            ENTRAR
          </Button>
        </section>
        <img  src="/images/avatar.svg" width="640" alt="Virtual Reality" />
      </main>
    </>
  );
}
