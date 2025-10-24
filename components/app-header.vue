<template>
  <nav class="bg-[#F4F4F8] shadow-sm px-4 py-4 border-b border-gray-200">
    <div class="w-full max-w-[1280px] mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center w-[142px] h-[41px]">
        <NuxtLink to="/">
          <h1 class="text-2xl font-[600] text-amber-500">
            Cape<span class="text-rose-900">Point</span>
          </h1>
        </NuxtLink>

        <!-- <div class="ml-12 hidden lg:block">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder="Search"
              class="w-64 pl-10 pr-4 py-2 border border-blue-200 rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent text-[17px]" />
          </div>
        </div> -->

      </div>

      <!-- Hamburger Menu Button (Mobile) -->
      <button class="md:hidden flex flex-col gap-1 focus:outline-none" @click="isOpen = !isOpen">
        <span class="w-6 h-[2px] bg-[black]"></span>
        <span class="w-6 h-[2px] bg-black"></span>
        <span class="w-6 h-[2px] bg-black"></span>
      </button>

      <!-- Desktop Navigation Links -->
      <ul class="hidden md:flex space-x-6 text-[18px] items-center">
        <li>
          <NuxtLink to="/" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">
            About
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/contact" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">
            Contact
          </NuxtLink>
        </li>

        <li class="relative">
          <div class="group">
            <button type="button"
              class="font-medium text-[#303944] hover:text-[#A12137] transition-colors flex items-center gap-2 focus:outline-none"
              aria-haspopup="true" aria-expanded="false">
              Services
              <svg class="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown panel -->
            <div
              class="absolute left-0 mt-3 w-44 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transform transition-all duration-150"
              role="menu" aria-label="Services">
              <ul class="py-2">
                <li>
                  <NuxtLink to="/services/food" class="block px-4 py-2 text-gray-800 hover:bg-gray-300">Food
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/clothing" class="block px-4 py-2 text-gray-800 hover:bg-gray-300">Clothing
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/shelter" class="block px-4 py-2 text-gray-800 hover:bg-gray-300">Shelter
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/education" class="block px-4 py-2 text-gray-800 hover:bg-gray-300">Education
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/healthcare" class="block px-4 py-2 text-gray-800 hover:bg-gray-300">Healthcare
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <NuxtLink to="/signin"
            class="px-4 py-2 border border-blue-200 text-[#303944] rounded-lg font-medium hover:bg-[#FB7185] hover:text-white transition-colors">
            Sign In
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="fade">
      <ul v-if="isOpen" class="flex flex-col mt-4 space-y-4 text-[18px] md:hidden">
        <li>
          <NuxtLink to="/" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">About
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/contact" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Contact
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/services" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Services
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/signin"
            class="px-4 py-2 border border-[#FB7185] text-[#303944] rounded-lg font-medium hover:bg-[#FB7185] hover:text-white transition-colors">
            Sign In</NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
