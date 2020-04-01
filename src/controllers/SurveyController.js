const connection = require('../database/connection');
const emailTrigger = require('../triggers/email');

function min_max(n1,n2,n3){
    let min = (n1 < n2 && n1 < n3) ? 1 : (n2 < n1 && n2 < n3) ? 2 : 3;
    let max = (n1 > n2 && n1 > n3) ? 1 : (n2 > n3 && n2 > n1) ? 2 : 3;
    let nameAvenger;

    switch(max){
        case 1:
            nameAvenger = 'You are the Iron Man';
            break;
        case 2:
            nameAvenger = 'You are the Spider Man'
            break;
        case 3:
            nameAvenger = 'You are the Black Widow'
            break;
    }

    return {id: max, nameAvenger}
}

module.exports = {
    async create(request, response){
        let {
            question_1, // Do you like technology ?  yes (70% iron man | 20% spider man | 10% black widow) no (black widow 70% | 20% spider man | iron an 10%)
            question_2, // Do you consider yourself garrulous ? yes (30% iron man | 50% spider man | 20% black widow) no (black)
            question_3, // Are you shy ? yes (80% spider man | 10% iron man | 10% black widow)
            question_4, // Do you like sports ? yes (60% spider man | 10% iron man | 30% black widow)
            question_5, // Do you like being a joker ? yes (70% iron man | 20% spider man | 10% black widow)
            id_user, 
            email,
        } = request.body;
        
        let ironMan    = 0,
            spiderMan  = 0,
            blackWidow = 0;

        // Do you like technology ?
        if(question_1 == 'yes'){
            ironMan += 70;
            spiderMan += 20;
            blackWidow += 10;
        } else {
            blackWidow += 70;
            spiderMan += 20;
            ironMan += 10;
        }
        
        // Do you consider yourself garrulous ?
        if(question_2 == 'yes'){
            ironMan += 30;
            spiderMan += 50;
            blackWidow += 20
        } else {
            blackWidow += 50;
            spiderMan += 20;
            ironMan += 30;
        }

         // Are you shy ?
        if(question_3 == 'yes'){
            spiderMan += 80;
            ironMan += 10;
            blackWidow += 10;
        } else {
            spiderMan += 10;
            blackWidow += 40;
            ironMan += 40;
        }

         // Do you like sports ?
        if(question_4 == 'yes'){
            spiderMan += 50;
            ironMan += 10;
            blackWidow += 40
        } else {
            spiderMan += 10;
            blackWidow += 30;
            ironMan += 60;
        }

        // Do you like being a joker ? 
        if(question_5 == 'yes'){
            ironMan += 70;
            spiderMan += 20;
            blackWidow += 10
        } else {
            spiderMan += 20;
            blackWidow += 70;
            ironMan += 10;
        }

        
        // 1 Iron Man | 2 Spider Man | 3 Black Widow
        let result_avenger = min_max(ironMan, spiderMan, blackWidow);
        let id_avenger = result_avenger.id;
        
        await connection('surveys').insert({
            question_1,
            question_2,
            question_3,
            question_4,
            question_5,
            id_avenger,
            id_user
        });

        // Trigger Survey Realized
        let html = `<div>Result: ${result_avenger.nameAvenger}</div>`;
        emailTrigger.main(html, email).catch(console.error);
        
        return response.status(200).json({msg: 'Survey realized sucessfully!', "result": { "avenger": result_avenger.nameAvenger }})
    }
}
