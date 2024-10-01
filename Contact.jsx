import React from 'react';


export default function ContactUs() {

  return (
    <div className="container" id='contactus' >
      <h2>Contact Us</h2>
      <p>
        Here you can provide contact information for TextGenie. Users can reach out for support,
        inquiries, or any other assistance.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h4>Our Contact Information</h4>
          <p>
            Address: 123 Main Street, Shivamogga, karnakata 577229<br />
            Phone: (+91) 8127463445<br />
            Email: textgenie.ops@yahoo.com
          </p>
        </div>
        <div className="col-md-6">
          <h4>Contact Form</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
