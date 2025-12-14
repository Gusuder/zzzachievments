let currentMain = "history";
let currentSub = "trust";
let userProgress = {};
let searchQuery = "";
let versionFilter = "";
let statusFilter = "";
let lastJustCompleted = null;

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

function escReg(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightHTML(text, q) {
  const t = escapeHtml(text || "");
  if (!q) return t;
  const r = new RegExp(escReg(q), "gi");
  return t.replace(r, (m) => `<span class="hl">${m}</span>`);
}

function init() {
  loadProgress();
  renderTabs();
  renderSubfilters();
  renderAchievements();
  updateGlobalStats();

  document.getElementById("search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderAchievements();
  });

  document.getElementById("version-filter").addEventListener("change", (e) => {
    versionFilter = e.target.value;
    renderAchievements();
  });

  document.getElementById("status-filter").addEventListener("change", (e) => {
    statusFilter = e.target.value;
    renderAchievements();
  });

  document.getElementById("export-btn").addEventListener("click", exportProgressToJson);

  document.getElementById("import-btn").addEventListener("click", () => {
    document.getElementById("import-file").click();
  });

  document.getElementById("import-file").addEventListener("change", handleImportFile);

  document.getElementById("reset-btn").addEventListener("click", resetProgress);

  const ioPanel = document.querySelector(".io-panel");
  const ioToggle = document.getElementById("io-toggle");

  ioToggle.addEventListener("click", () => {
    ioPanel.classList.toggle("open");
  });
}

function loadProgress() {
  const saved = localStorage.getItem("zzz_ach_progress_v2");
  userProgress = saved ? JSON.parse(saved) : {};

  for (const main in ACHIEVEMENTS) {
    if (!userProgress[main]) userProgress[main] = {};
    for (const sub in ACHIEVEMENTS[main].subfilters) {
      if (!userProgress[main][sub]) {
        userProgress[main][sub] = ACHIEVEMENTS[main].data[sub].map(() => ({
          completed: false,
          date: ""
        }));
      }
    }
  }
}

function saveProgress() {
  localStorage.setItem("zzz_ach_progress_v2", JSON.stringify(userProgress));
  updateGlobalStats();
  renderSubfilters();
}

function getStats(mainKey = null, subKey = null) {
  let total = 0;
  let completed = 0;
  let maxPoly = 0;
  let earnedPoly = 0;
  let bronze = 0;
  let silver = 0;
  let gold = 0;

  const mains = mainKey ? [mainKey] : Object.keys(ACHIEVEMENTS);

  for (const main of mains) {
    const subs = subKey ? [subKey] : Object.keys(ACHIEVEMENTS[main].data);

    for (const sub of subs) {
      const achs = ACHIEVEMENTS[main].data[sub];
      const prog = userProgress[main][sub] || [];

      achs.forEach((a, i) => {
        total++;
        maxPoly += a.reward;

        if (prog[i]?.completed) {
          completed++;
          earnedPoly += a.reward;

          if (a.tier === "bronze") bronze++;
          else if (a.tier === "silver") silver++;
          else if (a.tier === "gold") gold++;
        }
      });
    }
  }

  return { total, completed, maxPoly, earnedPoly, bronze, silver, gold };
}

function updateGlobalStats() {
  const global = getStats();

  document.getElementById("global-ach").textContent = `${global.completed}/${global.total}`;
  document.getElementById("global-poly").textContent = `${global.earnedPoly}/${global.maxPoly}`;
  document.getElementById("current-filter").textContent = ACHIEVEMENTS[currentMain]?.name || "—";
  document.getElementById("current-subfilter").textContent = ACHIEVEMENTS[currentMain]?.subfilters[currentSub]?.name || "—";

  const tierSummary = document.getElementById("tier-summary");
  tierSummary.innerHTML = `
    <span class="tier-item"><img src="icons/bronze.png" alt="B"> x${global.bronze}</span>
    <span class="tier-item"><img src="icons/silver.png" alt="S"> x${global.silver}</span>
    <span class="tier-item"><img src="icons/gold.png" alt="G"> x${global.gold}</span>
  `;
}

function updateSubfilterStats() {
  const stats = getStats(currentMain, currentSub);

  document.getElementById("subfilter-name").textContent = ACHIEVEMENTS[currentMain].subfilters[currentSub].name;
  document.getElementById("subfilter-stats").innerHTML =
    `<span class="chip">Достижений:<b>${stats.completed}/${stats.total}</b></span>` +
    `<span class="chip chip--poly">Полихром:<img src="icons/poly.png" alt="✦"><b>${stats.earnedPoly}/${stats.maxPoly}</b></span>`;

  const percent = stats.total ? Math.round((stats.completed / stats.total) * 100) : 0;
  const bar = document.getElementById("subfilter-progress-bar");
  if (bar) bar.style.width = `${percent}%`;
}

