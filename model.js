
        class Marble {
            color

            constructor(color){
                this.color = color
            }
        }


        class Position {

            container
            neighbours //dictionary keys: n, no, o, zo, z, zw, w, nw
            keys = { 'n': 'z', 'no': 'zw', 'o': 'w', 'zo': 'nw', 'z': 'n', 'zw': 'no', 'w': 'o', 'nw': 'zo' }

            constructor() {
                this.neighbours = []
            }

            connect(newKey, neighbour) {
                this.neighbours[newKey] = neighbour
    
                neighbour.neighbours[keys[newKey]] = this
            }

            setMarbleContainer(container) {
                this.container = container
            }

            checkForRow(numberOfRows){
                //check foreach in indere direction 
            }
        }


        class MarbleContainer {    

            marble
            positionIndex
            positions

            constructor(positions, positionIndex) {
                this.positions = positions
                this.positionIndex = positionIndex
            }

            placeMarble(marble) {
                this.marble = marble
            }

            turnRight() {
                positionIndex = (positionIndex + 1) % 4

                positions[positionIndex].setMarbleContainer(this)
            }

            turnLeft() {
                positionIndex = positionIndex ? positionIndex - 1 : 3

                positions[positionIndex].setMarbleContainer(this)
            }
        }


        class Quarter {

            containers

            constructor(containers){
                
                this.containers
            }

            turnRight() {
                containers.forEach(container => container.turnRight())
            }

            turnLeft() {
                containers.forEach(container => container.turnLeft())
            }


        }