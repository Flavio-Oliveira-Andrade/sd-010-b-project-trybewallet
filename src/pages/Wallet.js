import React from 'react';
import Header from '../components/componentswallet/Header';

function Wallet() {
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [cambio, setCambio] = useState('BRL');
  const emailUser = useSelector((state) => state.user.email);
  return (
    <Header />
  );
}

export default Wallet;
