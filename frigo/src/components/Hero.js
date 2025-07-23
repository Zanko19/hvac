// Section Hero
export function createHero() {
  return `
    <section id="accueil" class="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Expert en <span class="text-blue-600">Réfrigération</span>
            </h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Dépannage, installation et maintenance de vos équipements frigorifiques. 
              Service rapide et efficace 7j/7.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg text-center">
                Demander un devis
              </a>
              <a href="tel:+33123456789" class="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center">
                Urgence: 01 23 45 67 89
              </a>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-12">
            <div class="bg-white rounded-2xl shadow-2xl p-8">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-gray-800">24h/24</h3>
                  <p class="text-gray-600 text-sm">Service d'urgence</p>
                </div>
                
                <div class="text-center">
                  <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-gray-800">Garanti</h3>
                  <p class="text-gray-600 text-sm">Travaux assurés</p>
                </div>
                
                <div class="text-center">
                  <div class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-gray-800">Devis</h3>
                  <p class="text-gray-600 text-sm">Gratuit et rapide</p>
                </div>
                
                <div class="text-center">
                  <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-gray-800">Expert</h3>
                  <p class="text-gray-600 text-sm">10+ ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
