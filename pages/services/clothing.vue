<template>
    <section class="bg-[#E9F2FF]">
        <div class="max-w-[1280px] mx-auto items-center px-5 lg:pt-[8rem] pt-[8rem] lg:pb-[4rem] pb-[3.5rem]">
            <div class="text-center pt-[0rem]">
                <h1
                    class="max-w-[1100px] mx-auto text-3xl sm:text-[2.4rem] lg:text-[58px] font-[600] leading-[1.1] lg:leading-[1.4]">
                    <span class="text-[#000]">Apparel Care & Wardrobe Solutions</span>
                </h1>
                <!-- <p class="max-w-[680px] mx-auto lg:text-[22px] text-[16px] font-[400] mt-[1rem] text-gray-600">
                    Discover expert wardrobe care and style solutions for your favorite outfits.
                </p> -->

                <!-- Search Bar Section -->
                <div class="max-w-[800px] mx-auto mt-8">
                    <div class="relative bg-white rounded-[25px] shadow-sm border border-gray-200">
                        <div class="flex items-center px-4 py-2 lg:py-[14px]">
                            <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <input v-model="searchQuery" type="text" placeholder="Search clothing name"
                                class="flex-1 text-gray-800 placeholder-gray-400 border-none outline-none bg-transparent" />
                        </div>
                    </div>

                    <!-- Filter Buttons -->
                    <div class="flex justify-center space-x-3 mt-4">
                        <button @click="filterByCategory('all')"
                            :class="selectedCategory === 'all' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                            class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white  transition-colors">
                            All
                        </button>
                        <button @click="filterByCategory('Jacket')"
                            :class="selectedCategory === 'Jacket' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                            class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white  transition-colors">
                            Jacket
                        </button>
                        <button @click="filterByCategory('T-Shirt')"
                            :class="selectedCategory === 'T-Shirt' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                            class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white  transition-colors">
                            T-Shirt
                        </button>
                        <button @click="filterByCategory('Panjabi')"
                            :class="selectedCategory === 'Panjabi' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                            class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white transition-colors">
                            Panjabi
                        </button>
                    </div>
                </div>
            </div>

            <!-- Clothing Grid Section -->
            <div class="mt-12">
                <!-- Loading State -->
                <div v-if="isLoading" class="text-center py-12">
                    <div
                        class="inline-block animate-spin h-10 w-10 border-4 border-red-400 border-t-transparent rounded-full">
                    </div>
                    <p class="mt-2 text-gray-600">Loading clothing items...</p>
                </div>

                <!-- No Results -->
                <div v-else-if="filteredClothing.length === 0" class="text-center py-12">
                    <p class="text-gray-600 text-lg">No clothing items found</p>
                    <p class="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
                </div>

                <!-- Clothing Grid -->
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div v-for="clothing in filteredClothing" :key="clothing.id"
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        @click="openModal(clothing)">
                        <div class="relative">
                            <img :src="clothing.image" :alt="clothing.name" class="w-auto h-auto object-cover"
                                @error="console.log('Image failed to load:', clothing.image)" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ clothing.name }}</h3>
                            <p class="text-gray-600 text-sm mb-4">{{ clothing.description }}</p>
                            <button
                                class="w-full bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition-colors"
                                @click.stop="openModal(clothing)">
                                {{ clothing.button_text }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div v-if="selectedClothing"
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                @click="closeModal">
                <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                    <div class="relative">
                        <img :src="selectedClothing.image" :alt="selectedClothing.name"
                            class="w-full h-auto object-cover rounded-t-2xl" />
                        <button @click="closeModal"
                            class="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedClothing.name }}</h2>
                        <p class="text-gray-600 mb-4">{{ selectedClothing.description }}</p>

                        <!-- Extra Info -->
                        <div class="bg-gray-50 rounded-lg p-4 mb-6">
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-red-400">{{ selectedClothing.calories }}</div>
                                    <div class="text-sm text-gray-600">Quality</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-red-400">{{ selectedClothing.protein }}</div>
                                    <div class="text-sm text-gray-600">Durability</div>
                                </div>
                            </div>
                        </div>

                        <button
                            class="w-full bg-red-400 hover:bg-red-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                            @click="bookCooker">
                            Book a Wardrobe Expert!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedClothing = ref(null)
const ClothingData = ref([])
const isLoading = ref(true)

// Computed filtering
const filteredClothing = computed(() => {
    let filtered = ClothingData.value

    // Filter by category
    if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(c => c.category === selectedCategory.value)
    }

    // Filter by search
    if (searchQuery.value) {
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            c.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }

    return filtered
})

// Methods
const filterByCategory = (category) => {
    selectedCategory.value = category
}

const openModal = (clothing) => {
    selectedClothing.value = clothing
}

const closeModal = () => {
    selectedClothing.value = null
}

const bookCooker = () => {
    alert('Coming soon!')
}

// Load clothing data
onMounted(async () => {
    try {
        isLoading.value = true
        const response = await fetch('/clothing-data.json')
        const data = await response.json()
        ClothingData.value = data
    } catch (error) {
        console.error('Error loading clothing data:', error)
        // fallback data
        ClothingData.value = [
            {
                id: "item_1",
                name: "Boys Black T-Shirt",
                description: "Comfortable cotton T-shirt for everyday wear.",
                image: "/Clothing_photo/Boys_Black_T-Shirt.png",
                button_text: "View Details",
                category: "T-Shirt",
                calories: "Premium",
                protein: "High"
            }
        ]
    } finally {
        isLoading.value = false
    }
})
</script>

<style>
/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>
