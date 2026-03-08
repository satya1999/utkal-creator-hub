import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroLeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedBusiness = business.trim();

    if (!trimmedName || !trimmedPhone || !trimmedBusiness) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
      toast.error("Please enter a valid 10-digit Indian phone number");
      return;
    }

    const message = `Hi! I'm ${trimmedName} from ${trimmedBusiness}. I'd like to discuss influencer marketing for my business. My number is ${trimmedPhone}.`;
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    toast.success("Redirecting you to WhatsApp!");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-primary/20 bg-card p-8 text-center shadow-xl"
      >
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-bold text-foreground">Thank You!</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          We'll connect with you on WhatsApp shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="rounded-full border-border"
        >
          Submit Another
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="rounded-2xl border border-border bg-card p-7 shadow-xl sm:p-8"
    >
      <motion.div variants={fadeUp} className="mb-6">
        <h3 className="mb-1 text-xl font-bold text-foreground">
          Get Your Free Growth Plan
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill in your details & we'll reach out within 2 hours
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div variants={fadeUp}>
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Input
            placeholder="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Input
            placeholder="Business Name"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            maxLength={100}
            className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Button
            type="submit"
            size="lg"
            className="h-13 w-full rounded-xl text-base font-bold"
          >
            Get Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </form>

      <motion.p variants={fadeUp} className="mt-4 text-center text-xs text-muted-foreground">
        🔒 No spam. We respect your privacy.
      </motion.p>
    </motion.div>
  );
};

export default HeroLeadForm;
