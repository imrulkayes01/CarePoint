<template>
  <section class="min-h-screen bg-[#FCF4FC] flex items-center justify-center px-6 sm:py-16">
    <div class="max-w-[600px] w-full bg-white p-8 rounded-2xl shadow-lg">
      <h2 class="text-4xl font-bold text-[tomato] mb-6 text-center">
        Contact Me
      </h2>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        <!-- Name -->
        <input v-model="form.name" type="text" name="name" placeholder="Your Name"
          class="w-full px-4 py-4 rounded-lg border border-gray-600 text-black focus:outline-none focus:ring-2"
          required />

        <!-- Email -->
        <input v-model="form.email" type="email" name="email" placeholder="Your Email"
          class="w-full px-4 py-4 rounded-lg border border-gray-600 text-black focus:outline-none focus:ring-2"
          required />

        <!-- Message -->
        <textarea v-model="form.message" name="message" rows="5" placeholder="Your Message"
          class="w-full px-4 py-4 rounded-lg border border-gray-600 text-black focus:outline-none focus:ring-2"
          required></textarea>

        <!-- Button -->
        <button type="submit" :disabled="loading"
          class="bg-[tomato] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#FB7185] transition disabled:opacity-60 disabled:cursor-not-allowed">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <!-- Success / Error Message -->
        <p v-if="successMessage" class="text-green-600 text-center">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-600 text-center">{{ errorMessage }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mnnopbpe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(document.querySelector('form'))
    })

    if (response.ok) {
      successMessage.value = '✅ Message sent successfully!'
      form.value = { name: '', email: '', message: '' }
    } else {
      errorMessage.value = '❌ Failed to send message. Try again later.'
    }
  } catch (err) {
    errorMessage.value = '⚠️ Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
