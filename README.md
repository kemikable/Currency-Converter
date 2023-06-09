# Currency-Converter
## Модуль 3. "Макет конвертера валют" 

Создайте онлайн-конвертер валют, получая последние данные из открытого API:
https://exchangerate.host/#/#docs 

Для получения информации о курсе валют необходимо запросить информацию о валютной паре, добавив в URL две аббревиатуры этих валют (без пробелов и разделителей). Пример для пары USD и RUB:
https://api.exchangerate.host/latest?base=USD&symbols=RUB 

Ответ возвращается как объект JSON. Переменная rates этого объекта содержит объект в виде пар key-value. Цифра, соответствующая ключу RUB — содержит текущий курс обмена.

Используя элементы управления конвертера, пользователь имеет возможность выбрать две валюты и сумму для конвертации. После выбора калькулятор показывает кросс-курс и окончательную сумму.

Случай ошибки загрузки должен быть обработан.

#### Требования:

 * Интерфейс должен соответствовать макету:
https://www.figma.com/file/u6vMK15L7Gkkolsq9ShNPe/M3-Currency-Converter?node-id=0%3A1&t=c7OYDicD7VqAc6TF-1.

* Реализован только макет заголовка. Не нужно привязывать какие-либо действия к ссылкам и кнопкам.

* Два INPUT-a для ввода валют. Можно вводить числа и точки, а при вводе запятой она будет преобразована в точку.

* По умолчанию поля предварительно заполнены в следующем формате:
В левом поле введена цифра 1.
Правое поле заполняется произведением числа в единице валюты, купленной на число в левом поле.

* Рядом с полями есть кнопка для выбора валюты.
Нет необходимости отправлять запрос на сервер при выборе двух одинаковых валют. По умолчанию для левого поля выбраны рубли, а для правого поля доллары (как в макете).
Конвертер может показать обменный курс любой обмениваемой валюты на целевую и целевую валюту на обмениваемую.

* Если API недоступен или возникла ошибка при выполнении запроса к нему, приложение не зависает, не перестает работать, а пользователю выводится сообщение о том, что что-то пошло не так.

* Проект должен находиться в отдельном репозитории на GitHub.

