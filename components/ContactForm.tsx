
import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.captcha) {
        alert("Please fill all required fields and check the CAPTCHA.");
        return;
    }
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay (optional)
    setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '', captcha: false });
        setIsSubmitted(false); // Allow new submissions
    }, 5000);
  };

  if (isSubmitted) {
    return (
        <div className="bg-exergy-green text-white p-8 md:p-10 rounded-xl shadow-2xl text-center">
            <h3 className="text-2xl font-bold font-heading mb-3">Thank You!</h3>
            <p className="font-sans">Your quote request has been sent. We will get back to you shortly.</p>
        </div>
    );
  }

  return (
    <div className="bg-exergy-dark-card p-8 md:p-10 rounded-xl shadow-2xl">
      <h3 className="text-2xl font-bold font-heading text-white mb-2">Get A Quote Now!</h3>
      <p className="text-exergy-text-medium mb-8 font-sans text-sm">We Are Here to Help</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-exergy-text-medium mb-1 uppercase tracking-wider">Your Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-exergy-dark-input text-exergy-text-light border border-gray-700 rounded-md focus:ring-2 focus:ring-exergy-green focus:border-exergy-green font-sans" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-exergy-text-medium mb-1 uppercase tracking-wider">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-exergy-dark-input text-exergy-text-light border border-gray-700 rounded-md focus:ring-2 focus:ring-exergy-green focus:border-exergy-green font-sans" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-exergy-text-medium mb-1 uppercase tracking-wider">Phone</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-exergy-dark-input text-exergy-text-light border border-gray-700 rounded-md focus:ring-2 focus:ring-exergy-green focus:border-exergy-green font-sans" />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-exergy-text-medium mb-1 uppercase tracking-wider">Message</label>
          <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-4 py-3 bg-exergy-dark-input text-exergy-text-light border border-gray-700 rounded-md focus:ring-2 focus:ring-exergy-green focus:border-exergy-green font-sans"></textarea>
        </div>
        <div className="bg-exergy-dark-input p-4 rounded-md border border-gray-700">
            <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="captcha" checked={formData.captcha} onChange={handleChange} required className="form-checkbox h-5 w-5 text-exergy-green bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-exergy-green focus:ring-offset-exergy-dark-input" />
                <span className="text-exergy-text-light font-sans text-sm">I'm not a robot</span>
            </label>
            <div className="text-xs text-gray-500 mt-1.5 ml-[calc(1.25rem+0.75rem)] font-sans"> 
                {/* 1.25rem for checkbox, 0.75rem for space-x-3 */}
                reCAPTCHA <a href="#" className="underline hover:text-exergy-green">Privacy</a> - <a href="#" className="underline hover:text-exergy-green">Terms</a>
            </div>
        </div>
        <Button type="submit" variant="primary" className="w-full !py-3.5 text-base">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
