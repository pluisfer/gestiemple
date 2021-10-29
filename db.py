
import sqlite3
from sqlite3 import Error
conexion = ''
def get_db():
    try:
        conexion = sqlite3.connect("database/GestionEmpleados_DB.db")
        return conexion
    except Error:
        print(Error)

def close_db():
    conexion.close()
