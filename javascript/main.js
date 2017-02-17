/* CURRENTLY IN: javascript/main.js */
(function() {

  const requireParam = () => {
		throw new Error('This is a required parameter!')
	};



    const get =  (url)=>{

      // let endpoint = 'https://api.spotify.com/v1/search';
      // endpoint+='?q=' + q
      // endpoint+='&type=' + type
      // console.log(get)
      //
        return new Promise(function(resolve, reject) {

            const http = new XMLHttpRequest();
            http.open('GET', url, true);


            http.onload = () => {
                const isReady = http.readyState === 4;
                const isDone = http.status === 200;
                if (isReady && isDone) {
                  const data = JSON.parse(http.responseText);
                    resolve(data);
                    // data.searchTerm = q;
                } else {
                    reject(http.statusText);
                }
                http.onerror = function() {
                    reject(http.statusText);
                };

            }
            http.send();
        });
    };

const promise = get('https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345');
  promise.then(function(data){
    console.log(data)
  })







    const input = document.querySelector(".js-search");
    const menu = document.querySelector(".js-menu");
    menu.addEventListener('click', (e) => {
        $('.ui.labeled.icon.sidebar')
            .sidebar('toggle');
    });
    input.addEventListener('keydown',(e)=> {
      if(e.keyCode===13||e.which===13){
        console.log(e);
      }
    });






})();
