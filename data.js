// data.js
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

  /* city, tactics, exploration — БЕЗ ИЗМЕНЕНИЙ */
};
