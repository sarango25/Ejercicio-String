class clasePalabra{

    
    constructor (palabra, posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.palabra = palabra;
    }

    getPalabra(){
        return this.palabra;
    }

    getPosX() {
        return this.posX;
    }

     getPosY() {
        return this.posY;
    }

     setPosX( posX ) {
        this.posX = posX;
    }

     setPosY( posY ) {
        this.posY = posY;
    }
}