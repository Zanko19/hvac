// Section Contact
export function createContact() {
  return `
    <section id="contact" class="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Contactez-nous</h2>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            Besoin d&apos;une intervention ? N&apos;hésitez pas à nous contacter pour un devis gratuit
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informations de contact -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-8">Nos Coordonnées</h3>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Téléphone</h4>
                  <p class="text-blue-100">01 23 45 67 89</p>
                  <p class="text-blue-200 text-sm">Urgences 24h/24</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Email</h4>
                  <p class="text-blue-100">contact@frigoexpert.fr</p>
                  <p class="text-blue-200 text-sm">Réponse sous 24h</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Zone d&apos;intervention</h4>
                  <p class="text-blue-100">Paris et Île-de-France</p>
                  <p class="text-blue-200 text-sm">Déplacement rapide</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Horaires</h4>
                  <p class="text-blue-100">Lun-Ven: 8h-18h</p>
                  <p class="text-blue-200 text-sm">Urgences: 24h/24</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8 p-6 bg-white bg-opacity-10 rounded-xl">
              <h4 class="text-white font-semibold mb-3">🚨 Service d&apos;Urgence</h4>
              <p class="text-blue-100 mb-4">
                Panne de froid dans votre restaurant ? Problème de climatisation ? 
                Nous intervenons en urgence 24h/24 et 7j/7.
              </p>
              <a href="tel:+33123456789" class="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Appel d&apos;urgence
              </a>
            </div>
          </div>
          
          <!-- Formulaire de contact -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Demande de Devis</h3>
            
            <form id="contact-form" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Nom *</label>
                  <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Prénom *</label>
                  <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                  <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Type d&apos;intervention *</label>
                <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Sélectionnez...</option>
                  <option value="depannage">Dépannage urgent</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="climatisation">Climatisation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Description du problème *</label>
                <textarea required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Décrivez votre problème ou votre besoin..."></textarea>
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Urgence</label>
                <div class="flex space-x-4">
                  <label class="flex items-center">
                    <input type="radio" name="urgence" value="normale" class="mr-2">
                    <span>Normale</span>
                  </label>
                  <label class="flex items-center">
                    <input type="radio" name="urgence" value="urgente" class="mr-2">
                    <span>Urgente</span>
                  </label>
                </div>
              </div>
              
              <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
