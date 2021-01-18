import { render } from '@testing-library/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './ServicesData';

function ServiceDetail(props) {
  const { serviceId } = useParams();
  const renderService = servicesData.find(
    (service) => service._id === serviceId
  );

  return (
    <>
      <h1>Service Detail Page</h1>
      <ul>
        <li>name: {renderService.name}</li>
        <li>price: {renderService.price}</li>
        <li>description: {renderService.description}</li>
      </ul>
    </>
  );
}

export default ServiceDetail;
