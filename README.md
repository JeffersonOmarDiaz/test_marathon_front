# test_marathon_front
La parte visual de marathon esta realizada en Angular 14


### Evaluación
#### 1. Crear una pantalla que permita visualizar empresas. 

![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/93cb1476-07d5-4204-be5d-a1cff3afd1d0)

#### 2. Crear una pantalla para crear empresas. 
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/7a235fac-27b6-4585-aea9-770287efda2a)

#### 3. Cree una pantalla para editar las empresas
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/f0fae7e2-d43d-4858-a8bc-ea2a998aaf59)

#### 4. Cree una pantalla que le permita visualizar los departamentos.
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/ba98b6ce-edbe-4ec1-8f67-83c818b5b1f3)

#### 5. Crear una pantalla para crear departamentos. 
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/3db7750c-27d2-4bc8-b22b-e5e4bbca79ad)

#### 6. Cree una pantalla para editar los departamentos
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/2f1e8d14-89a5-481a-b6f8-9ab4502e4a1d)

#### 7. Cree una pantalla que le permita visualizar a los empleados. 
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/48b4e515-d4fa-4952-a149-229b190473de)

#### 8. Crea una pantalla para crear empleados. 
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/21d8a023-67ae-457b-a6b3-71be1e11e558)

#### 9. Cree una pantalla para editar los empleados. 
![image](https://github.com/JeffersonOmarDiaz/test_marathon_front/assets/32933851/d182f1c2-0eee-405c-a9db-a0c3aebad1bc)

#### 10. Cree una guía de instalación para poner en producción la aplicación
| Herramienta      | Versión | comando/fuente |
| ------------- | ----------:| ------------- |
| Nodejs  | 16.15.1 |[NodeJs](https://nodejs.org/es/download) |
| Angular     |   14.2.11 |npm install -g @angular/14.2.11|

### Clonar el proyecto y aplicar el comando
| npm install |
| ----------- |
### configuración del proyecto
- Cambiar las variables de entorno en el archivo [environment.prod.ts](https://github.com/JeffersonOmarDiaz/test_marathon_front/blob/main/src/environments/environment.prod.ts) en donde se requiere la url del backend, es similar al archivo environment.ts
-  Abrir una terminal en la raíz del proyecto y ejecutar el  comando:
|  ng build --prod |
| ---------------- |
- Este comando compilará el proyecto en modo producción y generará los archivos en una nueva carpeta dist/
- Copiar el contenido de la carpeta dist  en la carpeta de documentos de Apache (htdocs o var/www/html, dependiendo de la configuración) en el servidor [netlify](https://www.netlify.com/) se debe copiar toda la carpeta dist/

