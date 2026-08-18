export async function trackWhatsAppClick(data: {
  name: string;
  city: string;
  whatsappNumber: string;
}) {
  try {
    const storageKey = `wa_count_${data.whatsappNumber}`;
    const currentCount = Number(localStorage.getItem(storageKey) || 0) + 1;
    localStorage.setItem(storageKey, String(currentCount));

    fetch("/api/whatsapp-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        city: data.city,
        whatsappNumber: data.whatsappNumber,
        count: currentCount,
      }),
    }).catch((err) => {
      console.error("Failed to send tracking request:", err);
    });
  } catch (err) {
    console.error("Error tracking WhatsApp click:", err);
  }
}

export function createWhatsAppLink(name: string, city: string, whatsappNumber: string) {
  const message = `Hi ${name}, I am interested in booking your service in ${city} via riyaescortservices.com`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

