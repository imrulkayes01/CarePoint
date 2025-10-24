<template>
  <section class="min-h-screen bg-[#FCF4FC] flex items-center justify-center px-6 sm:py-16">
    <div class="max-w-[600px] w-full bg-[white] p-8 rounded-2xl shadow-lg">
      <h2 class="text-4xl font-bold text-[tomato] mb-6 text-center">
        Contact Me
      </h2>

      <form class="flex flex-col gap-6">
        <!-- Name -->
        <input type="text" placeholder="Your Name"
          class="w-full px-4 py-4 rounded-lg  border border-gray-600 text-[#000] focus:outline-none focus:ring-2 " />

        <!-- Email -->
        <input type="email" placeholder="Your Email"
          class="w-full px-4 py-4 rounded-lg  border border-gray-600 text-[#000] focus:outline-none focus:ring-2 " />

        <textarea rows="5" placeholder="Your Message"
          class="w-full px-4 py-4 rounded-lg  border border-gray-600 text-[#000] focus:outline-none focus:ring-2 "></textarea>

        <button type="submit"
          class="bg-[tomato] text-[white] font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#FB7185] transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script></script>

<style></style>
