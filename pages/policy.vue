<template>
    <section class="min-h-[60vh] bg-[#EBEDF0] px-4 pt-[5rem] lg:pt-[8rem]">
        <div class="max-w-[960px] mx-auto px-4 py-12">
            <h1 class="text-3xl md:text-4xl font-bold text-[#111827]">Our Policy</h1>
            <p class="mt-3 text-[#4B5563]">Learn how CapePoint protects users and handles data.</p>

            <div class="mt-8 space-y-8">
                <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-[#1F2937]">Privacy & Data</h2>
                    <p class="mt-2 text-[#4B5563]">
                        We collect only the information necessary to provide and improve our services. We do not sell
                        personal
                        data. Access to sensitive information is restricted and logged.
                    </p>
                    <ul class="mt-4 list-disc list-inside text-[#4B5563] space-y-1">
                        <li>Purpose‑limited collection and storage</li>
                        <li>Encryption in transit and at rest where applicable</li>
                        <li>Role‑based access controls</li>
                    </ul>
                </div>

                <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-[#1F2937]">Safety & Community</h2>
                    <p class="mt-2 text-[#4B5563]">
                        We aim to keep the platform safe and respectful. Content that promotes harm, harassment, or
                        fraud is not
                        allowed and may be removed.
                    </p>
                    <ul class="mt-4 list-disc list-inside text-[#4B5563] space-y-1">
                        <li>Zero tolerance for harassment and hateful conduct</li>
                        <li>Report tools for users and fast triage</li>
                        <li>Transparent enforcement guidelines</li>
                    </ul>
                </div>

                <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-[#1F2937]">Usage & Terms</h2>
                    <p class="mt-2 text-[#4B5563]">
                        By using CapePoint, you agree to comply with our acceptable use guidelines and local
                        regulations. Accounts
                        engaging in abuse may be limited or terminated.
                    </p>
                </div>
            </div>

            <div class="mt-10 w-full flex justify-center lg:justify-start">
                <NuxtLink to="/help" class="inline-block font-semibold px-5 lg:py-3 py-2  text-[16px] lg:text-[18px] rounded-[50px] text-white  
         bg-gradient-to-r from-[#881337] to-orange-500 
          shadow-md 
         hover:from-[#FB7185] hover:to-[#FB7185] hover:shadow-lg 
         transition-all duration-300 ease-in-out">
                    Need help? Visit Help Center
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: 'Our Policy - CapePoint',
    meta: [
        { name: 'description', content: 'Read CapePoint policies on privacy, safety, and acceptable use.' }
    ]
});
</script>