function renderTabs() {
  const tabs = document.querySelector(".tabs");
  tabs.innerHTML = "";

  for (const key in ACHIEVEMENTS) {
    const tab = document.createElement("div");
    tab.className = "tab" + (key === currentMain ? " active" : "");
    tab.textContent = ACHIEVEMENTS[key].name;
    tab.dataset.main = key;

    tab.addEventListener("click", () => {
      currentMain = key;
      currentSub = Object.keys(ACHIEVEMENTS[key].subfilters)[0];

      renderTabs();
      renderSubfilters();
      renderAchievements();
      updateGlobalStats();
    });

    tabs.appendChild(tab);
  }
}

function renderSubfilters() {
  const container = document.getElementById("subfilters");
  container.innerHTML = "";

  const subfilters = ACHIEVEMENTS[currentMain].subfilters;

  for (const key in subfilters) {
    const stats = getStats(currentMain, key);
    const percent = stats.total ? Math.round((stats.completed / stats.total) * 100) : 0;

    const item = document.createElement("div");
    item.className = "subfilter" + (key === currentSub ? " active" : "");
    item.innerHTML = `
      <div class="subfilter-content">
        <span class="subfilter-name">${subfilters[key].name}</span>
        <span class="subfilter-mini-stat">${stats.completed}/${stats.total}</span>
      </div>
      <div class="subfilter-progress">
        <div class="bar" style="width: ${percent}%"></div>
      </div>
    `;

    item.addEventListener("click", () => {
      currentSub = key;
      renderSubfilters();
      renderAchievements();
      updateSubfilterStats();
      updateGlobalStats();
    });

    container.appendChild(item);
  }
}

function renderAchievements() {
  const list = document.getElementById("ach-list");
  list.innerHTML = "";

  const achList = ACHIEVEMENTS[currentMain].data[currentSub] || [];
  const progress = userProgress[currentMain][currentSub] || [];

  const filtered = achList.filter((ach, i) => {
    const prog = progress[i] || { completed: false };

    const matchesSearch =
      !searchQuery ||
      ach.title.toLowerCase().includes(searchQuery) ||
      (ach.desc && ach.desc.toLowerCase().includes(searchQuery));

    const matchesVersion = !versionFilter || ach.version === versionFilter;

    const matchesStatus =
      !statusFilter ||
      (statusFilter === "completed" && prog.completed) ||
      (statusFilter === "incomplete" && !prog.completed);

    return matchesSearch && matchesVersion && matchesStatus;
  });

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:30px; color:#777">Ничего не найдено</div>`;
    return;
  }

  filtered.forEach((ach) => {
    const realIndex = achList.findIndex((a) => a.id === ach.id);
    const prog = progress[realIndex] || { completed: false, date: "" };

    const item = document.createElement("div");
    item.className = `ach-item ${prog.completed ? "completed" : ""}`;
    item.dataset.tier = ach.tier;

    if (
      lastJustCompleted &&
      lastJustCompleted.main === currentMain &&
      lastJustCompleted.sub === currentSub &&
      lastJustCompleted.id === ach.id &&
      Date.now() - lastJustCompleted.t < 600
    ) {
      item.classList.add("just-completed");
    }

    const tierDiv = document.createElement("div");
    tierDiv.className = "tier-icon";

    const badge = document.createElement("div");
    badge.className = "tier-badge";

    let tierImgSrc = "icons/bronze.png";
    if (ach.tier === "silver") tierImgSrc = "icons/silver.png";
    else if (ach.tier === "gold") tierImgSrc = "icons/gold.png";

    badge.innerHTML = `<img src="${tierImgSrc}" alt="${ach.tier.charAt(0).toUpperCase()}">`;
    tierDiv.appendChild(badge);

    const ver = document.createElement("div");
    ver.className = "version-tag chip chip--ver";
    ver.dataset.version = ach.version;
    ver.textContent = ach.version;
    tierDiv.appendChild(ver);

    const info = document.createElement("div");
    info.className = "ach-info";

    const title = document.createElement("div");
    title.className = "ach-title";
    title.innerHTML = highlightHTML(ach.title, searchQuery);
    info.appendChild(title);

    if (ach.desc) {
      const desc = document.createElement("div");
      desc.className = "ach-desc";
      desc.innerHTML = highlightHTML(ach.desc, searchQuery);
      info.appendChild(desc);
    }

    const footer = document.createElement("div");
    footer.className = "ach-footer";

    const reward = document.createElement("div");
    reward.className = "reward";
    reward.innerHTML = `<span class="chip chip--poly"><img src="icons/poly.png" alt="✦"><b>${ach.reward}</b></span>`;
    footer.appendChild(reward);

    if (prog.completed && prog.date) {
      const dateEl = document.createElement("div");
      dateEl.className = "completion-date";
      dateEl.textContent = prog.date;
      footer.appendChild(dateEl);
    }

    info.appendChild(footer);
    item.appendChild(tierDiv);
    item.appendChild(info);

    item.addEventListener("click", () => toggleAchievement(realIndex));
    list.appendChild(item);
  });

  updateSubfilterStats();
}

