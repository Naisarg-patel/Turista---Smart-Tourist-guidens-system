// ================= ADMIN DASHBOARD (CP EXACT) =================
const templetes = {
    discoverControls: `
                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800">Discover</h3>
                    <div class="relative mt-4">
                        <input type="text" id="search-input" placeholder="Search attractions..." class="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                        <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 mt-4">
                        <button class="category-btn flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all" data-category="all">
                            <svg class="w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                            <span class="font-medium text-sm text-gray-800">All</span>
                        </button>
                        <button class="category-btn flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all" data-category="Restaurant">
                            <svg class="w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
                            <span class="font-medium text-sm text-gray-800">Restaurants</span>
                        </button>
                        <button class="category-btn flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all" data-category="Mall">
                            <svg class="w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5A.75.75 0 0114.25 12h.008c.621 0 1.125.504 1.125 1.125v7.5m-8.25-7.5V21M3 12h18M3 12a9 9 0 0018 0M3 12a9 9 0 0118 0m-9 6.75h.008c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H12a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125z" /></svg>
                            <span class="font-medium text-sm text-gray-800">Malls</span>
                        </button>
                        <button class="category-btn flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all" data-category="Garden">
                            <svg class="w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c.24 0 .468.02.69.058M12 21c-.24 0-.468.02-.69.058m0-3.058A9.004 9.004 0 0012 3c-1.605 0-3.11.45-4.386 1.236m9.772 13.524A9.004 9.004 0 0012 3c1.605 0 3.11.45 4.386 1.236M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span class="font-medium text-sm text-gray-800">Gardens</span>
                        </button>
                    </div>
                </div>
            `,
            routeControls: `
                <h3 class="text-xl font-semibold text-gray-800">Route Planner</h3>
                <form id="route-form-dynamic">
                    <div class="mt-4 space-y-4">
                        <div>
                            <label for="route-city-input" class="text-sm font-medium text-gray-700">Trip City</label>
                            <input type="text" id="route-city-input" value="${currentCity}" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="E.g., London">
                        </div>
                        <div>
                            <label for="source" class="text-sm font-medium text-gray-700">From (Source)</label>
                            <input type="text" id="source" value="Sabarmati Ashram" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                        </div>
                        <div>
                            <label for="destination" class="text-sm font-medium text-gray-700">To (Destination)</label>
                            <input type="text" id="destination" value="Kankaria Lake" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:focus:border-indigo-500">
                        </div>
                        <button type="submit" id="find-route-btn-dynamic" class="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/30">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L6 12z" /></svg>
                            Find Route
                        </button>
                    </div>
                </form>
            `,
            aiControls: `
                <h3 class="text-xl font-semibold text-gray-800">✨ AI Itinerary Planner</h3>
                <p class="text-sm text-gray-600 mt-2">Describe your ideal trip, and let AI create a plan for you.</p>
                <div class="mt-4 space-y-4">
                    <div>
                        <label for="ai-city-input" class="text-sm font-medium text-gray-700">Trip Destination</label>
                        <input type="text" id="ai-city-input" value="${currentCity}" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="E.g., London">
                    </div>
                    <div>
                        <label for="ai-prompt" class="text-sm font-medium text-gray-700">Your Request</label>
                        <textarea id="ai-prompt-dynamic" rows="3" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 'A half-day trip focused on history and good street food.'"></textarea>
                    </div>
                    <button id="ai-plan-btn-dynamic" class="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-500/30">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188l-1.25-2.188L13.5 11l2.25-1.188L17 7.625l1.25 2.188L20.5 11l-2.25 1.188z" /></svg>
                        <span>Generate Plan</span>
                    </button>
                </div>
            `,
            offlineSim: `
                <h3 class="text-xl font-semibold text-gray-800">Offline Map</h3>
                <div class="mt-4 text-center p-6 bg-gray-100 rounded-lg">
                    <svg class="w-10 h-10 text-gray-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                    <p class="text-sm text-gray-700 font-semibold">Offline Mode Active</p>
                    <p class="text-xs text-gray-500 mt-1">This mode simulates map data saved locally.</p>
                </div>
                <div class="mt-6">
                    <h4 class="text-lg font-semibold text-gray-800">Available Maps</h4>
                    <ul class="mt-2 space-y-2 text-sm text-gray-600">
                        <li class="p-2 bg-white rounded-md flex justify-between items-center shadow-sm">
                            ${currentCity} - 25MB
                            <span class="text-green-600">Synced</span>
                        </li>
                    </ul>
                </div>
            `,
            eventsControls: `
                <h3 class="text-xl font-semibold text-gray-800">Events Filter</h3>
                <p class="text-sm text-gray-600 mt-2">Find out what's happening today in ${currentCity}.</p>
                <div class="mt-4 space-y-4">
                    <div>
                        <label for="event-date" class="text-sm font-medium text-gray-700">Date</label>
                        <input type="date" id="event-date" value="${new Date().toISOString().substring(0, 10)}" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500">
                    </div>
                    <div>
                        <label for="event-category" class="text-sm font-medium text-gray-700">Category</label>
                        <select id="event-category" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500">
                            <option>All</option>
                            <option>Music</option>
                            <option>Festival</option>
                            <option>Workshop</option>
                        </select>
                    </div>
                    <button class="w-full flex items-center justify-center gap-2 bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg shadow-yellow-500/30">
                        Filter Events
                    </button>
                </div>
            `,
            infoControls: `
                <h3 class="text-xl font-semibold text-gray-800">Info Hub</h3>
                <p class="text-sm text-gray-600 mt-2">Quickly access essential information for your trip.</p>
                <ul class="mt-4 space-y-3 text-sm font-medium text-gray-700">
                    <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <svg class="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 15h.008v.008H15v-.008z" /></svg>
                        Emergency Numbers
                    </li>
                    <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <svg class="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.12 18.005L16 16.125m-6-6l-1.88-1.88M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>
                        Currency Converter
                    </li>
                    <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <svg class="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 100 1.5.75.75 0 000-1.5zM12 3a.75.75 0 100 1.5.75.75 0 000-1.5zM12 21a.75.75 0 100-1.5.75.75 0 000 1.5zM3 12a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM21 12a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM7.5 7.5a.75.75 0 100 1.5.75.75 0 000-1.5zM16.5 7.5a.75.75 0 100 1.5.75.75 0 000-1.5zM7.5 16.5a.75.75 0 100 1.5.75.75 0 000-1.5zM16.5 16.5a.75.75 0 100 1.5.75.75 0 000-1.5z" /></svg>
                        Tipping Guide
                    </li>
                </ul>
            `,
            // NEW 7. Safety Hub Controls
            safetyControls: `
                <h3 class="text-xl font-semibold text-gray-800">Safety Check</h3>
                <p class="text-sm text-gray-600 mt-2">Access quick emergency contacts and official advisories for ${currentCity}.</p>
                <div class="mt-4 space-y-4">
                    <button id="generate-safety-advice-btn" class="w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-500/30">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.731 0 2.813-1.874 1.948-3.374L13.949 3.37a2.25 2.25 0 0 0-3.898 0l-7.511 12.695Z" /></svg>
                        Generate Safety Advice
                    </button>
                    <button class="w-full flex items-center justify-center gap-2 bg-orange-100 text-orange-700 font-semibold py-3 px-6 rounded-lg hover:bg-orange-200 transition duration-300">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75l1.5-1.5m1.5 1.5v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5M21.75 6.75l-1.5-1.5m-1.5 1.5v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5m0 0v1.5" /></svg>
                        Test Emergency Call (Sim.)
                    </button>
                </div>
            `,
            // NEW Admin Dashboard Controls
            adminControls: `
                <h3 class="text-xl font-semibold text-gray-800">Admin Controls</h3>
                <p class="text-sm text-gray-600 mt-2">Simulated tools for app diagnostics and data management.</p>
                <div class="mt-4 space-y-4">
                    <button class="w-full flex items-center justify-center gap-2 bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
                        Run Diagnostics (Sim.)
                    </button>
                    <button class="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.731 0 2.813-1.874 1.948-3.374L13.949 3.37a2.25 2.25 0 0 0-3.898 0l-7.511 12.695Z" /></svg>
                        View User Logs (Sim.)
                    </button>
                </div>
            `,
            // NEW Simple Map Controls
            mapControls: `
                <h3 class="text-xl font-semibold text-gray-800">Map Controls</h3>
                <p class="text-sm text-gray-600 mt-2">Use this view for quick lookups and general navigation.</p>
                <div class="mt-4 space-y-4">
                    <div>
                        <label for="map-search-input" class="text-sm font-medium text-gray-700">Search Location</label>
                        <input type="text" id="map-search-input" value="${currentCity} City Center" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="E.g., Eiffel Tower">
                    </div>
                    <button class="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/30">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        Go to Location
                    </button>
                </div>
            `,
            // NEW 9. User Profile Controls
            profileControls: `
                <h3 class="text-xl font-semibold text-gray-800">Your Account</h3>
                <p class="text-sm text-gray-600 mt-2">Update your preferences and manage app data.</p>
                <div class="mt-4 space-y-4">
                    <button id="generate-bio-btn" class="w-full flex items-center justify-center gap-2 bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300 shadow-lg shadow-pink-500/30">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0 .75.75 0 01-.433.684l-2.015.672a1.5 1.5 0 01-1.558-.707l-.744-1.116a1.5 1.5 0 00-1.284-.648h-2.146c-.571 0-1.129.213-1.564.596l-.678.552a1.5 1.5 0 01-1.284.648H4.501z" /></svg>
                        Generate Bio
                    </button>
                    <button class="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.731 0 2.813-1.874 1.948-3.374L13.949 3.37a2.25 2.25 0 0 0-3.898 0l-7.511 12.695Z" /></svg>
                        Logout
                    </button>
                </div>
            `,
};

