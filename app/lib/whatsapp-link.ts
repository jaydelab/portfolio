export const WHATSAPP_PHONE = "(34) 99862-4100";
export const WHATSAPP_MESSAGE = "Oi, Victor. Vim do seu portfolio e queria falar sobre uma oportunidade. Vamos conversar?";

export function buildWhatsappHref(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  const fullNumber = digits.startsWith("55") ? digits : `55${digits}`;

  return `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_HREF = buildWhatsappHref(WHATSAPP_PHONE, WHATSAPP_MESSAGE);
