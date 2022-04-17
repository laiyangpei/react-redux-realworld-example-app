import React, { useState } from 'react';

function ListErrors(initialStatus) {

  const [errors] = useState(initialStatus.errors);
  const hasError = errors ? true : false
  return (
    hasError && <ul className="error-messages">
      {
        Object.keys(errors).map(key => {
          return (
            <li key={key}>
              {key} {errors[key]}
            </li>
          );
        })
      }
    </ul>
  );

}

export default ListErrors;
