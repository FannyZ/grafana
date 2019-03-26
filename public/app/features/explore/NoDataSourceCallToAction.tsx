import React, { useContext } from 'react';
import { css } from 'emotion';
import { ThemeContext, ExtraLargeLinkButton, CallToActionCard } from '@grafana/ui';

export const NoDataSourceCallToAction = () => {
  const theme = useContext(ThemeContext);

  const message = 'Please add a datasource that supports Explore (e.g., Prometheus)';
  const footer = (
    <>
      <i className="fa fa-rocket" />
      <> ProTip: You can also define data sources through configuration files. </>
      <a
        href="http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list"
        target="_blank"
        className="text-link"
      >
        Learn more
      </a>
    </>
  );

  const ctaElement = (
    <ExtraLargeLinkButton href="/datasources/new" icon="gicon gicon-add-datasources">
      Add data source
    </ExtraLargeLinkButton>
  );

  const cardClassName = css`
    max-width: ${theme.breakpoints.lg};
  `;

  return (
    <CallToActionCard
      callToActionElement={ctaElement}
      className={cardClassName}
      footer={footer}
      message={message}
      theme={theme}
    />
  );
};
