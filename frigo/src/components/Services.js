// Section Services (version simplifiée)
export function createServices() {
  return `
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous intervenons sur tous types d&apos;équipements frigorifiques
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-4">🔧</div>
            <h3 class="text-xl font-bold mb-3">Dépannage 24h/24</h3>
            <p class="text-gray-600">Intervention rapide pour tous problèmes</p>
          </div>
          
          <div class="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-4">🔨</div>
            <h3 class="text-xl font-bold mb-3">Installation</h3>
            <p class="text-gray-600">Équipements neufs et mise en service</p>
          </div>
          
          <div class="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-4">⚙️</div>
            <h3 class="text-xl font-bold mb-3">Maintenance</h3>
            <p class="text-gray-600">Entretien préventif et optimisation</p>
          </div>
          
          <div class="bg-yellow-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-4">🏭</div>
            <h3 class="text-xl font-bold mb-3">Froid Industriel</h3>
            <p class="text-gray-600">Restaurants et commerces</p>
          </div>
          
          <div class="bg-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-4">❄️</div>
            <h3 class="text-xl font-bold mb-3">Climatisation</h3>
            <p class="text-gray-600">Installation et entretien clim</p>
          </div>
          
          <div class="bg-red-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-4">💡</div>
            <h3 class="text-xl font-bold mb-3">Conseil</h3>
            <p class="text-gray-600">Expertise et audit énergétique</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
