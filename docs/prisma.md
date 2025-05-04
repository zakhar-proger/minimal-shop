## ✅ 1) Установить Prisma CLI и клиент

Выполняем в корне проекта:

```bash
pnpm add -D prisma
pnpm add @prisma/client
```

- `prisma` — это **CLI** (только для разработки)
- `@prisma/client` — это **библиотека для кода** (используется в рантайме)

---

## ✅ 2) Инициализировать Prisma (создать `schema.prisma`)

```bash
pnpm prisma init
```

После этого у тебя появится:

- `prisma/schema.prisma`
- `.env` файл с переменной `DATABASE_URL`

---

## ✅ 3) Настроить подключение к базе

В файле `.env` пропиши свой `DATABASE_URL`. Например, для PostgreSQL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

---

## ✅ 4) Описать модель данных в `prisma/schema.prisma`

Пример модели для интернет-магазина 👇

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  price       Float
  description String?
  createdAt   DateTime @default(now())
}
```

---

## ✅ 5) Создать миграцию и применить её

```bash
pnpm prisma migrate dev --name init
```

Эта команда:

- создаст миграцию
- создаст базу, если её нет
- обновит `node_modules/.prisma/client`

---

## ✅ 6) Генерация Prisma Client

Если изменил `schema.prisma`, обязательно сгенерируй новый клиент:

```bash
pnpm prisma generate
```

---

## ✅ 7) Использовать Prisma Client в коде Next.js

Создай `lib/prisma.ts`:

```typescript
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

Теперь можно использовать Prisma в любом `app/api` роуте или серверном компоненте 👇

```typescript
import { prisma } from "@/lib/prisma";

export async function getProducts() {
  return await prisma.product.findMany();
}
```

---

## ✅ 8) Просмотреть базу через Prisma Studio

```bash
pnpm prisma studio
```

Откроется красивый UI для работы с базой.

---

## 🌱 Если будешь деплоить на Vercel:

- Подключай переменную `DATABASE_URL` через `vercel env pull`
- Для продакшена применяй миграции командой:

```bash
pnpm prisma migrate deploy
```

---

## 📦 Полезные команды с pnpm + Prisma:

| Действие                    | Команда                               |
| --------------------------- | ------------------------------------- |
| Инициализация Prisma        | `pnpm prisma init`                    |
| Создать миграцию            | `pnpm prisma migrate dev --name init` |
| Генерация клиента           | `pnpm prisma generate`                |
| Открыть Prisma Studio       | `pnpm prisma studio`                  |
| Деплой миграций (на Vercel) | `pnpm prisma migrate deploy`          |
