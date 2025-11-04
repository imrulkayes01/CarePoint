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
      <button class="md:hidden focus:outline-none" @click="isOpen = !isOpen">
        <!-- Hamburger Icon (when menu is closed) -->
        <div v-if="!isOpen" class="flex flex-col gap-1">
          <span class="w-6 h-[2px] bg-[black]"></span>
          <span class="w-6 h-[2px] bg-black"></span>
          <span class="w-6 h-[2px] bg-black"></span>
        </div>
        <!-- Close Icon (X) (when menu is open) -->
        <svg v-else class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
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
        <li>
          <NuxtLink to="/policy" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">
            Our Policy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/help" class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">
            Help
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
        <!-- User Profile Dropdown -->
        <div ref="profileMenuRef" v-if="isLoggedIn" class="relative">

          <img :src="getUser?.photoUrl || '/default-avatar.png'" :alt="getUser?.name || 'User'"
            class="h-10 w-10 rounded-full object-cover border-2 border-orange-500 cursor-pointer"
            @click.stop="toggleProfileMenu" />

          <!-- Dropdown Menu -->
          <transition name="fade-scale">
            <div v-if="showProfileMenu"
              class="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-2xl overflow-hidden border z-50 origin-top-right">
              <!-- Profile Info -->
              <div class="flex items-center px-4 py-3 border-b">
                <img :src="getUser?.photoUrl || '/default-avatar.png'" class="h-12 w-12 rounded-full object-cover mr-3"
                  alt="User" />
                <div>
                  <h3 class="text-[16px] font-semibold text-orange-600 capitalize">
                    {{ getUser?.name || 'imrul kayes' }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {{ getUser?.email || 'kayeskayes65@gmail.com' }}
                  </p>
                </div>
              </div>

              <!-- Menu Items -->
              <div class="py-2">

                <button @click.stop="logout"
                  class="w-[90%] mx-auto block mt-2 mb-2 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition">
                  Logout
                </button>
              </div>
            </div>
          </transition>
        </div>

        <!-- Sign In Button (when not logged in) -->
        <div v-else>
          <NuxtLink to="/signin"
            class="px-4 py-2 border border-blue-200 text-[#303944] rounded-lg font-medium hover:bg-[#FB7185] hover:text-white transition-colors">
            Sign In
          </NuxtLink>
        </div>
      </ul>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="fade">
      <ul v-if="isOpen" class="flex flex-col mt-4 space-y-4 text-[18px] md:hidden">
        <li>
          <NuxtLink to="/" @click="isOpen = false"
            class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="isOpen = false"
            class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">About
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/contact" @click="isOpen = false"
            class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Contact
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/services" @click="isOpen = false"
            class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Services
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/policy" @click="isOpen = false"
            class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Our Policy
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/help" @click="isOpen = false"
            class="font-medium text-[#303944] hover:text-[#A12137] transition-colors">Help
          </NuxtLink>
        </li>

        <!-- Mobile User Profile Section -->
        <div v-if="isLoggedIn" class="flex flex-col space-y-4">
          <div class="flex items-center space-x-3">
            <img :src="getUser?.photoUrl || '/default-avatar.png'" :alt="getUser?.name || 'User'"
              class="h-10 w-10 rounded-full object-cover border-2 border-gray-300" />
            <span class="text-sm font-medium text-gray-700">
              {{ getUser?.name || 'User' }}
            </span>
          </div>
          <button @click="logout(); isOpen = false"
            class="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
            Logout
          </button>
        </div>

        <!-- Mobile Sign In Button (when not logged in) -->
        <li v-else>
          <NuxtLink to="/signin" @click="isOpen = false"
            class="px-4 py-2 border border-[#FB7185] text-[#303944] rounded-lg font-medium hover:bg-[#FB7185] hover:text-white transition-colors">
            Sign In</NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const { isLoggedIn, getUser, initializeUser } = useUser();
const { logout } = useAuth();

// Dropdown control
const showProfileMenu = ref(false);
const profileMenuRef = ref(null);

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
};


const handleClickOutside = (event) => {
  if (profileMenuRef.value && !profileMenuRef.value.contains(event.target)) {
    showProfileMenu.value = false;
  }
};

onMounted(() => {
  initializeUser();
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.295);
}
</style>
