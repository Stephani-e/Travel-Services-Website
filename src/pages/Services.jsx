import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styling/Services.css';
import ServiceCard from '../components/ServiceCards.jsx';
import { servicesData } from '../Data/ServicesData.jsx';
import { motion as Motion } from 'framer-motion';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Debounce effect for search input (wait 400ms after typing stops)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const categories = ['All', ...new Set(servicesData.map(group => group.category))];

  const filteredData = servicesData
    .filter(group => selectedCategory === 'All' || group.category === selectedCategory)
    .map(group => ({
      ...group,
      items: group.items.filter(service =>
        service.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      ),
    }))
    .filter(group => group.items.length > 0);

  return (
    <div className="services-section">
      <h1 className="services text-center">Our Travel Services</h1>

      {/* Category filter buttons */}
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search input */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Service groups */}
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">No services found.</p>
      ) : (
        filteredData.map(({ category, items }) => (
          <div key={category} className="mb-10">
            <h2>{category}</h2>
            <div className="services-row">
              {items.map(({ id, icon, title, description }) => (
                <Motion.div
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: id * 0.03 }}
                >
                  <ServiceCard icon={icon} title={title} description={description} />
                </Motion.div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
