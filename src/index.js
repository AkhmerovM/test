// 'https://randomuser.me/api/'
(async function() {
     const pr1 = new Promise((resolve, reject) => {
         setTimeout(resolve, 1000, 'one');
     });
     const pr2 = new Promise((resolve, reject) => {
         setTimeout(reject, 500, 'two');
     });
     Promise.race([pr1, pr2]).then((response) => {
         console.log(response);
     });
})();
