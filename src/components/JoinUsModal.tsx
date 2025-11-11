import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinUsModal: React.FC<JoinUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    experienceLevel: '',
    currentBrokerage: '',
    switchTiming: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here to send data to backend
    alert('Thank you for your interest! We will contact you soon.');
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      experienceLevel: '',
      currentBrokerage: '',
      switchTiming: '',
      notes: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-slate-900">Join RE/MAX Excellence</DialogTitle>
          <DialogDescription className="text-slate-600">
            Fill out the form below and we'll get in touch with you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-semibold">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
              className="w-full"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full"
            />
          </div>

          {/* Experience Level */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              What is your experience level? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.experienceLevel}
              onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="brand-new" id="brand-new" />
                <Label htmlFor="brand-new" className="font-normal cursor-pointer">Brand new</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-2-years" id="1-2-years" />
                <Label htmlFor="1-2-years" className="font-normal cursor-pointer">1-2 years</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-5-years" id="3-5-years" />
                <Label htmlFor="3-5-years" className="font-normal cursor-pointer">3-5 years</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5-plus-years" id="5-plus-years" />
                <Label htmlFor="5-plus-years" className="font-normal cursor-pointer">5+ years</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Current Brokerage */}
          <div className="space-y-2">
            <Label htmlFor="currentBrokerage" className="text-sm font-semibold">
              What is your current brokerage?
            </Label>
            <Input
              id="currentBrokerage"
              type="text"
              placeholder="Enter your current brokerage"
              value={formData.currentBrokerage}
              onChange={(e) => setFormData({ ...formData, currentBrokerage: e.target.value })}
              className="w-full"
            />
          </div>

          {/* Switch Timing */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">
              When are you planning to switch? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.switchTiming}
              onValueChange={(value) => setFormData({ ...formData, switchTiming: value })}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="immediately" id="immediately" />
                <Label htmlFor="immediately" className="font-normal cursor-pointer">Immediately</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-3-months" id="1-3-months" />
                <Label htmlFor="1-3-months" className="font-normal cursor-pointer">1-3 months</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-6-months" id="3-6-months" />
                <Label htmlFor="3-6-months" className="font-normal cursor-pointer">3-6 months</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-semibold">
              Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Any additional information you'd like to share..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold py-3"
            >
              Submit Application
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinUsModal;
