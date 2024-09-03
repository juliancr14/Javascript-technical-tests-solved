function manufacture(gifts, materials) {

    let eachMaterial = materials.split("");
    let giftsMaked = [];

    for (let i = 0; i < gifts.length; i++) {

        let separedGift = gifts[i].split("");
        let posible = false;
        let finishLoop = false;
        //let canMake = [];

        for (let x = 0; x < separedGift.length; x++) {

            posible = false;

            for (let y = 0; y < eachMaterial.length; y++) {

                if (separedGift[x] == eachMaterial[y]) {
                    posible = true;
                    break;
                }

                //Sirve para observar paso a paso como se va guardando cada caracter y como se reinicia cuando no se cumple la condición
                /*if (posible) {

                    canMake.push(separedGift[x])
                    console.log(canMake);
                    break;

                }*/

                if (y == eachMaterial.length - 1 && posible == false) {
                    finishLoop = true;
                    break;
                }

            }

            if (finishLoop == true) {
                break;
            }

        }

        if (posible) {
            giftsMaked.push(gifts[i]);
        }

    }

    //console.log(giftsMaked);
    return giftsMaked;
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

manufacture(gifts, materials);

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2)

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3)
