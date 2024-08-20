let users=[{"id":1,"name":"Garrett","email":"gdensie0@census.gov","gender":"Male"},
    {"id":2,"name":"Lemmy","email":"lbasketter1@thetimes.co.uk","gender":"Male"},
    {"id":3,"name":"Keelby","email":"kbrislan2@howstuffworks.com","gender":"Male"},
    {"id":4,"name":"Nerti","email":"nfarley3@whitehouse.gov","gender":"Female"},
    {"id":5,"name":"Con","email":"cwarrington4@ustream.tv","gender":"Male"},
    {"id":6,"name":"Quintin","email":"qreboulet5@posterous.com","gender":"Male"},
    {"id":7,"name":"Melisse","email":"mdebruijne6@freewebs.com","gender":"Female"},
    {"id":8,"name":"Herbert","email":"hida7@wiley.com","gender":"Male"},
    {"id":9,"name":"Hilliary","email":"hradnage8@seattletimes.com","gender":"Female"},
    {"id":10,"name":"Maible","email":"mmeugens9@biglobe.ne.jp","gender":"Female"},
    {"id":11,"name":"Blanca","email":"bivakhnoa@state.gov","gender":"Female"},
    {"id":12,"name":"Jae","email":"jswalwelb@cnet.com","gender":"Polygender"},
    {"id":13,"name":"Nevil","email":"nhearnamanc@discovery.com","gender":"Male"},
    {"id":14,"name":"Barris","email":"bgebhardtd@simplemachines.org","gender":"Male"},
    {"id":15,"name":"Karney","email":"kreilinge@gov.uk","gender":"Polygender"},
    {"id":16,"name":"Avril","email":"alawf@live.com","gender":"Female"},
    {"id":17,"name":"Eliot","email":"edorseyg@hatena.ne.jp","gender":"Male"},
    {"id":18,"name":"Erskine","email":"erosenzwigh@virginia.edu","gender":"Male"},
    {"id":19,"name":"Iris","email":"ifrosselli@army.mil","gender":"Female"},
    {"id":20,"name":"Onfroi","email":"ohastyj@tmall.com","gender":"Male"},
    {"id":21,"name":"Thatch","email":"tanscottk@scribd.com","gender":"Male"},
    {"id":22,"name":"Karlen","email":"ksaffilll@desdev.cn","gender":"Female"},
    {"id":23,"name":"Rodney","email":"rtitfordm@squidoo.com","gender":"Male"},
    {"id":24,"name":"Guinna","email":"goverelln@cocolog-nifty.com","gender":"Female"},
    {"id":25,"name":"Noll","email":"ncowlamo@huffingtonpost.com","gender":"Bigender"},
    {"id":26,"name":"Lorry","email":"lmcilwraithp@ed.gov","gender":"Female"},
    {"id":27,"name":"Annetta","email":"ashuardq@un.org","gender":"Bigender"},
    {"id":28,"name":"Chere","email":"cfreeberner@bing.com","gender":"Female"},
    {"id":29,"name":"Robinett","email":"rhovers@webeden.co.uk","gender":"Female"},
    {"id":30,"name":"Krishnah","email":"kkingshottt@freewebs.com","gender":"Male"},
    {"id":31,"name":"Oates","email":"oasalsu@cisco.com","gender":"Male"},
    {"id":32,"name":"Stuart","email":"sdanielsohnv@about.me","gender":"Male"},
    {"id":33,"name":"Michele","email":"mungerechtsw@disqus.com","gender":"Female"},
    {"id":34,"name":"Daloris","email":"dskentelberyx@dion.ne.jp","gender":"Female"},
    {"id":35,"name":"Boigie","email":"blinnity@ibm.com","gender":"Genderqueer"},
    {"id":36,"name":"Janos","email":"jhansemannz@whitehouse.gov","gender":"Agender"},
    {"id":37,"name":"Nevins","email":"nkinchin10@arstechnica.com","gender":"Male"},
    {"id":38,"name":"Kyle","email":"kboxe11@posterous.com","gender":"Female"},
    {"id":39,"name":"Karlis","email":"kseago12@techcrunch.com","gender":"Male"},
    {"id":40,"name":"Brody","email":"ballix13@networkadvertising.org","gender":"Male"},
    {"id":41,"name":"Philis","email":"pferrea14@sogou.com","gender":"Female"},
    {"id":42,"name":"Germain","email":"gmoreby15@flavors.me","gender":"Male"},
    {"id":43,"name":"Haily","email":"hdeverall16@w3.org","gender":"Non-binary"},
    {"id":44,"name":"Guntar","email":"gheinlein17@yale.edu","gender":"Male"},
    {"id":45,"name":"Marcellina","email":"mkeynes18@wsj.com","gender":"Female"},
    {"id":46,"name":"Tracee","email":"thankard19@flickr.com","gender":"Female"},
    {"id":47,"name":"Ilise","email":"itort1a@nature.com","gender":"Female"},
    {"id":48,"name":"Krispin","email":"krouff1b@ft.com","gender":"Male"},
    {"id":49,"name":"Gerty","email":"gwhitehall1c@furl.net","gender":"Female"},
    {"id":50,"name":"Elvis","email":"eblamphin1d@de.vu","gender":"Male"}]

    function display_data(){
       //alert("test case 123")
       let rows=""
       for (user of users) {
        rows=rows+`
        <tr> 
        <td>${user.id}</td> 
        <td>${user.name}</td> 
        <td>${user.email}</td> 
        <td>${user.gender}</td> 
        
        </tr>`
       
       }
       document.getElementById('table_data').innerHTML=rows
       //document.getElementById('table_data').innerHTML="GM"
    }





    