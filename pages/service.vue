<template>
  <div class="container mx-auto px-4 py-8 pb-8">
    <h2 class="text-3xl text-orange-400 font-bold uppercase text-center mb-4 mt-4">Our Services</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white rounded shadow hover:shadow-lg">
        <img src="../assets/img/social-media-marketing-concept-marketing-with-applications.jpg" alt="Logo Design" class="w-full h-48 object-cover rounded-t">
        <div class="p-4">
          <h2 class="text-lg font-bold text-black mb-2">Logo, Poster and Flyers  Design</h2>
          <p class="text-gray-700 leading-relaxed mb-4">We create unique and memorable logos that represent your brand's
            identity.</p>
          <button
            class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out">Get
            Started</button>
        </div>
      </div>
     
      <div class="bg-white rounded shadow hover:shadow-lg">
        <img src="../assets/img/ux.jpg" alt="UX/UI Design" class="w-full h-48 object-cover rounded-t">
        <div class="p-4">
          <h2 class="text-lg font-bold text-black mb-2">UX/UI Design</h2>
          <p class="text-gray-700 leading-relaxed mb-4">We design intuitive and user-friendly interfaces for your web or
            mobile app to enhance the user experience.</p>
          <button
            class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out">Get
            Started</button>
        </div>
      </div>
      <div class="bg-white rounded shadow hover:shadow-lg">
        <img src="../assets/img/website-development-links-seo-webinar-cyberspace-concept.jpg" alt="Web App Design" class="w-full h-48 object-cover rounded-t">
        <div class="p-4">
          <h2 class="text-lg font-bold text-black mb-2">Web App Design</h2>
          <p class="text-gray-700 leading-relaxed mb-4">We design custom web applications that meet your business needs
            and engage your users.</p>
          <button
            class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out">Get
            Started</button>
        </div>
      </div>
      <div class="bg-white rounded shadow hover:shadow-lg">
        <img src="../assets/img/pile-3d-popular-social-media-logos.jpg" alt="Digital Marketing" class="w-full h-48 object-cover rounded-t">
        <div class="p-4">
          <h2 class="text-lg font-bold text-black mb-2">Digital Marketing</h2>
          <p class="text-gray-700 leading-relaxed mb-4">We create effective digital marketing campaigns that drive
            traffic and generate leads for your business.</p>
          <button
            class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300 ease-in-out">Get
            Started</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ServicesPage',
    head() {
      return {
        title: 'Our Services - Your Company Name',
      };
    },
  };
</script>
<style scoped>
  /* Add Tailwind CSS classes here */
</style>