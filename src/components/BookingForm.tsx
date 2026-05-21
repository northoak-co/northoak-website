import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  { value: "crm-management", label: "CRM Management" },
  { value: "customer-support", label: "Customer Support" },
  { value: "hr-admin", label: "HR Admin" },
  { value: "virtual-assistant", label: "Virtual Assistant" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "back-office-admin", label: "Back Office Admin" },
];

interface BookingFormProps {
  className?: string;
}

const BookingForm = ({ className = "" }: BookingFormProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [url, setUrl] = useState("");
  const [size, setSize] = useState("");
  const [source, setSource] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleService = (value: string) => {
    setSelectedServices(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const getSelectedServicesLabel = () => {
    if (selectedServices.length === 0) return "Please Select";
    if (selectedServices.length === 1) {
      return serviceOptions.find(s => s.value === selectedServices[0])?.label;
    }
    return `${selectedServices.length} services selected`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !company) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company,
          url,
          size,
          services: selectedServices.map(s =>
            serviceOptions.find(opt => opt.value === s)?.label || s
          ),
          source,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast({
        title: "Thank you!",
        description: "Redirecting you to book your call...",
      });

      // Reset form
      setEmail("");
      setCompany("");
      setUrl("");
      setSize("");
      setSource("");
      setNotes("");
      setSelectedServices([]);

      // Redirect to Calendly
      window.location.href = "https://calendly.com/northoak/25min";
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-card rounded-2xl md:rounded-3xl border border-border/50 shadow-lg p-6 md:p-8 lg:p-10 ${className}`}>
      <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
        Book a 25-minute intro call
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">Work Email*</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@company.com"
              className="h-12 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company name*</Label>
            <Input 
              id="company" 
              type="text" 
              placeholder="Your company"
              className="h-12 rounded-xl"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="url">Company URL*</Label>
            <Input 
              id="url" 
              type="text" 
              placeholder="yourcompany.com"
              className="h-12 rounded-xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Company Size*</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger id="size" className="h-12 rounded-xl">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="500+">500+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="services">Services you're interested in*</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full h-12 rounded-xl justify-between font-normal bg-background hover:bg-muted/50 hover:text-foreground"
              >
                <span className={selectedServices.length === 0 ? "text-muted-foreground" : "text-foreground"}>
                  {getSelectedServicesLabel()}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-2 bg-popover z-50" align="start">
              <div className="space-y-1">
                {serviceOptions.map((service) => (
                  <div
                    key={service.value}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
                    onClick={() => toggleService(service.value)}
                  >
                    <Checkbox
                      id={service.value}
                      checked={selectedServices.includes(service.value)}
                      onCheckedChange={() => toggleService(service.value)}
                    />
                    <label
                      htmlFor={service.value}
                      className="text-sm font-medium leading-none cursor-pointer flex-1"
                    >
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="source">How did you hear about us?*</Label>
          <Select value={source} onValueChange={setSource}>
            <SelectTrigger id="source" className="h-12 rounded-xl">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google Search</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="podcast">Podcast</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            placeholder="Any additional details or requirements you'd like to share..."
            className="min-h-[100px] rounded-xl resize-none"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          variant="hero" 
          className="w-full h-12 rounded-xl text-base mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book a Call"}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
