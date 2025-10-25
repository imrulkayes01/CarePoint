<template>
    <section class="bg-[#E9F2FF] min-h-screen">
        <div>
            <div class="max-w-[1280px] mx-auto items-center px-5 lg:pt-[8rem] pt-[8rem] lg:pb-[4rem] pb-[3.5rem]">
                <div class="text-center pt-[0rem]">
                    <h1
                        class="max-w-[1100px] mx-auto text-3xl sm:text-[2.4rem] lg:text-[58px] font-[600] leading-[1.1] lg:leading-[1.4] ">
                        <span class="text-[#000]">Your Personalized Nutrition Guide</span>
                    </h1>
                    <!-- <p class="max-w-[680px] mx-auto lg:text-[22px] text-[16px] font-[400] mt-[1rem] text-gray-600">
                        Discover Healthy Meals, Book an Expert Cooker.
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
                                <input v-model="searchQuery" type="text" placeholder="Search food name"
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
                            <button @click="filterByCategory('breakfast')"
                                :class="selectedCategory === 'breakfast' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                                class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white  transition-colors">
                                Breakfast
                            </button>
                            <button @click="filterByCategory('lunch')"
                                :class="selectedCategory === 'lunch' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                                class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white  transition-colors">
                                Lunch
                            </button>
                            <button @click="filterByCategory('dinner')"
                                :class="selectedCategory === 'dinner' ? 'bg-red-400 text-white' : 'bg-white text-gray-600'"
                                class="rounded-lg px-3 lg:px-[1rem] py-2 font-medium shadow-sm border border-gray-200 hover:bg-[#EF4444] hover:text-white  transition-colors">
                                Dinner
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Food Grid -->
                <div class="mt-12">
                    <!-- Loading State -->
                    <div v-if="isLoading" class="text-center py-12">
                        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-400"></div>
                        <p class="mt-2 text-gray-600">Loading food items...</p>
                    </div>

                    <!-- No Results -->
                    <div v-else-if="filteredFoods.length === 0" class="text-center py-12">
                        <p class="text-gray-600 text-lg">No food items found</p>
                        <p class="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
                    </div>

                    <!-- Food Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div v-for="food in filteredFoods" :key="food.id"
                            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            @click="openModal(food)">
                            <div class="relative">
                                <img :src="food.image" :alt="food.name" class="w-full h-48 object-cover"
                                    @error="console.log('Image failed to load:', food.image)" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ food.name }}</h3>
                                <p class="text-gray-600 text-sm mb-4">{{ food.description }}</p>
                                <button
                                    class="w-full bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition-colors"
                                    @click.stop="openModal(food)">
                                    {{ food.button_text }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div v-if="selectedFood" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            @click="closeModal">
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                <div class="relative">
                    <img :src="selectedFood.image" :alt="selectedFood.name"
                        class="w-full h-64 object-cover rounded-t-2xl" />
                    <button @click="closeModal"
                        class="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ selectedFood.name }}</h2>
                    <p class="text-gray-600 mb-4">{{ selectedFood.description }}</p>

                    <!-- Nutritional Information -->
                    <div class="bg-gray-50 rounded-lg p-4 mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Nutritional Information</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-red-400">{{ selectedFood.calories }}</div>
                                <div class="text-sm text-gray-600">Calories</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-red-400">{{ selectedFood.protein }}</div>
                                <div class="text-sm text-gray-600">Protein</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-red-400">{{ selectedFood.fiber }}</div>
                                <div class="text-sm text-gray-600">Fiber</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-red-400">{{ selectedFood.vitamins }}</div>
                                <div class="text-sm text-gray-600">Vitamins</div>
                            </div>
                        </div>
                    </div>

                    <button
                        class="w-full bg-red-400 hover:bg-red-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                        @click="bookCooker">
                        Book a Cooker to Make This!
                    </button>
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
const selectedFood = ref(null)
const foodData = ref([])
const isLoading = ref(true)

// Computed properties
const filteredFoods = computed(() => {
    let filtered = foodData.value
    console.log('Filtering foods:', {
        total: foodData.value.length,
        category: selectedCategory.value,
        search: searchQuery.value
    })

    // Filter by category
    if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(food => food.category === selectedCategory.value)
    }

    // Filter by search query
    if (searchQuery.value) {
        filtered = filtered.filter(food =>
            food.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            food.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }

    console.log('Filtered result:', filtered.length, 'items')
    return filtered
})

// Methods
const filterByCategory = (category) => {
    selectedCategory.value = category
}

const openModal = (food) => {
    selectedFood.value = food
}

const closeModal = () => {
    selectedFood.value = null
}

const bookCooker = () => {
    alert('Cooker booking feature coming soon!')
}

// Load food data
onMounted(async () => {
    try {
        isLoading.value = true
        const response = await fetch('/food-data.json')
        const data = await response.json()
        foodData.value = data
        console.log('Food data loaded:', data)
    } catch (error) {
        console.error('Error loading food data:', error)
        // Fallback data for testing
        foodData.value = [
            {
                id: "item_1",
                name: "Mango Berry Smoothie Bowl",
                description: "Rich in antioxidant berries & fiber",
                image: "/photo/food_photo/the-smoothie.png",
                button_text: "View Details",
                category: "breakfast",
                calories: 280,
                protein: "8g",
                fiber: "12g",
                vitamins: "A, C, K"
            }
        ]
    } finally {
        isLoading.value = false
    }
})
</script>

<style scoped>
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