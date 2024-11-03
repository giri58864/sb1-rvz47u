import React from 'react';
import { User } from 'lucide-react';

export default function ConsultExperts() {
  const experts = [
    {
      name: 'Adv. Priya Sharma',
      specialization: 'Corporate Law',
      experience: '15 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200'
    },
    {
      name: 'Adv. Rajesh Kumar',
      specialization: 'Property Law',
      experience: '12 years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200'
    },
    {
      name: 'Adv. Meera Patel',
      specialization: 'Employment Law',
      experience: '10 years',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Consult Legal Experts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{expert.name}</h3>
                  <p className="text-gray-600">{expert.specialization}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold">Experience:</span> {expert.experience}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Rating:</span> {expert.rating}/5.0
                </p>
              </div>

              <div className="space-y-2">
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition">
                  Book Consultation
                </button>
                <button className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}