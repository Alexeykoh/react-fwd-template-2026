# React FSD Template 2026

Современный шаблон React-проекта с TypeScript, построенный на архитектуре Feature-Sliced Design 2.1.

## Технологический стек

- **React 19** + **TypeScript** - современная разработка с строгой типизацией
- **Vite** - быстрый сборщик и dev-сервер
- **React Router** - маршрутизация
- **Redux Toolkit** + **RTK Query** - управление состоянием и работа с API
- **Tailwind CSS** - утилитарный CSS-фреймворк
- **shadcn/ui** - компоненты UI
- **Zod** - валидация схем
- **Lucide Icons** - иконки
- **Vitest** - тестирование
- **ESLint** + **Prettier** - качество кода

## Быстрый старт

### Требования

- Node.js >= 22.0.0
- npm >= 10.0.0

### Установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd react-fwd-template-2026

# Установить зависимости
npm install

# Создать файл .env на основе .env.example
cp .env.example .env

# Запустить dev-сервер
npm run dev
```

### Скрипты

```bash
# Разработка
npm run dev          # Запуск dev-сервера

# Сборка
npm run build        # Production сборка
npm run preview      # Просмотр production сборки

# Качество кода
npm run lint         # Проверка ESLint правил (включая FSD boundaries)
npm run lint:fix     # Автоисправление ESLint ошибок
npm run format       # Форматирование кода Prettier
npm run format:check # Проверка форматирования
npm run type-check   # Проверка TypeScript типов

# Тестирование
npm run test         # Запуск тестов
npm run test:ui      # Тесты с UI
npm run test:coverage # Покрытие кода тестами
```

## Архитектура Feature-Sliced Design 2.1

Проект организован по методологии [Feature-Sliced Design](https://feature-sliced.design/ru/docs/get-started/overview) версии 2.1.

### Структура проекта

```
src/
├── app/              # Инициализация приложения
│   ├── providers/    # Провайдеры (Router, Redux)
│   ├── store/        # Redux store
│   ├── styles/       # Глобальные стили
│   └── App.tsx       # Корневой компонент
│
├── pages/            # Страницы приложения
│   └── home/
│       ├── ui/       # UI компоненты страницы
│       └── index.ts  # Public API
│
├── widgets/          # Композитные блоки страниц
│
├── features/         # Бизнес-функции
│
├── entities/         # Бизнес-сущности
│
└── shared/           # Переиспользуемые модули
    ├── ui/           # UI-kit (shadcn/ui компоненты)
    ├── lib/          # Утилиты
    ├── api/          # API клиенты (RTK Query base)
    ├── config/       # Конфигурация
    └── types/        # Общие типы
```

### Правила импортов

В FSD действуют строгие правила импортов между слоями:

- **app** может импортировать из всех слоев
- **pages** может импортировать из widgets, features, entities, shared
- **widgets** может импортировать из features, entities, shared
- **features** может импортировать из entities, shared
- **entities** может импортировать только из shared
- **shared** может импортировать только из shared

ESLint автоматически проверяет соблюдение этих правил.

### Алиасы путей

Проект использует алиасы для удобного импорта:

```typescript
import { HomePage } from '@pages/home';
import { Button } from '@shared/ui/components/button';
import { baseApi } from '@shared/api/baseApi';
```

Доступные алиасы:
- `@app/*` → `src/app/*`
- `@pages/*` → `src/pages/*`
- `@widgets/*` → `src/widgets/*`
- `@features/*` → `src/features/*`
- `@entities/*` → `src/entities/*`
- `@shared/*` → `src/shared/*`

## Конфигурация

### Переменные окружения

Создайте файл `.env` на основе `.env.example`:

```env
VITE_API_URL=http://localhost:8000/api
```

### shadcn/ui

Компоненты shadcn/ui находятся в `src/shared/ui/components/`.

Для добавления нового компонента:

```bash
npx shadcn@latest add <component-name>
```

## Лицензия

MIT
