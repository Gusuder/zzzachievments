let lastSnapshot = "";

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function normalizeProgress() {
  const saved = localStorage.getItem("zzz_ach_progress_v2");
  const parsed = saved ? safeJsonParse(saved) : null;
  const userProgress = (parsed && typeof parsed === "object") ? parsed : {};

  for (const main in ACHIEVEMENTS) {
    if (!userProgress[main]) userProgress[main] = {};
    for (const sub in ACHIEVEMENTS[main].subfilters) {
      if (!userProgress[main][sub]) {
        userProgress[main][sub] = ACHIEVEMENTS[main].data[sub].map(() => ({ completed: false, date: "" }));
      }
    }
  }

  return userProgress;
}

function getAchStats(progress) {
  let total = 0;
  let completed = 0;
  let maxPoly = 0;
  let earnedPoly = 0;

  for (const main in ACHIEVEMENTS) {
    for (const sub in ACHIEVEMENTS[main].data) {
      const list = ACHIEVEMENTS[main].data[sub];
      const prog = (progress[main] && progress[main][sub]) ? progress[main][sub] : [];
      for (let i = 0; i < list.length; i++) {
        const a = list[i];
        total += 1;
        maxPoly += a.reward;
        if (prog[i] && prog[i].completed) {
          completed += 1;
          earnedPoly += a.reward;
        }
      }
    }
  }

  return { total, completed, maxPoly, earnedPoly };
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setWidth(id, pct) {
  const el = document.getElementById(id);
  if (el) el.style.width = `${pct}%`;
}

function renderHome() {
  const progress = normalizeProgress();
  const s = getAchStats(progress);
  const pct = s.total ? Math.round((s.completed / s.total) * 100) : 0;

  setText("home-ach-total", `${s.completed}/${s.total}`);
  setText("home-ach-percent", `${pct}%`);
  setText("home-poly-total", `${s.earnedPoly}/${s.maxPoly}`);

  setText("card-ach", `${s.completed}/${s.total}`);
  setText("card-poly", `${s.earnedPoly}/${s.maxPoly}`);

  setText("sum-ach", `${s.completed}/${s.total}`);
  setText("sum-poly", `${s.earnedPoly}/${s.maxPoly}`);
  setWidth("sum-bar-ach", pct);
}

function refreshIfChanged() {
  const raw = localStorage.getItem("zzz_ach_progress_v2") || "";
  if (raw === lastSnapshot) return;
  lastSnapshot = raw;
  renderHome();
}

function startAutoSync() {
  refreshIfChanged();
  if (startAutoSync._timer) return;
  startAutoSync._timer = setInterval(() => {
    if (!document.hidden) refreshIfChanged();
  }, 500);
}

function stopAutoSync() {
  if (!startAutoSync._timer) return;
  clearInterval(startAutoSync._timer);
  startAutoSync._timer = null;
}

document.addEventListener("DOMContentLoaded", () => {
  lastSnapshot = localStorage.getItem("zzz_ach_progress_v2") || "";
  renderHome();
  startAutoSync();
});

window.addEventListener("pageshow", () => {
  startAutoSync();
  refreshIfChanged();
});

window.addEventListener("focus", () => {
  startAutoSync();
  refreshIfChanged();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopAutoSync();
  else {
    startAutoSync();
    refreshIfChanged();
  }
});
