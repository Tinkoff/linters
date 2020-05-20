# eslint-config-tinkoff
Config плагин для eslint который содержит сконфигурированный eslint с нашими стилями и плагинами. Работает с JS и TS кодом.

## Подключение
Устанавливаем через npm
```bash
npm i --save-dev eslint-plugin-tinkoff
```

В `eslint-plugin-tinkoff` уже автоматически подключен `eslint` и `prettier` и вам не нужно думать о том, с какими версиями плагин работает

Теперь нам нужно прописать паки с конфигами в файл `.eslintrc`. Нам обязательно нужно выбрать базовый пак и при необходимости добавить дополнительные паки

#### Если у нас приложение, то прописываем
```bash
{
  "extends": ["plugin:tinkoff/app"]
}
```

#### Если у нас библиотека, то прописываем
```bash
{
  "extends": ["plugin:tinkoff/lib"]
}
```

#### Если у нас приложение и используется React, то прописываем
```bash
{
  "extends": ["plugin:tinkoff/app", "plugin:tinkoff/react"]
}
```

#### Если у нас приложение и используется Angular, то прописываем
```bash
{
  "extends": ["plugin:tinkoff/app", "plugin:tinkoff/angular"]
}
```

#### Если у нас используется Jest, то прописываем
```bash
{
  "extends": ["plugin:tinkoff/app", "plugin:tinkoff/jest"]
}
```

## Конфигурации
Основные паки конфигураций. Эти паки содержат основные правила
* `tinkoff/app` - правила линтинга специфичных и заточенных для приложений
* `tinkoff/lib` - правила линтинга специфичных и заточенных для разработки библиотек

Дополнительные паки конфигурация. Эти паки не содержат основных правил линтинга и должны подключаться дополнительно
* `tinkoff/react` - правила для линтинга React кода
* `tinkoff/angular` - правила для линтинга Angular кода
* `tinkoff/tramvai` - правила для линтинга в tramvai приложениях
* `tinkoff/jest` - правила для линтинга Jest тестов

## Используемые плагины
В `tinkoff/app` и `tinkoff/lib` используются
* `eslint-config-airbnb` - базовый популярный config правил
* `eslint-plugin-eslint-comments` - валидация `eslint` комментариев
* `eslint-plugin-import` - линтинг импортов в проекте, что импортим и как
* `eslint-plugin-promise` - плагин реализует линтинг работы с промисами и ассинхронностью
* `eslint-plugin-jest` - проверяет jest тесты и помогает уменьшить количество проблем
* `@typescript-eslint/eslint-plugin` - линтинг TypeScript файлов и то, как описаны типы
* `eslint-plugin-prettier` - плагин отключает форматирование кода средствами eslint и переносит всю логику на prettier

В `tinkoff/react` используется
* `eslint-plugin-react` - плагин с правилами для линтинга react
* `eslint-plugin-react-hooks` - разработчики React выпустили плагин который помогает меньше допускать ошибок в React хуках

## Внутренние правила

### bundle-chunk-name

В tramvai приложении для правильной работы системы бандлов, необходимо для импортов указывать [специальные комментарии для динамических импортов](https://pfp.gitlab-rnd.tcsbank.ru/tramvai/docs/modules/render#%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8).
Это правило позволяет проверить, что для динамических импортов бандлов правильно указан управляющий комментарий `webpackChunkName: [name]`.
Также правило позволяет применить автофикс в большинстве случае.

Правило поставляется вместе с `plugin:tinkoff/tramvai`

Пример неправильно кода:
```typescript
bundles: {
  'tramvai/bundle-1': () => import("./bundles/bundle1"),
  'tramvai/bundle-2': () => import(/* webpackChunkName: "randomValue" */ "./bundles/bundle2")
}
```

Пример правильно кода, после автофикса версии выше:
```typescript
bundles: {
  'tramvai/bundle-1': () => import(/* webpackChunkName: "bundle-1" */ "./bundles/bundle1"),
  'tramvai/bundle-2': () => import(/* webpackChunkName: "bundle-2" */ "./bundles/bundle2")
}
```

Опции:
- `propertyNames`: задает массив названий свойств объекта, для которых будет производиться анализ. По умолчанию работает для свойств с именем `bundles`.
