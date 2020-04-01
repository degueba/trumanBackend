const emailTrigger = require('../triggers/email');

module.exports = {
    async abandoned(request, response){
        let html = `<div>Are you still there?
                        <h1>Looks like your survey was abandoned, do you wanna continue ?</h1>
                        <a>Click here</a>
                    </div>`;
        emailTrigger.main(html).catch('Erro to send email');

        return response.status(204).json({});
    }
}