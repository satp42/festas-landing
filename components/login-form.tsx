"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    fleetSize: "",
    industryType: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });
  
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format the phone number based on length
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    if (id === 'email') {
      // Validate email as user types
      const isValidEmail = EMAIL_REGEX.test(value);
      setErrors(prev => ({
        ...prev,
        email: value && !isValidEmail ? "Please enter a valid email address" : ""
      }));
      
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    } else if (id === 'phone') {
      // Format phone number as user types
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [id]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };
  
  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", phone: "" };
    
    // Validate email
    if (formData.email && !EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    // Update error state
    setErrors(newErrors);
    
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Validate email format
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }
      
      // Redirect to homepage with success parameter
      router.push('/?success=true');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to join waitlist');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-white/90 dark:bg-slate-950/80 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-white/20 dark:border-slate-800/50 transform hover:translate-y-[-2px] transition-all duration-300 relative z-10 before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_15px_rgba(125,211,252,0.15)] before:dark:shadow-[0_0_15px_rgba(56,189,248,0.15)] before:z-[-1]">
        <CardHeader>
          <CardTitle>Be part of the Festas family</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Join the waiting list to get early access to the app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="ABC Logistics Inc."
                  className="bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="industryType">Industry</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('industryType', value)}
                  defaultValue={formData.industryType}
                >
                  <SelectTrigger className="bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 w-full">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trucking">Trucking & Transportation</SelectItem>
                    <SelectItem value="waste">Waste Management</SelectItem>
                    <SelectItem value="logistics">Logistics & Warehousing</SelectItem>
                    <SelectItem value="other">Other Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="fleetSize">Team Size</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('fleetSize', value)}
                  defaultValue={formData.fleetSize}
                >
                  <SelectTrigger className="bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 w-full">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1-20 employees</SelectItem>
                    <SelectItem value="21-50">21-50 employees</SelectItem>
                    <SelectItem value="51-100">51-100 employees</SelectItem>
                    <SelectItem value="101-300">101-300 employees</SelectItem>
                    <SelectItem value="300+">300+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourcompany.com"
                  required
                  className={`bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md"
                  disabled={isSubmitting || !!errors.email}
                >
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                </Button>
                <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
                  By submitting, you&apos;ll receive priority access to our FP&A platform that helps trucking, logistics, and waste management companies optimize their operations and improve profit margins.
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
