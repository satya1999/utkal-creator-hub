import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import iconCreator3d from "@/assets/icon-creator-3d.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const CreatorCTA = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", profileLink: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.profileLink.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Store in localStorage so admin can see it
    const existing = JSON.parse(localStorage.getItem("creatorRequests") || "[]");
    const newRequest = {
      id: `cr-${Date.now()}`,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      profileLink: form.profileLink.trim(),
      status: "pending" as const,
      submittedAt: new Date().toISOString().split("T")[0],
    };
    localStorage.setItem("creatorRequests", JSON.stringify([newRequest, ...existing]));

    toast.success("Application submitted! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", profileLink: "" });
    setOpen(false);
  };

  return (
    <>
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent via-card to-accent p-10 md:p-16 text-center"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary/5 blur-[80px]" />

            <motion.img
              src={iconCreator3d}
              alt="Creator icon"
              className="mx-auto mb-6 h-24 w-24 object-contain"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Creators & Influencers
            </p>
            <h2 className="mb-4 text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
              Are you a <span className="text-gradient">Creator</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground">
              Join with us and <strong className="text-foreground">earn with us</strong>. Collaborate with top local brands, grow your audience, and monetize your content.
            </p>
            <Button
              size="lg"
              className="h-13 rounded-full px-10 text-base font-bold"
              onClick={() => setOpen(true)}
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Join as a Creator</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll reach out to you shortly.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="creator-name">Full Name</Label>
              <Input
                id="creator-name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="creator-email">Email</Label>
              <Input
                id="creator-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="creator-phone">Contact Number</Label>
              <Input
                id="creator-phone"
                type="tel"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={15}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="creator-link">Social Media Profile Link</Label>
              <Input
                id="creator-link"
                type="url"
                placeholder="https://instagram.com/yourhandle"
                value={form.profileLink}
                onChange={(e) => setForm({ ...form, profileLink: e.target.value })}
                maxLength={500}
              />
            </div>
            <Button type="submit" className="w-full rounded-full font-bold">
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatorCTA;
