const verbs = {
  "çûn": {
    definition: "gitmek",
    conjugations: {
      present: ["diçim", "diçî", "diçe", "diçin", "diçin", "diçin"],
      presentNegative: ["naçim", "naçî", "naçe", "naçin", "naçin", "naçin"],
      past: ["—", "—", "—", "—", "—", "—"],
      future: ["—", "—", "—", "—", "—", "—"]
    }
  },
  "xwarin": {
    definition: "yemek",
    conjugations: {
      present: ["dixwim", "dixwî", "dixwe", "dixin", "dixin", "dixin"],
      presentNegative: ["naxwim", "naxwî", "naxwe", "naxwin", "naxwin", "naxwin"],
      past: ["—", "—", "—", "—", "—", "—"],
      future: ["—", "—", "—", "—", "—", "—"]
    }
  },
  "hatin": {
    definition: "gelmek",
    conjugations: {
      present: ["têim", "têyî", "tê", "tên", "tên", "tên"],
      presentNegative: ["natêim", "natêyî", "natê", "natên", "natên", "natên"],
      past: ["—", "—", "—", "—", "—", "—"],
      future: ["—", "—", "—", "—", "—", "—"]
    }
  }
};

const persons = ["ez", "tu", "ew", "em", "hûn", "ew (pl.)"];
const verbSelect = document.getElementById("verb-select");
const conjugationContainer = document.getElementById("conjugation-container");

// Populate dropdown menu
for (const verb in verbs) {
  const option = document.createElement("option");
  option.value = verb;
  option.textContent = `${verb} (${verbs[verb].definition})`;
  verbSelect.appendChild(option);
}

function renderTable(verb) {
  const v = verbs[verb].conjugations;
  conjugationContainer.innerHTML = `
    <h2 class="text-xl font-semibold text-blue-700 dark:text-blue-400">
      Fiil: <span class="italic">${verb}</span> (${verbs[verb].definition})
    </h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-blue-300 dark:border-blue-600 rounded-md text-sm">
        <thead class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
          <tr>
            <th class="p-2 border border-blue-300 dark:border-blue-600 text-left">Kişi</th>
            <th class="p-2 border border-blue-300 dark:border-blue-600 text-left">Şimdiki Zaman</th>
            <th class="p-2 border border-blue-300 dark:border-blue-600 text-left">Olumsuz</th>
            <th class="p-2 border border-blue-300 dark:border-blue-600 text-left">Geçmiş Zaman</th>
            <th class="p-2 border border-blue-300 dark:border-blue-600 text-left">Gelecek Zaman</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 dark:text-gray-300">
          ${persons.map((person, i) => `
            <tr>
              <td class="p-2 border border-blue-200 dark:border-blue-700">${person}</td>
              <td class="p-2">${v.present[i]}</td>
              <td class="p-2">${v.presentNegative[i]}</td>
              <td class="p-2">${v.past[i]}</td>
              <td class="p-2">${v.future[i]}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// Initial load
renderTable(verbSelect.value);
verbSelect.addEventListener("change", e => renderTable(e.target.value));

// Dark mode toggle button logic
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.getElementById("body");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  if(body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Açık Mod";
  } else {
    toggleBtn.textContent = "🌙 Koyu Mod";
  }
});
