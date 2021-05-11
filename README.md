# Movies App
## Архитектура:
Репозиторий содержит сервер и клиент, которые расположены в папках server/ и client/ соответственно.

#### Сервер (server/):

Сервер написан на Node.js с использованием Express. Для хранения данных используется MongoDB.

Главный файл - app.js. В нем объявлено подключение к MongoDB Atlas с помощью mongoose. 

В папке routes/ указаны роуты запросов. Ко всем запросам используется префикс “/api/v1”.
	
Доступные запросы:

    GET  “/movies” - получить список всех фильмов
    POST  “/movies” - добавить фильм
    POST  “/movies/upload” - добавить массив фильмов
    DELETE “/movies/:id” - удалить фильм за id
    GET “/stars” - получить список всех звезд (актеров)
	
В папке controllers/ расположены обработчики запросов.

Директория “models” содержит поддерживаемую схему фильма.


#### Клиент (client/):

Клиент написан на React с использованием Material UI.

Главный компонент расположен в папке app. В нем объявлен контекст приложения, который содержит в себе состояние и функции для обновления состояния: списка фильмов и текущих фильтров, режима удаления фильмов, текста уведомления, показа модального окна, списка кинозвезд.
Компонент отображает: фильтры, список фильмов, кнопки добавления/удаления, модальное окно, уведомления.

Все компоненты описаны в папке components/, где каждая субдериктория содержит index.js + index.scss файл со стилями.
Все остальные папки содержат вспомогательные файлы, содержимое которых соответствует названию папки.
