import ReactPlayer from 'react-player';
import Header from '../../components/Header';

import { useAuth } from '../../hooks/auth';
import { useSignMenu } from '../../hooks/toggle';

import { Container } from './styles';

export function Dashboard() {
  const { handleChangeActivatedMenu } = useSignMenu();
  handleChangeActivatedMenu('dashboard');

  const { user } = useAuth()

  return (
    <Container>
      <Header />
 
        <ReactPlayer url='https://youtu.be/c48GPksiGDo' loop={true} controls={true} width='100%' height="100%" />
      
    </Container>
  );
};

export default Dashboard;
