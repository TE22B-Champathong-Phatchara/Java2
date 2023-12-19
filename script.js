var bildIndex = 0;
    var img_array  = document.querySelectorAll('img');
    console.log(img_array);
    var bilder = [
        "img/album1.jpg",
        "img/album2.jpg",
        "img/album3.jpg",
        "img/album4.jpg",
        "img/album5.jpg",
        "img/album6.jpg",
        "img/album7.jpg",
        "img/album8.jpg",
        "img/album9.jpg"

    ];

    let bild_index_array= [0, 1, 2, 3, 4, 5, 6, 7, 8];

    function flyttaVaster() {
        
        for( let i =0; i<img_array.length; i++)
        {
            console.log(bild_index_array[i]+ "src: "+bilder[bild_index_array[i]] );

            img_array[i].setAttribute("src",bilder[bild_index_array[i]] )
            bild_index_array[i]++;
            if( bild_index_array[i]>8)
            {
                bild_index_array[i]=0;
            }

        }
        
    }
    
    function flyttaHoger() {

    
        
        for (let i = 0; i < img_array.length; i++) {
            console.log(bild_index_array[i] + " src: " + bilder[bild_index_array[i]]);
    
            img_array[i].setAttribute("src", bilder[bild_index_array[i]]);
            bild_index_array[i]--;
            if (bild_index_array[i] < 0) {
                bild_index_array[i] = bild_index_array.length - 1; 
            }
    
        }
    }