class Component {
    setName(name){ this.name = name }

    setStructure(structure){ this.structure = structure }

    getName(){ return this.name }

    print(){ console.log(this.structure) }
}

class ComponentInput extends Component{
    constructor(){
        super()
        this.setName("Input")
        this.setStructure(`<input name = "${this.getName()}">`)
    }
}

class ComponentSelect extends Component{
    constructor(){
        super()
        this.setName("Select")
        this.setStructure(`<select name = "${this.getName()}"> </select>`)
    }
}

class ComponentButton extends Component{
    constructor(){
        super()
        this.setName("Button")
        this.setStructure(`<button name = "${this.getName()}">`)
    }
}

class ComponentRButton extends Component{
    constructor(){
        super()
        this.setName("Radio button")
        this.setStructure(`<radio name = "${this.getName()}">`)
    }
}

class ComponentFieldset extends Component{
    constructor(){
        super()
        this.elements = []
        this.setName("fieldset")
    }

    addElement(element){
        this.elements.push(element)
    }

    print(){
        console.log( `<${this.getName()}>` );

        this.elements.forEach(element => {
            element.print()
        });

        console.log( `</${this.getName()}>` );
    }
}

class Form extends ComponentFieldset{
    constructor(){
        super()
        this.setName("form")
    }
}

let fieldset1 = new ComponentFieldset()
fieldset1.addElement(new ComponentInput())
fieldset1.addElement(new ComponentSelect())

let fieldset2 = new ComponentFieldset()
fieldset2.addElement(new ComponentInput())
fieldset2.addElement(new ComponentSelect())
fieldset2.addElement(new ComponentButton())
fieldset2.addElement(fieldset1)

let form2 = new Form()
form2.addElement(new ComponentInput())
form2.addElement(new ComponentSelect())
form2.addElement(new ComponentRButton())
form2.addElement(fieldset2)
form2.print()
