// Replace with your actual WhatsApp number (with country code, no + or spaces)
export const WHATSAPP_NUMBER = "919876543210";

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = "Hi! I'm interested in learning more about Utkal Creator Hub's services for my business.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const PHONE_NUMBER = "+91 98765 43210";
export const PHONE_DISPLAY = "+91 98765 43210";
