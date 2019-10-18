import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { Divider } from 'semantic-ui-react';

const Layout = props => {
  const headerRef = useRef();
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  useEffect(() => {
    location.pathname !== '/' &&
      headerRef.current.scrollIntoView();
  }, [location]);

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          fontSize: '30px',
          marginBottom: '20px',
          marginTop: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontSize: '30px',
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <header>{header}</header>

      <main ref={headerRef}>{children}</main>

      <footer style={{ fontSize: '14px' }}>
        <Divider />
        <p>
          <strong>Note on answer data persistence: </strong>
          Your answers to these quiz questions are stored
          locally in your browser's local storage. This
          means your answers will likely disappear
          eventually (e.g., when you clear browser data).
        </p>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
