const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const gradient = require('gradient-string') 
const rs = require('readline-sync');

const GoStumble = (auth) => new Promise((resolve, reject) => {

    fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(gradient('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')(`
                Duplicator Crown Only
        By : Eskey#8004 - Credit : @dkmpostor
    `));

    const auth = '{"DeviceId":"5ef8a667ba90ce08ae8703bfd75d01dc","GoogleId":"","FacebookId":"","Token":"FamZEIcNjvMqK1s5lizaPVnuMyFDnycw","Timestamp":1655763765,"Hash":"9d480078a8ae6284eaa3cd2e5279deb6fcc7f5dc"}'
    console.log('');

    while (true) {

        const result = await GoStumble(auth);
        if (!result) {

            console.log(gradient('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')(`\r[ ${moment().format('HH:mm:ss')} ] Code Auth sudah Expired!`));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
            
            console.log(gradient('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')(`\r[ ${moment().format('HH:mm:ss')} ] Trophy : ${trophy} | Crown : ${crown}`));
            
        } else if (result == 'BANNED') {
            console.log(gradient('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')(`\r[ ${moment().format('HH:mm:ss')} ] 🌈Akun terkena Banned ! 🏳️‍🌈`));
            break;
        }
    }
    

})();
