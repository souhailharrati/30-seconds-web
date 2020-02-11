import React from 'react';
import Meta from 'atoms/meta';
import Shell from 'organisms/shell';
import SimpleCard from 'molecules/simpleCard';
import PageTitle from 'atoms/pageTitle';
import PageSubtitle from 'atoms/pageSubtitle';
import PropTypes from 'prop-types';
import _ from 'lang';
const _l = _('en');

// Used to produce a description
const templateData = {
  pageType: 'cookies',
};

/**
 * Renders the /cookies page.
 */
const CookiePage = ({
  pageContext: {
    logoSrc,
    splashLogoSrc,
  },
}) => {
  return (
    <>
      <Meta
        title={ _l('About') }
        logoSrc={ splashLogoSrc }
        description={ _l`site.pageDescription${templateData}` }
      />
      <Shell
        logoSrc={ logoSrc }
        isSearch={ false }
        isListing={ false }
      >
        <PageTitle>
          { _l('Cookie policy') }
        </PageTitle>
        <PageSubtitle isLight>
          { _l('Understand how we use cookies.') }
        </PageSubtitle>
        <SimpleCard title={ _l('What are cookies') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'What are cookies'}` }
          </p>
        </SimpleCard>
        <SimpleCard title={ _l('How we use cookies') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'How we use cookies'}` }
          </p>
        </SimpleCard>
        <SimpleCard title={ _l('Disabling cookies') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'Disabling cookies'}` }
          </p>
        </SimpleCard>
        <SimpleCard title={ _l('The cookies we set') }>
          <p><strong>{ _l('Site preference cookies') }</strong></p>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'Site preference cookies'}` }
          </p>
          <p><strong>{ _l('Third party cookies') }</strong></p>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'Third party cookies'}` }
          </p>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'Google Analytics cookies'}` }
          </p>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l('For more information on Google Analytics cookies, see the official Google Analytics page.') }
          </p>
        </SimpleCard>
        <SimpleCard title={ _l('More information') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { _l`m${'More information'}` }
          </p>
        </SimpleCard>
      </Shell>
    </>
  );
};

CookiePage.propTypes = {
  /** pageContext is passed from Gatsby to the page */
  pageContext: PropTypes.shape({
    /** URI for the logo image */
    logoSrc: PropTypes.string.isRequired,
    /** URI for the splash logo image */
    splashLogoSrc: PropTypes.string.isRequired,
  }),
};

export default CookiePage;
