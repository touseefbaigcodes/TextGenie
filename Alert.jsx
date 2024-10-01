import React from 'react';

export default function Alert(props) {
  const capitalized = (word) => {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div id='alert' style={{ height: "50px" }}>
      {props.message &&
        <div className={`alert alert-${props.message.tp} alert-dismissible fade show`} role="alert">
          <strong>{capitalized(props.message.tp)}</strong> {props.message.msg}
        </div>}
    </div>
  );
}