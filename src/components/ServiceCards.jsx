import React from 'react';
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion';
import './styles/ServiceCards.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;