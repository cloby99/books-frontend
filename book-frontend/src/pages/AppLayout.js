import React from 'react';

const AppLayout = ({ isLoading, isAuthenticated, children }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default AppLayout;
