export default function Newsletter() {
  return (
    <>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center rounded-lg bg-neutral-900  p-4 sm:p-8">
      <div class="mb-4 sm:mb-8">
        <h2 class="text-center text-xl font-bold text-red-500 sm:text-2xl lg:text-3xl">Get the latest updates</h2>
        <p class="text-center text-gray-500">Sign up for our newsletter</p>
      </div>

      <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
        <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-red-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-red-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Send</button>
      </form>

      <p class="text-center text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-red-500 active:text-red-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-red-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </div>
  </div>
</div>
    </>
  )
}
