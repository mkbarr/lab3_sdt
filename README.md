# Cpp completion helper
## General
Барташев Марк М3101

Расширение ускоряет написание кода на языке C++, 
добавляя возможность вставлять шаблонные конструкции: for, while и т.д. в одно нажатие.
Ключевые слова позволяют легко выбрать необходимый вариант во всплывающем окне.

## Extension
`cpp template` вставляет общий скелет простейшего консольного приложения
и переносит курсор в функцию `main`:
```cpp
#include <iostream>

int main(int argc, char** argv){
  
  return 0;
}
```

`Hello world` всавляет код печатающий "Hello World!" в стандартный поток вывода:
```cpp
std::cout << "Hello World!" << std::endl;
``` 

`pfor` и `mfor` печатают шаблоны для цикла for с возрастающим и убывающим аргументом соответственно
и позволяют одновременно вставить необходимый аргумент в условие цикла:
```cpp
for (int i = 0; i < ...; i++)
for (int i = ...; i >= 0; i--){

}
```

`twhile` вставляет шаблон цикла while:
```cpp
while (condition){

}
```

`tif` вставляет шаблон условия if:
```cpp
if (condition){

}
```
