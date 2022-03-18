import React from "react";

function CategoryFilter( { CATEGORIES, setFiltered, filtered }) {

  function handleClick (category) {
    const filterBy = CATEGORIES.filter(cat => cat === category).toString()
    setFiltered(filterBy)
  }

  const catList = CATEGORIES.map(category => {
    return <button 
    className={filtered === category.toString() ? "selected" : ""} 
    onClick={() => handleClick(category)} 
    key={category}>{category}</button>
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catList}
    </div>
  );
}

export default CategoryFilter;
