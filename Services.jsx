import React from "react";

export default function Services() {

  const arr = [1, 2, 1, 2, 3];
  const removedub = [...new Set(arr)];
  console.log(removedub);
  
  return (

    <div id="services" className=" container mt-5">
      <h2>Our Services</h2>
      
      <p>
        At TextGenie, we provide a range of text-related services to enhance
        your productivity and content creation:
      </p>

      <ul>
        <li>Text Analysis and Optimization</li>
        <li>Text Formatting and Conversion</li>
        <li>Word and Character Count Tools</li>
        <li>Textual Data Insights</li>          
         <li>Content Management Solutions</li>
      </ul>

      <p>
        Whether you need to analyze text, convert case, manage content
        efficiently, or improve readability, TextGenie is here to assist you
        with our comprehensive suite of services.
      </p>
    </div>
  );


}
