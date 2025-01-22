import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FilterForm from './components/FilterForm';
import InventoryTable from './components/InventoryTable';
import Footer from './components/Footer';

function Inventory() {
  // State to hold the filter data
  const [filterData, setFilterData] = useState({
    warehouseCode: '',
    productCode: '',
    quantityOnHand: undefined,
    quantityAvailable: undefined,
    quantityAllocated: undefined,
    cost: undefined,
    price: undefined
  });
  

  // Handler to update the filter state
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    
    // List of fields that should be treated as numbers
    const numericFields = ['quantityOnHand', 'quantityAvailable', 'quantityAllocated', 'cost', 'price'];
    
    setFilterData({
      ...filterData,
      [name]: numericFields.includes(name) 
        ? value === '' ? undefined : parseFloat(value) || undefined 
        : value
    });
  };
  
  

  return (
    <div>
      <Header />
      <Navbar />
      <FilterForm 
        filterData={filterData}
        handleFilterChange={handleFilterChange} 
      />
      <InventoryTable filterData={filterData} />
      <Footer/>
    </div>
  );
}

export default Inventory;
