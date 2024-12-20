import React from "react";

const Filter = ({ categories, handleCtgChange }) => {
  const renderCateg = categories.map((ctg) => {
    return (
      <label key={ctg} data-testid="cate-label">
        {ctg}
        <input
          type="checkbox"
          value={ctg}
          onChange={() => handleCtgChange(ctg)}
        />
      </label>
    );
  });
  return <form role="form">{renderCateg}</form>;
};

export default Filter;
