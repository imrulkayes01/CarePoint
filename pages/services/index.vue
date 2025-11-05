<template>
    <section class="min-h-[60vh] bg-white px-4 pt-[5rem] lg:pt-[5rem]">
        <div class="max-w-[1280px] mx-auto px-4 py-10">
            <div class="pb-2">
                <h1 class="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
                    Our Services
                </h1>
                <p class="text-gray-600 mb-10 max-w-2xl">
                    Explore our available support categories below. Choose a category to
                    learn more and get help.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <NuxtLink to="/services/food"
                    class="group block rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                    <h2 class="text-xl font-semibold text-[#111827] group-hover:text-[#A12137]">
                        Food
                    </h2>
                    <p class="text-gray-600 mt-2">Meals, groceries, and food assistance.</p>
                </NuxtLink>
                <NuxtLink to="/services/clothing"
                    class="group block rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                    <h2 class="text-xl font-semibold text-[#111827] group-hover:text-[#A12137]">
                        Clothing
                    </h2>
                    <p class="text-gray-600 mt-2">Clothes for all ages and seasons.</p>
                </NuxtLink>
                <NuxtLink to="/services/shelter"
                    class="group block rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                    <h2 class="text-xl font-semibold text-[#111827] group-hover:text-[#A12137]">
                        Shelter
                    </h2>
                    <p class="text-gray-600 mt-2">Temporary housing and safe spaces.</p>
                </NuxtLink>
                <NuxtLink to="/services/education"
                    class="group block rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                    <h2 class="text-xl font-semibold text-[#111827] group-hover:text-[#A12137]">
                        Education
                    </h2>
                    <p class="text-gray-600 mt-2">Learning resources and skill programs.</p>
                </NuxtLink>
                <NuxtLink to="/services/healthcare"
                    class="group block rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                    <h2 class="text-xl font-semibold text-[#111827] group-hover:text-[#A12137]">
                        Healthcare
                    </h2>
                    <p class="text-gray-600 mt-2">Medical, mental health, and wellness.</p>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script setup>
// This page provides the `/services` index route used by the mobile menu.
</script>
<style scoped></style>