const featureControl = {
  admin : templetes.adminControls,
  discover : templetes.discoverControls,
  route : templetes.routeControls,
  ai : templetes.aiControls,
  events : templetes.eventsControls,
  info : templetes.infoControls,
  safety : templetes.safetyControls,
  map : templetes.mapControls,
  profile : templetes.profileControls
};

const title = {
  admin : "Admin Dashboard",
  discover : "Discover",
  route : "Route Planner",
  ai : "AI Assistant",
  events : "Events",
  info : "Information",
  safety : "Safety Tips",
  map : "Map View",
  profile : "Profile"
};


document.querySelectorAll(".initial-feature-btn").forEach(btn => {
  btn.onclick = () => {
    currentFeature = btn.dataset.feature;

    if (btn.dataset.page === "city") {
      showScreen("city");
      return;
    }

    // Go to dashboard
    showScreen("dashboard");

    // Reset views
    document.querySelectorAll(
      "#discover-view, #route-view, #ai-view, #events-view, #info-view, #safety-view, #admin-view, #map-view, #profile-view"
    ).forEach(v => v.classList.add("hidden"));

    const controlsPanel = document.getElementById("controls-panel");
    const contentTitle = document.getElementById("content-title");

    controlsPanel.innerHTML = featureControl[currentFeature] || "";
    contentTitle.innerText = title[currentFeature] || "Feature";

    // ===== ADMIN DASHBOARD =====
   const view = document.getElementById(`${currentFeature}-view`);
    if (view) view.classList.remove("hidden");
  };
});



// BACK BUTTON
document
  .getElementById("back-to-login-from-features-btn")
  .onclick = () => showScreen("login");

document
  .getElementById("back-to-features-btn")
  .onclick = () => showScreen("feature");

document
  .getElementById("back-to-city-select-btn")
  .onclick = () => showScreen("city");

 document
  .getElementById("back-to-menu-btn")
  .onclick = () => {
                // Determine if the destination should be the City Menu (S4) or the initial Feature Menu (S2)
                
                // Features directly accessible from S2 (without needing S3)
                const directFeatures = ['route', 'ai', 'info', 'profile', 'safety', 'admin', 'events', 'map']; 
                
                // If the user came from S2 AND the current feature is one of the direct ones, go back to S2.
                if (directFeatures.includes(currentFeature) && previousScreen === 'feature') {
                    showScreen('feature'); 
                } else {
                    // Otherwise (came from S4 or navigated within S5), go back to S4 (City Main Menu).
                    showScreen('menu');
                } 
            } 

