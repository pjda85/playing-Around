function showPrice(productName, redirectUrl) {
  const prices = {
    "Domain Registration & Transfer": "R99/year",
    "cPanel Web Hosting": "R49/month",
    "Linux & Windows VPS Hosting": "R199/month",
    "Reseller Hosting": "R299/month",
    "Email Hosting": "R29/month",
    "WordPress Hosting": "R79/month"
  };

  alert(`${productName} is available for ${prices[productName]}.\nRedirecting to more details...`);
  window.location.href = redirectUrl;
}
