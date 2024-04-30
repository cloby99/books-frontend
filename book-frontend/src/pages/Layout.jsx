import React from 'react';

const Layout = ({ isLoading, isAuthenticated, children }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;