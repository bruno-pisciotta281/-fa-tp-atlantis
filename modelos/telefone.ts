import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public DDD: string
    public numero: string

    public clonar(): Prototipo {
        let telefone = new Telefone()
        telefone.DDD = this.DDD
        telefone.numero = this.numero
        
        return telefone
    }
} 