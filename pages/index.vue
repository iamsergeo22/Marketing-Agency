<template>
  <div>
    <div
      class="bg-hero py-12 px-4 shadow-lg flex justify-center items-center w-full h-screen opacity-60">
      <div class="flex flex-col justify-center items-center lg:p-12 p-12 rounded-lg shadow-lg bg-color">
        <h1 class="text-white lg:text-5xl sm:text-4xl font-bold text-center uppercase">Welcome to Marketing Agency</h1>
        <p class="text-orange-500 lg:text-2xl sm:text-xl italic font-bold text-center">We offer a wide variety of marketing services</p>
      </div>
    </div>



    <div class="container mx-auto flex flex-col sm:flex-row justify-between py-16">

      <div class="w-full sm:w-3/5 sm:text-left items-center">
        <div class="">
          <h2 class="text-4xl text-orange-700 font-bold pb-2">About Us</h2>
          <p class="mb-4 lg:w-3/4 sm:w-full text-justify">

            At Water4all, we understand the importance of clean and safe drinking water, not only for our physical health but also for our overall well-being. We believe that by providing access to clean water, we can help alleviate the burden of waterborne diseases and contribute to the economic development of communities. Our organization operates on a volunteer basis, with each member committed to working towards our common goal. We have partnered with various local and international organizations to leverage resources and expertise in addressing the water crisis. Through our projects, we have witnessed firsthand the transformative power of clean water on people's lives, and we are driven to continue our efforts until everyone has access to this basic necessity

          </p>

        </div>


      </div>

      <div class="lg:w-1/2 sm:w-full lg:order-1 sm:order-2">
        <img src="../assets/img/pile-3d-popular-social-media-logos.jpg" alt="Image" class="w-full rounded-lg shadow-lg">
      </div>


    </div> <!-- end hero -->


    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">


          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-700 sm:text-4xl">
            Our Team
          </p>
        </div>

        <div class="mt-10">
          <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <img class="mx-auto h-48 w-48 rounded-full" src="../assets/img/BP picture.jpeg" alt="">
                <h3 class="mt-6 text-center font-bold text-xl leading-9 font-medium text-gray-900">
                  Blaise Agbetsomedo
                </h3>
                <div class="mt-2 text-center text-sm leading-5 text-gray-600">
                  <p>Founder</p>
                  <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div class="flex justify-center space-x-4">


                    <li>
                      <a href="https://twitter.com/STassiga" target="_blank" class="text-blue-600 hover:text-blue-400">
                        <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z"
                            fill-rule="nonzero" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/__iamsergeo/" target="_blank"
                        class="text-red hover:text-red-400">
                        <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z"
                            fill-rule="nonzero" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/" target="_blank"
                        class="text-blue-600 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                          class="text-white hover:text-gray-400" viewBox="0 0 24 24">
                          <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <img class="mx-auto h-48 w-48 rounded-full" src="../assets/img/ossama.jpeg" alt="">
                <h3 class="mt-6 text-center font-bold text-xl leading-9 font-medium text-gray-900">
                  Anael Osama
                </h3>
                <div class="mt-2 text-center text-sm leading-5 text-gray-600">
                  <p>Finance Manager</p>
                  <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div class="flex justify-center space-x-4">


                    <li>
                      <a href="https://twitter.com/STassiga" target="_blank" class="text-blue-600 hover:text-blue-400">
                        <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z"
                            fill-rule="nonzero" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/__iamsergeo/" target="_blank"
                        class="text-red hover:text-red-400">
                        <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z"
                            fill-rule="nonzero" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/" target="_blank"
                        class="text-white hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                          class="text-blue-600 hover:text-blue-400" viewBox="0 0 24 24">
                          <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <img class="mx-auto h-48 w-48 rounded-full" src="../assets/img/sergetassiga.jpg" alt="">
                <h3 class="mt-6 text-center font-bold text-xl leading-9 font-medium text-gray-900">
                  Serge Tassiga
                </h3>
                <div class="mt-2 text-center text-sm leading-5 text-gray-600">
                  <p>CTO</p>
                  <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div class="flex justify-center space-x-4">


                    <li>
                      <a href="https://twitter.com/STassiga" target="_blank" class="text-blue-600 hover:text-blue-400">
                        <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z"
                            fill-rule="nonzero" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/__iamsergeo/" target="_blank"
                        class="text-red hover:text-red-400">
                        <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z"
                            fill-rule="nonzero" /></svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/serge-anan-tassiga-759b6b190/" target="_blank"
                        class="text-blue-600 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                          class="text-white hover:text-gray-400" viewBox="0 0 24 24">
                          <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    

  </div>
</template>

<script>
  export default {}
</script>


<style scoped>
  .bg-hero {
    background-image: url("../assets/img/high-angle-woman-holding-smartphone.jpg");
    background-size: cover;
  }

  .bg-color {
    background-color: #000000b0;
  }

  i {
    font-size: 1.5rem;
  }
</style>