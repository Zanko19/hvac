// Section À propos
export function createAbout() {
  return `
    <section id="apropos" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-6">
              Votre Expert en Réfrigération depuis plus de 10 ans
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Avec plus d'une décennie d'expérience dans le domaine du froid, nous sommes votre partenaire de confiance 
              pour tous vos besoins en réfrigération et climatisation.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Notre expertise couvre aussi bien les installations domestiques que professionnelles. 
              Nous nous engageons à fournir un service de qualité, rapide et efficace à tous nos clients.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="flex items-center space-x-4">
                <div class="bg-blue-100 p-3 rounded-full">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Expérience</h3>
                  <p class="text-gray-600">10+ années d'expertise</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-green-100 p-3 rounded-full">
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Qualité</h3>
                  <p class="text-gray-600">Travaux garantis</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-yellow-100 p-3 rounded-full">
                  <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Rapidité</h3>
                  <p class="text-gray-600">Intervention 24h/24</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="bg-purple-100 p-3 rounded-full">
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Prix</h3>
                  <p class="text-gray-600">Tarifs compétitifs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2">
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Nos Engagements</h3>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Intervention Rapide</h4>
                    <p class="text-gray-600">Nous nous engageons à intervenir dans les plus brefs délais, 24h/24 pour les urgences.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Diagnostic Précis</h4>
                    <p class="text-gray-600">Analyse complète de vos équipements pour identifier rapidement l'origine du problème.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Réparation Durable</h4>
                    <p class="text-gray-600">Utilisation de pièces de qualité et techniques éprouvées pour des réparations durables.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Satisfaction Client</h4>
                    <p class="text-gray-600">Votre satisfaction est notre priorité. Nous ne partons qu'une fois le problème résolu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
