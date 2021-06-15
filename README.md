# teleasistencia_navalmoral

## Dependencias:

1. ```pip install Django==3.2.3```
2. ```pip install django-model-utils==4.1.1```
3. ```pip install djangorestframework```
4. ```pip install django-rest-framework-social-oauth2```

## Pasos para la instalación:

1. Instalación de python - https://www.python.org/ . Seleccionar la opción que nos permite añadir python al PATH. 
   Comprobamos la instalación desde cmd: ```python --version```
2. Descargamos e instalamos el Entorno de desarrollo PyCharm - https://www.jetbrains.com/pycharm/
3. Creamos el entorno virutal en la ruta teleasistencia_navalmoral/Server ```virtualenv venviorment```

    ![image](https://user-images.githubusercontent.com/57873286/122094653-af3ef400-ce0c-11eb-8556-620286524cc6.png)

5. Ejecutamos el siguietne archivo para seleccionar el entorno virtual ```Server/venviorment/Scripts/activate```
6. Hacemos permanente el entorno virtual. Vamos a ```File -> Settings... -> Project --> Python Interpreter``` y seleccinoamos el Interprete ```Server\venviorment\Scripts\python.exe```

    ![image](https://user-images.githubusercontent.com/57873286/122095294-794e3f80-ce0d-11eb-9577-985b2d170102.png)

8. Actualizamos pip ```pip install --upgrade pip```
9. Instalamos los requerimientos ```pip install -r requerimientos.txt```


## Arrancar el proyecto

Desde Server\teleasistencia ejecutamos ```python manage.py runserver```




[Sobre el Gitignore](https://djangowaves.com/tips-tricks/gitignore-for-a-django-project/)
