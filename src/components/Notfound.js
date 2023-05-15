import React from 'react';

function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/">Go back to home</a>
      <style jsx>{`
        .container {
          margin: 0 auto;
          text-align: center;
          padding-top: 100px;
          max-width: 600px;
        }
        h1 {
          font-size: 72px;
          color: #333;
          margin-bottom: 20px;
          position: relative;
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }
        @keyframes shake {
          0% { left: -10px; }
          50% { left: 10px; }
          100% { left: -10px; }
        }
        p {
          font-size: 24px;
          margin-bottom: 40px;
        }
        .container a {
          display: inline-block;
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s;
        }
        a:hover {
          background-color: #666;
        }
        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 48px;
          }
          p {
            font-size: 18px;
          }
          a {
            font-size: 16px;
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default NotFound;
