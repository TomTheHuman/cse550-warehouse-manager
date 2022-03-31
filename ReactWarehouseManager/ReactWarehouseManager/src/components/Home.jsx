import React, { useEffect } from 'react';
import '../styles/Home.scss';

export default function Inventory(props) {
  const { user, navigate, setTitle } = props;

  useEffect(() => {
    setTitle('Home');
    if (!user || user.type !== 'admin') {
      navigate('/404');
    }
  }, [props]);

  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to Warehouse Manager</h1>
        <h2>
          You are logged in as
          {' '}
          {user.username}
        </h2>
      </div>
    </div>
  );
}
