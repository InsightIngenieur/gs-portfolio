import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface ContactFormProps {
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [closing, setClosing] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('/api/sendmail', data);
            console.log(response.data);
            setFeedbackMessage('Message sent successfully!');
            setIsError(false);
            reset(); // Reset form fields after successful submission
            setTimeout(() => {
                gracefulClose(); // Close the form modal after a delay
            }, 3000); // Delay in milliseconds
        } catch (error) {
            console.error('Failed to send message:', error);
            setFeedbackMessage('Failed to send message.');
            setIsError(true);
            setTimeout(() => {
                gracefulClose(); // Close the form modal after a delay
            }, 3000); // Delay in milliseconds
        }
    };

    const gracefulClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose(); // Actually close the modal
        }, 300); // This duration should match the CSS transition duration
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}>
            <div className="bg-[#141c27] p-8 rounded-lg w-1/2 min-h-1/2 text-white">
                <h2 className="text-lg font-bold mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your name"
                        className="block w-full mb-4 p-2 border border-gray-700 bg-gray-800"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
                    <input
                        {...register('email', {
                            required: 'Email is required', pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address'
                            }
                        })}
                        placeholder="Your email"
                        type="email"
                        className="block w-full mb-4 p-2 border border-gray-700 bg-gray-800"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
                    <textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder="Your message"
                        className="block w-full mb-4 p-2 border border-gray-700 bg-gray-800"
                        rows={4}
                    />
                    {errors.message && <p className="text-red-500">{errors.message.message as string}</p>}
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 px-6 py-3 rounded text-lg hover:bg-green-600 transition-colors duration-300">Send</button>
                        <button type="button" onClick={onClose} className="bg-gray-500 px-6 py-3 rounded text-lg hover:bg-red-600 transition-colors duration-300">Cancel</button>
                    </div>
                    {feedbackMessage && (
                        <p className={`mt-4 text-lg ${isError ? 'text-red-500' : 'text-green-500'}`}>
                            {feedbackMessage}
                        </p>
                    )}
                </form>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.linkedin.com/in/stackba" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
                        <FaLinkedin className="text-white hover:text-yellow-500 transition-colors duration-300" size={40} />
                    </a>
                    <a href="https://github.com/InsightIngenieur" target="_blank" rel="noopener noreferrer" aria-label="Check out my GitHub">
                        <FaGithub className="text-white hover:text-yellow-500 transition-colors duration-300" size={40} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm; 

