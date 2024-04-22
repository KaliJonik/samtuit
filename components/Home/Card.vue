<template>
  <div class="max-w-screen-xl mx-auto mt-10 mb-20">
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-[70rem] h-px my-8 bg-[#1a1919] border-0 dark:bg-gray-700">
      <span
        class="absolute px-4 font-medium text-[#1b1b1b] text-[20px] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Последние
        Новости</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">

      <div v-for="i in 4">
        <div
          class="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden hover:shadow-lg transition duration-300 ease-in-out ">

          <a href="#">
            <img class="rounded-t-lg" src="/tatu.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="max-w-screen-xl mx-auto mt-10 mb-10">
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-[70rem] h-px my-8 bg-[#1a1919] border-0 dark:bg-gray-700">
      <span
        class="absolute px-4 font-medium text-[#1b1b1b] text-[20px] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Последние
        Обявления</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">

      <div v-for="i in 4">
        <div
          class="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden hover:shadow-lg transition duration-300 ease-in-out ">

          <a href="#">
            <img class="rounded-t-lg" src="/tatu.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts" setup></script>

<style></style>
