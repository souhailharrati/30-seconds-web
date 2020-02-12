import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from 'molecules/navBar';
import Footer from 'molecules/footer';
import CookieConsentPopup from 'molecules/cookieConsentPopup';
import { useMedia } from 'functions/hooks';
import { trimWhiteSpace } from 'functions/utils';
import _ from 'lang';
import { toggleDarkMode, decideCookies } from 'state/shell';
const _l = _('en');
import config from '../../../config';
import { Anchor } from 'atoms/anchor';
import env from '../../../.build/env';

// eslint-disable-next-line complexity
const Shell = ({
  isDarkMode,
  acceptsCookies,
  isSearch,
  isListing,
  isSnippet,
  dispatch,
  withIcon = true,
  withTitle = true,
  logoSrc,
  lastPageTitle,
  lastPageUrl,
  externalUrl = config.repositoryUrl,
  children,
}) => {
  const darkModeEnabledInitially = useMedia(
    ['(prefers-color-scheme: dark)', '(prefers-color-scheme: light)'],
    [true, false],
    false
  );

  useEffect(() => {
    if (darkModeEnabledInitially && isDarkMode === undefined)
      dispatch(toggleDarkMode(true));
  }, []);

  return (
    <div
      className={ trimWhiteSpace`page-container ${isDarkMode ? 'dark' : ''}` }
    >
      {
        typeof acceptsCookies === 'undefined' && env === 'PRODUCTION' ?
          <CookieConsentPopup
            onAccept={ e => {
              e.preventDefault();
              dispatch(decideCookies(true));
            } }
            onDecline={ e => {
              e.preventDefault();
              dispatch(decideCookies(false));
            } }
          />
          : null
      }
      <NavBar
        isSearch={ isSearch }
        isSnippet={ isSnippet }
        isListing={ isListing }
        buttons={ [
          {
            icon: isDarkMode ? 'sun' : 'moon',
            link: {
              internal: false,
              url: '#',
              rel: 'nofollow',
              title: isDarkMode ? _l('Switch to light mode') : _l('Switch to dark mode'),
            },
            onClick: e => {
              e.preventDefault();
              dispatch(toggleDarkMode(!isDarkMode));
            },
          },
        ] }
        logoLink={ {
          internal: true,
          url: '/',
        } }
        logoSrc={ logoSrc }
      >
      </NavBar>
      <div className='content'>
        { children }
        <Footer />
      </div>
    </div>
  );
};

Shell.propTypes = {
  /** Children elements */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Should dark mode be applied? */
  isDarkMode: PropTypes.bool,
  /** Does the user accept cookies? */
  acceptsCookies: PropTypes.bool,
  /** Is this a search page? */
  isSearch: PropTypes.bool,
  /** Is this a list page? */
  isListing: PropTypes.bool,
  /** Dispatch function of the Redux stotre */
  dispatch: PropTypes.func,
  /** Should render an icon? */
  withIcon: PropTypes.bool,
  /** Should render a title? */
  withTitle: PropTypes.bool,
  /** URI for the logo image */
  logoSrc: PropTypes.string,
  /** URL of the external resource to link to */
  externalUrl: PropTypes.string,
  /** Title of the last page */
  lastPageTitle: PropTypes.string,
  /** URL of the last page */
  lastPageUrl: PropTypes.string,
};

export default connect(
  state => ({
    isDarkMode: state.shell.isDarkMode,
    lastPageTitle: state.navigation.lastPageTitle,
    lastPageUrl: state.navigation.lastPageUrl,
    acceptsCookies: state.shell.acceptsCookies,
  }),
  null
)(Shell);
