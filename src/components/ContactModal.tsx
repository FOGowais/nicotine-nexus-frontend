import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    productInterest: '',
    expectedVolume: '',
    projectDetails: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-screen overflow-y-auto bg-base-grey/95 backdrop-blur-lg border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-deep-navy text-center">
            Ready to Partner With Us?
          </DialogTitle>
          <p className="text-cool-grey text-center">
            Get started with a custom quote, sample request, or schedule a virtual factory tour. 
            Our team is ready to bring your nicotine pouch vision to life.
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-deep-navy mb-4">Request a Quote</h3>
              <p className="text-cool-grey mb-6">
                Fill out the form below and our team will prepare a detailed proposal within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Select onValueChange={value => handleInputChange('role', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ceo">CEO/Founder</SelectItem>
                        <SelectItem value="product">Product Manager</SelectItem>
                        <SelectItem value="procurement">Procurement</SelectItem>
                        <SelectItem value="rd">R&D</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="productInterest">Product Interest</Label>
                    <Select onValueChange={value => handleInputChange('productInterest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mint">Mint & Menthol</SelectItem>
                        <SelectItem value="fruit">Fruit Flavors</SelectItem>
                        <SelectItem value="tobacco">Tobacco-Free</SelectItem>
                        <SelectItem value="custom">Custom Formulation</SelectItem>
                        <SelectItem value="all">All Products</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="expectedVolume">Expected Volume</Label>
                    <Select onValueChange={value => handleInputChange('expectedVolume', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select volume range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500k-1m">500K - 1M pouches</SelectItem>
                        <SelectItem value="1m-5m">1M - 5M pouches</SelectItem>
                        <SelectItem value="5m-10m">5M - 10M pouches</SelectItem>
                        <SelectItem value="10m+">10M+ pouches</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectDetails">Project Details</Label>
                  <textarea id="projectDetails" className="w-full p-3 border border-gray-200 rounded-lg resize-none h-24" placeholder="Tell us about your project, timeline, target markets, and any specific requirements..." value={formData.projectDetails} onChange={e => handleInputChange('projectDetails', e.target.value)} />
                </div>

                <Button type="submit" className="w-full btn-primary hover:scale-105">
                  Submit Quote Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information & Virtual Tour */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-deep-navy mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-deep-navy">Headquarters</h4>
                  <p className="text-cool-grey">123 Manufacturing Drive<br />Stockholm, Sweden 12345</p>
                </div>
                <div>
                  <h4 className="font-medium text-deep-navy">Sales Team</h4>
                  <p className="text-cool-grey">+46 8 123 4567<br />sales@corbettlabs.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-deep-navy">Technical Support</h4>
                  <p className="text-cool-grey">+46 8 123 4568<br />technical@corbettlabs.com</p>
                </div>
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="bg-gradient-to-br from-accent-blue to-sky-glow rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Schedule a Virtual Tour</h3>
              <p className="text-sm mb-4 text-white/90">
                See our state-of-the-art facilities and meet our team through a live virtual tour.
              </p>
              <Button className="w-full bg-white text-accent-blue hover:bg-white/90">
                Book Factory Tour
              </Button>
            </div>

            {/* Quick Actions */}
            
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default ContactModal;