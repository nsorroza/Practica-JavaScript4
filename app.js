console.log('Javascript 5')
 const array = [true, 100, 'Sebastian', null, undefined, {nombre: 'nicolas', apellido:'gonzalez'}]
 console.log(array)
 console.log(array[5])
 console.log(array.length)
 console.log(array[array.length - 1])
 console.log(array.indexOf('Nicolas'))
 const alumnos24i = ['Nacho', 'Agus', 'Moni', 'Carlitos']
 alumnos.push('Luis Mi', 'Flor')
 alumnos.pop()
 alumnos.splice(0)
 console.log(alumnos)
 alumnos.unshift('Nahuel', 'Nico')
 const alumnos11i = ['Ale', 'Sil', 'Nico']
 const alumnosJuntos = alumnos24i.concat(alumnos11i)
 console.log(alumnosJuntos.sort()) console.log(alumnosJuntos.reverse())
 console.log(alumnosJuntos.includes('Maciel'))
 if (alumnosJuntos.includes('Maciel')){   console.log('Maciel esta en clases.') } else {   console.log('Maciel No esta en clases.') }

 const alumnos = ['Nacho', 'Agus', 'Moni', 'Carlitos']

 console.log(alumnos.length)

 for (let i = 0; i < alumnos.length; i++){
   console.log(alumnos[i])
 }

 let numero = 1

 while(numero < 1){
   console.log('Hola mundo')
   numero = numero + 1
 }

 do {
   console.log('Hola Mundo')
 } while (numero < 1);

 const alumnos = ['Nacho', 'Agus', 'Moni', 'Carlitos']

 alumnos.splice(0, 0, "Juan")

 console.log(alumnos)

 const edad = parseInt(prompt('Ingrese su edad: '))

 console.log(edad)

 if(isNaN(edad)){
   alert('Ingresa un numero por favor.')
 } else if(edad >= 18){
   alert('Ya podes conducir.')
 } else { 
   alert('No podes conducir.')
 }