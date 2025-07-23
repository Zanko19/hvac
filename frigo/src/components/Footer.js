// Footer
export function createFooter() {
  return `
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="bg-blue-600 p-2 rounded">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold">FrigoExpert</h3>
            </div>
            <p class="text-gray-300 mb-4">
              Votre spécialiste en réfrigération et climatisation. 
              Plus de 10 ans d'expérience au service de votre confort.
            </p>
            <p class="text-gray-300">
              Intervention rapide 24h/24 et 7j/7 dans toute l'Île-de-France.
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-gray-300">
              <li>• Dépannage urgent</li>
              <li>• Installation d'équipements</li>
              <li>• Maintenance préventive</li>
              <li>• Froid industriel</li>
              <li>• Climatisation</li>
              <li>• Conseil et expertise</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <div class="space-y-2 text-gray-300">
              <p>📞 01 23 45 67 89</p>
              <p>✉️ contact@frigoexpert.fr</p>
              <p>📍 Paris et Île-de-France</p>
              <p>🕒 24h/24 - 7j/7</p>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © ${new Date().getFullYear()} FrigoExpert - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  `;
}
