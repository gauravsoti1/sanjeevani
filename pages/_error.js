import React from 'react';

function Error({ statusCode, message }) {
  console.log('error is', message);
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res ? res.statusCode : err ? err.message : 'empty';
  return { statusCode, message };
};

export default Error;