function toggleAchievement(index) {
  const ach = userProgress[currentMain][currentSub][index];

  if (ach.completed) {
    ach.completed = false;
    ach.date = "";
  } else {
    ach.completed = true;
    ach.date = new Date().toLocaleDateString("ru-RU");
    lastJustCompleted = {
      main: currentMain,
      sub: currentSub,
      id: ACHIEVEMENTS[currentMain].data[currentSub][index].id,
      t: Date.now()
    };
  }

  saveProgress();
  renderAchievements();
}

function buildProgressById() {
  const byId = {};

  for (const main in ACHIEVEMENTS) {
    byId[main] = {};

    for (const sub in ACHIEVEMENTS[main].data) {
      byId[main][sub] = {};

      const list = ACHIEVEMENTS[main].data[sub];
      const progArr = (userProgress[main] && userProgress[main][sub]) ? userProgress[main][sub] : [];

      list.forEach((a, i) => {
        const p = progArr[i] || { completed: false, date: "" };
        byId[main][sub][a.id] = { completed: !!p.completed, date: p.date || "" };
      });
    }
  }

  return byId;
}

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

function exportProgressToJson() {
  const payload = {
    schema: "zzz-achievements-progress",
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    storageKey: "zzz_ach_progress_v2",
    progressById: buildProgressById()
  };

  const safeDate = new Date().toISOString().slice(0, 10);
  downloadTextFile(`zzz-progress-${safeDate}.json`, JSON.stringify(payload, null, 2));
}

function handleImportFile(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const text = String(reader.result || "");
      const parsed = JSON.parse(text);
      importProgressFromJson(parsed);
    } catch (err) {
      alert("Не удалось прочитать JSON-файл. Проверь формат.");
    } finally {
      e.target.value = "";
    }
  };

  reader.readAsText(file, "utf-8");
}

function importProgressFromJson(data) {
  const next = {};

  for (const main in ACHIEVEMENTS) {
    next[main] = {};

    for (const sub in ACHIEVEMENTS[main].subfilters) {
      next[main][sub] = ACHIEVEMENTS[main].data[sub].map(() => ({
        completed: false,
        date: ""
      }));
    }
  }

  const byId = (data && data.progressById && typeof data.progressById === "object") ? data.progressById : null;
  const legacy = (!byId && data && typeof data === "object") ? data : null;

  for (const main in ACHIEVEMENTS) {
    for (const sub in ACHIEVEMENTS[main].data) {
      const list = ACHIEVEMENTS[main].data[sub];

      if (byId && byId[main] && byId[main][sub]) {
        list.forEach((a, i) => {
          const item = byId[main][sub][a.id];
          if (item && typeof item === "object") {
            next[main][sub][i].completed = !!item.completed;
            next[main][sub][i].date = item.date ? String(item.date) : "";
          }
        });
      } else if (legacy && legacy[main] && legacy[main][sub] && Array.isArray(legacy[main][sub])) {
        legacy[main][sub].forEach((p, i) => {
          if (!next[main][sub][i]) return;
          next[main][sub][i].completed = !!(p && p.completed);
          next[main][sub][i].date = (p && p.date) ? String(p.date) : "";
        });
      }
    }
  }

  userProgress = next;
  saveProgress();
  renderTabs();
  renderSubfilters();
  renderAchievements();
  updateGlobalStats();
  alert("Импорт завершён. Прогресс обновлён.");
}

function resetProgress() {
  const ok = confirm(
    "Сбросить весь прогресс? Это действие нельзя отменить.\n\nСовет: нажми «Отмена», сделай экспорт и потом сброс."
  );
  if (!ok) return;

  localStorage.removeItem("zzz_ach_progress_v2");
  loadProgress();
  renderTabs();
  renderSubfilters();
  renderAchievements();
  updateGlobalStats();
  alert("Прогресс сброшен.");
}

document.addEventListener("DOMContentLoaded", init);
