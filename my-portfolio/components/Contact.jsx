import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (name === 'email' && !validateEmail(value)) {
      // Show an error message for invalid email
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);

      // Display success message and clear form
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <section id="contact" style={{ padding: '2rem' }}>
      <h2>Contact Me</h2>
      {successMessage && (
        <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block', width: '100%', margin: '0.5rem 0' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block', width: '100%', margin: '0.5rem 0' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            style={{ display: 'block', width: '100%', margin: '0.5rem 0' }}
          ></textarea>
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
