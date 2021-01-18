import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ServicesData from './ServicesData';

function ServicesList() {
  const renderServices = ServicesData.map((services, i) => {
    return (
      <Fragment key={i}>
        <li>
          <Link to={`/services/${services['_id']}`}>{services.name}</Link>: $
          {services.price}
        </li>
      </Fragment>
    );
  });
  return (
    <div>
      <h1>Services List Page</h1>
      <ul>{renderServices}</ul>
    </div>
  );
}

export default ServicesList;
