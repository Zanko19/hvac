// Header avec navigation
export function createHeader() {
  return `
    <header class="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="bg-blue-600 p-2 rounded">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-gray-800">FrigoExpert</h1>
          </div>
          
          <div class="hidden md:flex space-x-8">
            <a href="#accueil" class="text-gray-600 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#services" class="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#apropos" class="text-gray-600 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          <div class="md:hidden">
            <button id="menu-toggle" class="text-gray-600 hover:text-blue-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
          <a href="#accueil" class="block py-2 text-gray-600 hover:text-blue-600">Accueil</a>
          <a href="#services" class="block py-2 text-gray-600 hover:text-blue-600">Services</a>
          <a href="#apropos" class="block py-2 text-gray-600 hover:text-blue-600">À propos</a>
          <a href="#contact" class="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </nav>
    </header>
  `;
}
