import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-4 drop-shadow-lg">
      Hello world!
      </h1>
      <p class="text-xl text-blue-100 mb-8">
        Votre projet Vite + Tailwind est prêt !
      </p>
      <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
        Commencer à coder
      </button>
    </div>
  </div>
`
