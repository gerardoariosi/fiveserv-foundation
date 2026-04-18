const GoogleMapEmbed = () => (
  <div className="relative w-full overflow-hidden rounded-2xl border border-brand-gold/30">
    <iframe
      title="FiveServ Service Areas — Central Florida"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d725425!2d-81.3792!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
      width="100%"
      height={480}
      style={{ border: 0, display: "block" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-4 pt-6"
      style={{ background: "linear-gradient(to top, rgba(26,26,26,0.95), transparent)" }}
    >
      <p className="m-0 text-xs font-bold uppercase tracking-[0.1em] text-brand-gold">
        18 Cities · Central Florida · Tampa Bay Coming Soon
      </p>
    </div>
  </div>
);

export default GoogleMapEmbed;
