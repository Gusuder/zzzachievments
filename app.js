// === ДАННЫЕ БЕЗ ИЗМЕНЕНИЙ ===
const ACHIEVEMENTS = {
  history: {
    name: "История",
    subfilters: {
      trust: { name: "Доверие агентов", version: "v1.0" },
      phaethon: { name: "Хроника Фаэтона", version: "v1.0" },
      agent_stories: { name: "Истории агентов", version: "v1.1" },
      specials: { name: "Специальные выпуски", version: "v1.1" },
      randomness: { name: "Время случайностей", version: "v1.2" },
      melt_keys: { name: "Пусть клавиши плавятся", version: "v1.2" }
    },
    data: {
      trust: [
        { id: "t1", title: "Первое впечатление", desc: "Повысьте доверие любого агента до 3 уровня.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "t2", title: "Истинное доверие", desc: "Повысьте доверие 3 агентов до 5 уровня.", tier: "silver", version: "v1.0", reward: 10 },
        { id: "t3", title: "Доверие на всю жизнь", desc: "Повысьте доверие 5 агентов до максимального уровня.", tier: "gold", version: "v1.0", reward: 20 }
      ],
      phaethon: [
        { id: "p1", title: "Хроники начинаются", desc: "Завершите первую главу Хроники Фаэтона.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "p2", title: "Середина пути", desc: "Завершите главу 5.", tier: "silver", version: "v1.0", reward: 10 },
        { id: "p3", title: "Финал эпохи", desc: "Завершите последнюю главу Хроники Фаэтона.", tier: "gold", version: "v1.2", reward: 20 }
      ],
      agent_stories: [
        { id: "as1", title: "Личный разговор", desc: "Прочитайте историю агента Беллы.", tier: "bronze", version: "v1.1", reward: 5 },
        { id: "as2", title: "Больше историй", desc: "Прочитайте истории 4 агентов.", tier: "silver", version: "v1.1", reward: 10 },
        { id: "as3", title: "Связи и судьбы", desc: "Прочитайте истории 8 агентов.", tier: "gold", version: "v1.1", reward: 20 }
      ],
      specials: [
        { id: "sp1", title: "Праздничный выпуск", desc: "Завершите праздничное событие «Новогодний шторм».", tier: "silver", version: "v1.1", reward: 10 },
        { id: "sp2", title: "Особое издание", desc: "Соберите все коллекционные карточки события.", tier: "gold", version: "v1.1", reward: 20 }
      ],
      randomness: [
        { id: "r1", title: "Шанс на удачу", desc: "Выполните 5 случайных заданий.", tier: "bronze", version: "v1.2", reward: 5 },
        { id: "r2", title: "Системный сбой", desc: "Выполните 15 случайных заданий.", tier: "silver", version: "v1.2", reward: 10 },
        { id: "r3", title: "Хаос под контролем", desc: "Завершите 20 случайных событий.", tier: "gold", version: "v1.2", reward: 20 }
      ],
      melt_keys: [
        { id: "mk1", title: "Первый геймплей", desc: "Сыграйте в мини-игру «Клавиатурный хаос».", tier: "bronze", version: "v1.2", reward: 5 },
        { id: "mk2", title: "Мастер клавиатуры", desc: "Достигните 90% точности в мини-игре.", tier: "silver", version: "v1.2", reward: 10 }
      ]
    }
  },
  city: {
    name: "Город",
    subfilters: {
      proxy: { name: "Бизнес прокси", version: "v1.0" },
      yanus: { name: "Район Януса", version: "v1.0" },
      waifey: { name: "Вайфей", version: "v1.1" },
      bypass: { name: "Район Объездной", version: "v1.1" },
      throne: { name: "Тронный район", version: "v1.2" }
    },
    data: {
      proxy: [
        { id: "pr1", title: "Первый контракт", desc: "Завершите первый контракт прокси.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "pr2", title: "Надёжный агент", desc: "Выполните 20 контрактов.", tier: "silver", version: "v1.0", reward: 10 },
        { id: "pr3", title: "Легенда Нью-Эрры", desc: "Выполните 50 контрактов.", tier: "gold", version: "v1.0", reward: 20 }
      ],
      yanus: [
        { id: "y1", title: "Киоск Хаула", desc: "Разблокируйте газетный киоск.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "y2", title: "Видеоархив", desc: "Разблокируйте видеопрокат.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "y3", title: "Да здравствует Янус!", desc: "Откройте все объекты в районе Януса.", tier: "silver", version: "v1.0", reward: 10 }
      ],
      waifey: [
        { id: "w1", title: "Танец с AI", desc: "Победите босса «ДискоБОТ».", tier: "silver", version: "v1.1", reward: 10 },
        { id: "w2", title: "Вайфей-легенда", desc: "Завершите все задания Вайфея на 5★.", tier: "gold", version: "v1.1", reward: 20 }
      ],
      bypass: [
        { id: "b1", title: "Обходной путь", desc: "Пройдите все локации района Объездной.", tier: "bronze", version: "v1.1", reward: 5 },
        { id: "b2", title: "Подпольный король", desc: "Победите всех боссов района Объездной.", tier: "silver", version: "v1.1", reward: 10 }
      ],
      throne: [
        { id: "th1", title: "Восхождение", desc: "Достигните вершины Тронного района.", tier: "gold", version: "v1.2", reward: 20 }
      ]
    }
  },
  tactics: {
    name: "Тактика",
    subfilters: {
      combat: { name: "Боевое мастерство", version: "v1.0" },
      decay: { name: "Город увядания", version: "v1.0" },
      enemies: { name: "Враждебные цели", version: "v1.1" },
      merits: { name: "Боевые заслуги", version: "v1.1" },
      abyss: { name: "Затерянная бездна", version: "v1.2" }
    },
    data: {
      combat: [
        { id: "c1", title: "Первый шаг", desc: "Используйте комбо из 3 атак без промаха.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "c2", title: "Боец-профессионал", desc: "Выполните 50 комбо без промаха.", tier: "silver", version: "v1.0", reward: 10 },
        { id: "c3", title: "Абсолютный контроль", desc: "Завершите 10 боёв без потерь HP.", tier: "gold", version: "v1.0", reward: 20 }
      ],
      decay: [
        { id: "d1", title: "Следы прошлого", desc: "Исследуйте все зоны Города увядания.", tier: "silver", version: "v1.0", reward: 10 },
        { id: "d2", title: "Память города", desc: "Соберите все артефакты увядания.", tier: "gold", version: "v1.0", reward: 20 }
      ],
      enemies: [
        { id: "e1", title: "Сбор образцов", desc: "Победите 50 врагов типа «Хтон».", tier: "bronze", version: "v1.1", reward: 5 },
        { id: "e2", title: "Охотник", desc: "Победите 200 врагов типа «Эхо».", tier: "silver", version: "v1.1", reward: 10 },
        { id: "e3", title: "Истребитель", desc: "Победите 500 врагов любого типа.", tier: "gold", version: "v1.1", reward: 20 }
      ],
      merits: [
        { id: "m1", title: "Рекрут", desc: "Достигните 5-го ранга в рейтинговом режиме.", tier: "bronze", version: "v1.1", reward: 5 },
        { id: "m2", title: "Ветеран", desc: "Достигните 10-го ранга.", tier: "silver", version: "v1.1", reward: 10 },
        { id: "m3", title: "За честь и славу", desc: "Достигните 15-го ранга в рейтинговом режиме.", tier: "gold", version: "v1.1", reward: 20 }
      ],
      abyss: [
        { id: "a1", title: "Первый спуск", desc: "Пройдите уровень 5 Затерянной бездны.", tier: "bronze", version: "v1.2", reward: 5 },
        { id: "a2", title: "Глубже, чем страх", desc: "Пройдите уровень 10 Затерянной бездны.", tier: "silver", version: "v1.2", reward: 10 },
        { id: "a3", title: "Покоритель Бездны", desc: "Пройдите уровень 30 Затерянной бездны.", tier: "gold", version: "v1.2", reward: 20 }
      ]
    }
  },
  exploration: {
    name: "Исследование",
    subfilters: {
      caves: { name: "Путеводитель по кавернам", version: "v1.0" },
      zero_key: { name: "Клавиша «Ноль»", version: "v1.1" },
      recon: { name: "Исследования в режиме разведки", version: "v1.2" }
    },
    data: {
      caves: [
        { id: "cv1", title: "Одна каверна", desc: "Пройдите любую каверну.", tier: "bronze", version: "v1.0", reward: 5 },
        { id: "cv2", title: "Множество тайн", desc: "Пройдите 10 каверн.", tier: "silver", version: "v1.0", reward: 10 },
        { id: "cv3", title: "Коллекционер", desc: "Откройте все каверны.", tier: "gold", version: "v1.0", reward: 20 }
      ],
      zero_key: [
        { id: "z1", title: "Клавиша найдена", desc: "Найдите первую «Клавишу Ноль».", tier: "bronze", version: "v1.1", reward: 5 },
        { id: "z2", title: "Ещё одна", desc: "Найдите 5 Ключей Ноль.", tier: "silver", version: "v1.1", reward: 10 },
        { id: "z3", title: "Хранитель секретов", desc: "Соберите все Ключи Ноль.", tier: "gold", version: "v1.1", reward: 20 }
      ],
      recon: [
        { id: "rc1", title: "Тайный агент", desc: "Соберите 20 данных в режиме разведки.", tier: "bronze", version: "v1.2", reward: 5 },
        { id: "rc2", title: "Глаз города", desc: "Соберите 100 данных.", tier: "silver", version: "v1.2", reward: 10 },
        { id: "rc3", title: "Глаз и ухо города", desc: "Завершите все разведзадания.", tier: "gold", version: "v1.2", reward: 20 }
      ]
    }
  }
};

let currentMain = "history";
let currentSub = "trust";
let userProgress = {};
let searchQuery = "";
let versionFilter = "";
let statusFilter = "";

// === ВАША ЛОГИКА ===
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
}

function loadProgress() {
  const saved = localStorage.getItem("zzz_ach_progress_v2");
  userProgress = saved ? JSON.parse(saved) : {};

  for (const main in ACHIEVEMENTS) {
    if (!userProgress[main]) userProgress[main] = {};
    for (const sub in ACHIEVEMENTS[main].subfilters) {
      if (!userProgress[main][sub]) {
        userProgress[main][sub] = ACHIEVEMENTS[main].data[sub].map(() => ({ completed: false, date: "" }));
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
  let total = 0, completed = 0, maxPoly = 0, earnedPoly = 0;
  let bronze = 0, silver = 0, gold = 0;

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
  document.getElementById("subfilter-stats").textContent =
    `Достижений: ${stats.completed}/${stats.total} • Полихром: ${stats.earnedPoly}/${stats.maxPoly}`;
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
    const matchesSearch = !searchQuery ||
      ach.title.toLowerCase().includes(searchQuery) ||
      (ach.desc && ach.desc.toLowerCase().includes(searchQuery));
    const matchesVersion = !versionFilter || ach.version === versionFilter;
    const matchesStatus = !statusFilter ||
      (statusFilter === "completed" && prog.completed) ||
      (statusFilter === "incomplete" && !prog.completed);

    return matchesSearch && matchesVersion && matchesStatus;
  });

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:30px; color:#777">Ничего не найдено</div>`;
    return;
  }

  filtered.forEach((ach) => {
    const realIndex = achList.findIndex(a => a.id === ach.id);
    const prog = progress[realIndex] || { completed: false, date: "" };

    const item = document.createElement("div");
    item.className = `ach-item ${prog.completed ? "completed" : ""}`;

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
    ver.className = "version-tag";
    ver.dataset.version = ach.version;
    ver.textContent = ach.version;
    tierDiv.appendChild(ver);

    const info = document.createElement("div");
    info.className = "ach-info";
    const title = document.createElement("div");
    title.className = "ach-title";
    title.textContent = ach.title;
    info.appendChild(title);

    if (ach.desc) {
      const desc = document.createElement("div");
      desc.className = "ach-desc";
      desc.textContent = ach.desc;
      info.appendChild(desc);
    }

    const footer = document.createElement("div");
    footer.className = "ach-footer";
    const reward = document.createElement("div");
    reward.className = "reward";
    reward.innerHTML = `<img src="icons/poly.png" alt="✦" class="poly-icon"> ${ach.reward}`;
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
  }
  saveProgress();
  renderAchievements();
}

document.addEventListener("DOMContentLoaded", init);
