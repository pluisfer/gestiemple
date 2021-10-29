# Plataforma de Gestión de Empleados

Este aplicativo tiene como objetivo desarrollar un sistema para la gestión de sus empleados en el cual se pueda visualizar los datos de los mismos.
el framework web Flask, el cuál está basado en Python.

## Funcionalidades de la plataforma

La plataforma a desarrollar tendrá las siguientes características:

- Los datos que se tienen de los empleados además de sus datos personales son, fecha de ingreso, tipo de contrato, fecha de término de contrato, cargo, dependencia en la que labora y salario devengado.
- Los tipos de usuarios que debe manejar el sistema son superadministrador, administrador, y usuario final.
- El usuario final debe estar en la capacidad poder visualizar su información y una retroalimentación realizada mensualmente por la compañía acerca de su desempeño junto con un puntaje asignado.
- El administrador de la plataforma debe estar en la capacidad de poder agregar usuarios al sistema y gestionar los datos de los mismos.
- Un superadministrador ejerce el control total de la plataforma (usuarios y administradores).
- Los datos suministrados por los usuarios deben cumplir la política de privacidad de datos vigente.

## Descarga e instalación del proyecto

Para descargar el proyecto puedes clonar el repositorio:

    git clone https://github.com/pluisfer/Proyecto-Grupo-39-9

### Variables de entorno

Para que plataforma funcione debes crear las siguientes variables de entorno:

#### Linux/Mac

    export FLASK_APP="app.py"
    export FLASK_ENV="development"
    export APP_SETTINGS_MODULE="config.local"

#### Windows

    set "FLASK_APP=app.py"
    set "FLASK_ENV=development"
    set "APP_SETTINGS_MODULE=config.local"

> Mi recomendación para las pruebas es que añadas esas variables en el fichero "activate" o "activate.bat"
> si estás usando virtualenv

### Instalación de dependencias

En el proyecto se distribuye un fichero (requirements.txt) con todas las dependencias. Para instalarlas
basta con ejectuar:

    pip install -r requirements.txt

## Ejecución con el servidor que trae Flask

Una vez que hayas descargado el proyecto, creado las variables de entorno e instalado las dependencias,
puedes arrancar el proyecto ejecutando:

    flask run

## Nota importante

> Recuerda que antes que todo debes crear tu entorno virtual con el comando .

virtualenv env

> Activarlos con el comando

env\Scripts\activate.bat

.\env\Scripts\activate

> Instalar el entorno de Flask

pip install Flask

> Para verificar lo instalado y listarlo en un archivo se le ejecuta los comandos

pip list

pip freeze

## Base de datos utilizada

    SQLite nombre de la base de datos: gestionempleados.db
