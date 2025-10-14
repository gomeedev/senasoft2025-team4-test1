import MySQLdb

try:
    conn = MySQLdb.connect(
        host="127.0.0.1",
        user="root",
        passwd="",
        db="senasoft",
        port=3306
    )
    print("✅ Conexión exitosa con MariaDB desde Python")
except Exception as e:
    print("❌ Error de conexión:", e)
