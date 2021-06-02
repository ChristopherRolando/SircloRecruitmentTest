import React from "react";

function Text({ text, description,Icon }) {
  return (
    <div>
        <h3 style={{margin:'10px'}}>{text}{Icon && <Icon />}</h3>
        <h5 className="description" style={{color:'gray',margin:'10px'}}>{description}</h5>
    </div>
  );
}

export default Text;