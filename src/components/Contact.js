import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
	
    const newErrors = {};
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    setErrors(newErrors);

    // Perform form submission logic here, e.g., sending the data to the server
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <div className="contact_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="contact_bg">
              <div className="input_main">
                <div className="container">
                  <h2 className="request_text">REQUEST A CALL BACK</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
					   {errors.name && <span style={{ color: 'blue' }}>{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span style={{ color: 'blue' }}>{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="massage-bt"
                        placeholder="Message"
                        rows="5"
                        id="comment"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit">SEND</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 padding_0">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
