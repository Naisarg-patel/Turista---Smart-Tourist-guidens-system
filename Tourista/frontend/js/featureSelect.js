document.querySelectorAll(".initial-feature-btn").forEach(btn => {
  btn.onclick = () => {
    currentFeature = btn.dataset.feature;
    
    if (btn.dataset.page === "city") {
      showScreen("city");
    } else {
      showScreen("dashboard");
    }
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

