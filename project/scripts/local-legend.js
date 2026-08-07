(function() {
  "use strict";

  // ============================================================
  // DATA: Entebbe spots (quiz recommendations)
  // ============================================================
  const spots = [
    {
      mood: "adventurous",
      setting: "indoor",
      name: "Entebbe Craft Market",
      desc: "Indoor bazaar with handcrafted drums, paintings, and African art."
    },
    {
      mood: "adventurous",
      setting: "outdoor",
      name: "Ngamba Island Chimpanzee Sanctuary",
      desc: "Boat trip to see rescued chimps in their natural habitat."
    },
    {
      mood: "cozy",
      setting: "indoor",
      name: "Café Javas Entebbe",
      desc: "Warm coffee house with lakeside views and fresh mandazi."
    },
    {
      mood: "cozy",
      setting: "outdoor",
      name: "Entebbe Pier",
      desc: "Sunset strolls along the pier with street food vendors."
    },
    {
      mood: "healthy",
      setting: "indoor",
      name: "Vegan Vibes Entebbe",
      desc: "Plant‑based bowls, smoothies, and gluten‑free options."
    },
    {
      mood: "healthy",
      setting: "outdoor",
      name: "Lake Victoria Beach Yoga",
      desc: "Morning yoga sessions on the sandy shores of Lake Victoria."
    }
  ];

  // ============================================================
  // DOM REFERENCES
  // ============================================================
  const form = document.getElementById('quizForm');
  const resultDiv = document.getElementById('quizResult');
  const resultMsg = document.getElementById('resultMessage');
  const resetBtn = document.getElementById('resetQuiz');

  // ============================================================
  // HELPER: Get recommendation based on mood + setting
  // ============================================================
  function getRecommendation(mood, setting) {
    // Filter for exact match
    const filtered = spots.filter(s => s.mood === mood && s.setting === setting);

    // Fallback: if no exact match, try mood-only
    if (filtered.length === 0) {
      const fallback = spots.filter(s => s.mood === mood);
      return fallback.length ? fallback[0] : spots[0];
    }

    // Random selection from matches
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
  }

  // ============================================================
  // RENDER: Show quiz result
  // ============================================================
  function showResult(mood, setting) {
    const spot = getRecommendation(mood, setting);

    // Template literal for output
    const message = `✨ Based on your vibe (${mood} + ${setting}), we recommend:<br />
      <strong>${spot.name}</strong><br />
      ${spot.desc}`;

    resultMsg.innerHTML = message;
    resultDiv.classList.remove('hidden');
    form.classList.add('hidden');

    // Persist to localStorage
    localStorage.setItem('lastRecommendation', JSON.stringify({ mood, setting, spot }));
  }

  // ============================================================
  // RESET: Reset quiz to initial state
  // ============================================================
  function resetQuiz() {
    form.classList.remove('hidden');
    resultDiv.classList.add('hidden');

    // Reset radio buttons
    const radios = form.querySelectorAll('input[type="radio"]');
    radios.forEach(r => r.checked = false);

    // Set defaults
    const defaultMood = form.querySelector('input[name="mood"][value="adventurous"]');
    const defaultSetting = form.querySelector('input[name="setting"][value="indoor"]');
    if (defaultMood) defaultMood.checked = true;
    if (defaultSetting) defaultSetting.checked = true;
  }

  // ============================================================
  // RESTORE: Load last recommendation from localStorage
  // ============================================================
  function restoreFromStorage() {
    const stored = localStorage.getItem('lastRecommendation');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data && data.spot) {
          const msg = `✨ From your last visit:<br />
            <strong>${data.spot.name}</strong><br />
            ${data.spot.desc}`;
          resultMsg.innerHTML = msg;
          resultDiv.classList.remove('hidden');
          form.classList.add('hidden');
        }
      } catch (_) {
        // Ignore parsing errors
      }
    }
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  // --- Form submit ---
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const moodEl = form.querySelector('input[name="mood"]:checked');
      const settingEl = form.querySelector('input[name="setting"]:checked');

      if (!moodEl || !settingEl) {
        resultMsg.textContent = 'Please select both options.';
        resultDiv.classList.remove('hidden');
        form.classList.add('hidden');
        return;
      }

      showResult(moodEl.value, settingEl.value);
    });
  }

  // --- Reset button ---
  if (resetBtn) {
    resetBtn.addEventListener('click', resetQuiz);
  }

  // ============================================================
  // INIT: Restore state on page load
  // ============================================================
  restoreFromStorage();

})();
