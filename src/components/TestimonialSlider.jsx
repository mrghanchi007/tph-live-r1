import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar } = FiIcons;

const TestimonialSlider = ({ testimonials }) => {
  // Always use English for testimonials
  const text = {
    age: "Age",
    location: "from",
    stars: "stars"
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">
                  {text.age}: {testimonial.age}, {text.location} {testimonial.location}
                </p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
              ))}
              <span className="ml-1 text-sm text-gray-600">{testimonial.rating} {text.stars}</span>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;