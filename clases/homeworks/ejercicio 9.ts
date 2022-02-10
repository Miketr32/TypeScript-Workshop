function sumatoria(a: number, b: string): string;
function sumatoria(a: string, b: string): string;
function sumatoria(a: string, b: number): string;
function sumatoria(a: number, b: number): number {
    return a + b;
}

let resultado = sumatoria(2, '8') //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

//Aplicar lo mismo para el resto de las operaciones matematicas!