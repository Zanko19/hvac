// Section Services
export function createServices() {
  return `
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous intervenons sur tous types d'équipements frigorifiques pour les professionnels et particuliers
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Dépannage Urgent</h3>
            <p class="text-gray-600 mb-4">Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes de réfrigération</p>
            <ul class="text-gray-600 space-y-2">
              <li>• Panne de froid</li>
              <li>• Fuite de gaz</li>
              <li>• Problème électrique</li>
              <li>• Diagnostic complet</li>
            </ul>
          </div>
          
          <!-- Service 2 -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Installation</h3>
            <p class="text-gray-600 mb-4">Installation professionnelle de vos équipements frigorifiques neufs</p>
            <ul class="text-gray-600 space-y-2">
              <li>• Frigos professionnels</li>
              <li>• Chambres froides</li>
              <li>• Vitrines réfrigérées</li>
              <li>• Mise en service</li>
            </ul>
          </div>
          
          <!-- Service 3 -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Maintenance</h3>
            <p class="text-gray-600 mb-4">Entretien préventif pour optimiser la durée de vie de vos équipements</p>
            <ul class="text-gray-600 space-y-2">
              <li>• Contrat de maintenance</li>
              <li>• Nettoyage complet</li>
              <li>• Contrôle des performances</li>
              <li>• Optimisation énergétique</li>
            </ul>
          </div>
          
          <!-- Service 4 -->
          <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Froid Industriel</h3>
            <p class="text-gray-600 mb-4">Spécialiste du froid industriel pour restaurants et commerces</p>
            <ul class="text-gray-600 space-y-2">
              <li>• Restaurants</li>
              <li>• Supermarchés</li>
              <li>• Boucheries</li>
              <li>• Laboratoires</li>
            </ul>
          </div>
          
          <!-- Service 5 -->
          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Climatisation</h3>
            <p class="text-gray-600 mb-4">Installation et entretien de systèmes de climatisation</p>
            <ul class="text-gray-600 space-y-2">
              <li>• Clim réversible</li>
              <li>• Systèmes centralisés</li>
              <li>• Entretien annuel</li>
              <li>• Recharge gaz</li>
            </ul>
          </div>
          
          <!-- Service 6 -->
          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Conseil & Expertise</h3>
            <p class="text-gray-600 mb-4">Conseils personnalisés pour optimiser vos installations</p>
            <ul class="text-gray-600 space-y-2">
              <li>• Audit énergétique</li>
              <li>• Choix d'équipements</li>
              <li>• Économies d'énergie</li>
              <li>• Mise aux normes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
