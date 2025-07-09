class CustomArray {
    constructor(){
        this.data = {}
        this.length = 0
    }
    push(item){
        this.data[this.length++] = item
    }
    find(callback){
        for(let i=0; i<this.length; i++){
            if(callback(this.data[i], i))
                return this.data[i]
        }
        return undefined
    }
    filter(callback){
        const result = new CustomArray()
        for(let i=0; i<this.length; i++){
            if(callback(this.data[i], i))
                result.push(this.data[i])
        }
        return result
    }
    map(callback){
        const result = new CustomArray()
        for(let i=0; i< this.length; i++){
            result.push(callback(this.data[i], i))
        }
        return result
    }
    reduce(callback, initialValue){
        let acc = initialValue
        for(let i=0; i<this.length;i++){
            acc = callback(acc, this.data[i], i)
        }
        return acc
    }
    toArray() {
        return Array.from({
            length : this.length
        }, (_,i) => this.data[i])
    }
}
export default CustomArray