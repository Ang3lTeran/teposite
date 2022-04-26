from flask import Flask, render_template,request,redirect,url_for,flash
import urllib.request

from flask_mysqldb import MySQL 

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flaskcontacts'
mysql = MySQL(app)

#Lo que representa el / es que estamoms en la pagina principal 
@app.route('/')
def Index ():
    return render_template('/templete.html')
@app.route('/add-person', methods=['POST'])

#Cuando queramos agregar algun contacto a la base de datos 
def add_new_user ():
    if request.method =='POST':
       nombre =  request.form['name']
       apellidos = request.form['last']
       correo = request.form ['email']
       contrasena = request.form ['password']
       cur = mysql.connection.cursor()
       cur.execute('INSERT INTO contacts (name, last_name,email,password) VALUES (%s,%s,%s,%s)',
       (nombre,apellidos, correo, contrasena) )
       mysql.connection.commit()
       #flash('Correo electronico Add successfully')
       return redirect(url_for('Index'))



if __name__ == "__main__":
    app.run(port = 3000, debug = True)