<template>
    <section class="min-h-[60vh] bg-[#EBEDF0] px-4 pt-[5rem] lg:pt-[5rem] py-0 lg:py-24">
        <div class="max-w-[960px] mx-auto px-4 py-12">
            <h1 class="text-3xl md:text-4xl font-bold text-[#111827]">Help Center</h1>
            <p class="mt-3 text-[#4B5563]">Get answers, tips, and ways to contact support.</p>

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-gray-200 rounded-xl p-6">
                    <h2 class="text-lg font-semibold text-[#1F2937]">Quick Start</h2>
                    <ul class="mt-3 space-y-2 text-[#4B5563] list-disc list-inside">
                        <li>Creating an account and signing in</li>
                        <li>Finding services near you</li>
                        <li>Updating profile details</li>
                    </ul>
                </div>

                <div class="border border-gray-200 rounded-xl p-6">
                    <h2 class="text-lg font-semibold text-[#1F2937]">Account & Security</h2>
                    <ul class="mt-3 space-y-2 text-[#4B5563] list-disc list-inside">
                        <li>Password resets and 2FA</li>
                        <li>Recognizing suspicious activity</li>
                        <li>Reporting account issues</li>
                    </ul>
                </div>

                <div class="border border-gray-200 rounded-xl p-6">
                    <h2 class="text-lg font-semibold text-[#1F2937]">Policies</h2>
                    <p class="mt-3 text-[#4B5563]">
                        For our privacy, safety, and usage guidelines, please see
                        <NuxtLink to="/policy" class="text-rose-700 hover:underline">Our Policy</NuxtLink>.
                    </p>
                </div>

                <div class="border border-gray-200 rounded-xl p-6">
                    <h2 class="text-lg font-semibold text-[#1F2937]">Contact Support</h2>
                    <p class="mt-3 text-[#4B5563]">Can’t find what you need?</p>
                    <NuxtLink to="/contact" class="mt-4 inline-block px-5 lg:py-3 py-2 text-white 
         bg-gradient-to-r from-[#881337] to-orange-500 
         rounded-full shadow-md 
         hover:from-[#FB7185] hover:to-[#FB7185] hover:shadow-lg 
         transition-all duration-300 ease-in-out">
                        Contact us
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: 'Help Center - CapePoint',
    meta: [
        { name: 'description', content: 'Help articles and support resources for CapePoint users.' }
    ]
});
</script>
