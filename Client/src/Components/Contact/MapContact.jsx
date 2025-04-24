import React from "react";

const MapContact = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112075.97427873722!2d77.30672759241966!3d28.618545086193222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef68b7aeaafb%3A0x221f62ee14d1d4fc!2s2nd%20Floor%2C%20Office%2C%20G%2C%2039%2C%20G%20Block%2C%20Sector%2063%2C%20Noida%2C%20Chotpur%2C%20Uttar%20Pradesh%20201301!3m2!1d28.61857!2d77.389129!5e0!3m2!1sen!2sin!4v1744280470042!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
};

export default MapContact;
