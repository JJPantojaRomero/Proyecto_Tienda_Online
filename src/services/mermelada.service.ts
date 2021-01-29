import { Injectable } from '@angular/core';

export interface Mermelada {

  nombre: string,
  precio: number,
  slogan: string,
  img: string,
  elaboracion: string,
  id?: number
}

@Injectable()
export class MermeladaService
{
  constructor()
  {
    console.log('Servicio listo para usarse');
  }

  private mermeladas: Mermelada[] = [
    {
      nombre: "Fresa",
      precio: 2.8,
      slogan: "mermelada de fresa, siempre es la que más pesa",
      img: "assets/img/fresa.png",
      elaboracion: "Ahora estamos en plena temporada de fresas, por lo que podemos preparar en cantidad y almacenar nuestra mermelada de fresas casera para el resto del año. También podemos prepararla y regalarla, es un detalle precioso hecho con nuestras manos. Para decorar los tarros le he puesto un poco de tela en la tapa con una goma y alrededor una cinta."
    },
    {
      nombre: "Limón",
      precio: 2.4,
      slogan: "mermelada de limón para la salud del riñón",
      img: "assets/img/limon.png",
      elaboracion: "El limón es una fuente muy saludable de vitamina C, además de una fruta que ayuda a reducir la tensión arterial. Combina muy bien con otros alimentos y se puede elaborar con él una riquísima mermelada. El problema del limón es que se compone de mucha agua, y siempre es difícil elaborar mermeladas con frutos que tienen un alto contenido en agua porque se suelen quedar líquidas"
    },
    {
      nombre: "Frambuesa",
      precio: 1.8,
      slogan: "mermelada de frambuesa perfecta para adornar la mesa",
      img: "assets/img/frambuesa.png",
      elaboracion: "La frambuesa (Rubus idaeus) es un arbusto del cual se obtienen unos frutos del mismo nombre. La frambuesa (fruto) suele darse entre finales de verano y principios del otoño, aunque, como suele ocurrir con muchos otros tipos de fruta, se pueden encontrar a lo largo de todo el año como ahora, en primavera, cuando las hemos comprado para hacer esta Mermelada de frambuesa."
    },
    {
      nombre: "Tomate",
      precio: 1.3,
      slogan: "mermelada de tomate para acompañar el aguacate",
      img: "assets/img/tomate.png",
      elaboracion: "Si a estas alturas del Verano ya estás un pelin harto de las recetas típicas del verano que llevan tomate, como el gazpacho o el salmorejo, te recomiendo esta mermelada de tomate"
    },
    {
      nombre: "Membrillo",
      precio: 3.6,
      slogan: "mermelada de membrillo por si no quiere lechuga el grillo",
      img: "assets/img/membrillo.png",
      elaboracion: "El membrillo una de las frutas más aromáticas que existen y a pesar de que no podamos disfrutar de ella en crudo ya que su carne es granulada, dura y amarga… Cocinada junto con el azúcar y algunos otros ingredientes aromáticos, la magia sucede y se convierte en un delicioso manjar."
    },
    {
      nombre: "Pimiento",
      precio: 3.1,
      slogan: "mermelada de pimiento, tanto para el coronel como para el sargento",
      img: "assets/img/pimiento.png",
      elaboracion: "La mermelada de pimientos combina muy bien con quesos, tanto suaves como fuertes, y también puede servirse como acompañamiento de carnes o pescados. Un solomillo a la plancha o un taco de bacalao, cambian si les ponemos en el plato un poco de esta confitura de pimiento rojo. Además, puede dar vida a tus ensaladas si añades una cucharadita a la vinagreta."
    },
  ];


  getMermeladas():Mermelada[]{
    return this.mermeladas;
  }

  getMermelada(id:number):Mermelada{
    return this.mermeladas[id];
  }

  public buscarMermeladas(texto: string):Mermelada[] {
    let mermeladasEncontradas: Mermelada[] = [];
    texto = texto.toLowerCase();
    for (let i=0; i<this.mermeladas.length; i++) {
      let mermelada = this.mermeladas[i];
      let nombre = mermelada.nombre.toLowerCase();
      if (nombre.indexOf(texto) >= 0) {
        mermelada.id = i;
        mermeladasEncontradas.push(mermelada)
      }
    }
    return mermeladasEncontradas;
  }
}
