<template>
    <div class="bg-gray-100">
      <div class="container mx-auto px-4 py-16">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 mb-16 md:mb-0">
            <h2 class="text-3xl font-bold mb-8 text-orange-400">Get in touch</h2>
            <form action="#" class="mb-12 w-full max-w-lg">
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Name
                            </label>

                            <input type="text" name="name" id="name" placeholder="Jon Snow"
                                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-3"
                                required>
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"
                                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-3"
                                required>
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="number">
                                Phone Number
                            </label>

                            <input type="number" name="number" id="number" placeholder="+242 16 592 8167"
                                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-3"
                                required>
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Subject
                            </label>

                            <input type="email" name="email" id="email" placeholder="Asking for informations"
                                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-3"
                                required>
                        </div>
                    </div>


                    <div class="w-full mb-8">
                        <label class="block text-copy-primary mb-2" for="message">
                            Message
                        </label>

                        <textarea id="message" rows="5" name="message"
                            class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                            placeholder="Enter your message here." required></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Submit"
                            class="block bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-4 py-3">
                    </div>
                </form>
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold mb-8 text-orange-400">Our Addresses</h2>
            <div class="mb-8">
              <h3 class="text-lg font-bold mb-2">Headquarters</h3>
              <p class="mb-2">123 Main St</p>
              <p class="mb-2">Suite 100</p>
              <p class="mb-2">New York, NY 10001</p>
              <p class="mb-2">USA</p>
            </div>
          
      <h2 class="text-3xl font-bold mb-8 text-orange-400">Our Location</h2>
      <div class="aspect-w-16 aspect-h-5 rounded-lg shadow-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.417412837234!2d-73.98579178521707!3d40.74844194225139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d75c5f5c5d%3A0x93a74d47b46dbd65!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635024562182!5m2!1sen!2sus"
                        width="600" height="338" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
    </div>
  </div>
</div>
</div>
</template>  