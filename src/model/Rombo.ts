export class Rombo{
    private _diagonalVertical: number
    private _diagonalHorizontal:number

    constructor(diagonalVertical : number, diagonalHorizontal:number){
        this._diagonalVertical = diagonalVertical
        this._diagonalHorizontal = diagonalHorizontal
    }

    get diagonalVertical(){
        return this._diagonalVertical
    }

    get diagonalHorizontal(){
        return this._diagonalHorizontal
    }

    perimetro = () => 2 * (Math.sqrt(Math.pow(this._diagonalVertical, 2)+ Math.pow(this._diagonalHorizontal, 2)))
    
    area = () => (this._diagonalVertical * this._diagonalHorizontal) / 2

}