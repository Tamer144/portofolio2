$(function(){



    fadeInSlide = (obj)=>{
        obj.animate({
            opacity : 1,
            margin : 0
        } , 1000)

    }

    fadeInSlideAbsoloute = (obj , left , right , opacity , time) => {
        let animations = {};

        if(right != null && left != null && opacity != null){
            animations['left'] = left;
            animations['right'] = right;
            animations['opacity'] = opacity
        } else if(right != null && left == null && opacity != null){
            animations['right'] = right;
            animations['opacity'] = opacity
        } else if(right == null && left != null && opacity != null){
            animations['left'] = left;
            animations['opacity'] = opacity
        } else{
            return
        }
        obj.animate(animations , time)
    }



    fadeInSlide($('.nav-bar-list').eq(0));
    fadeInSlideAbsoloute($('.my-name').eq(0) , '7.4%' , null , 1 , 1000)
    if(screen.width >= 1150){
        fadeInSlideAbsoloute($('header > q').eq(0) , '9%' , null , 1 , 1000 )
        fadeInSlideAbsoloute($('header > q').eq(1) , '21%' , null , 1 , 1000)
    } else{
        fadeInSlideAbsoloute($('header > q').eq(0) , '6%' , null , 1 , 1000 )
        fadeInSlideAbsoloute($('header > q').eq(1) , '19%' , null , 1 , 1000)
    }



    var waypoint = new Waypoint({
        element: document.getElementsByClassName('information-section')[0],
        handler: (direction)=>{
            fadeInSlideAbsoloute($('.card1-1').eq(0) , '8%' , null , 1 , 1000);
            fadeInSlideAbsoloute($('.card1-2').eq(0) , null , '7%' , 1 , 1000);
        }
    })

    var waypoint1 = new Waypoint({
        element: document.getElementsByClassName('information-section')[1],
        handler: (direction)=>{
            fadeInSlideAbsoloute($('.card2-1').eq(0) , null , '40%' , 1 , 1000);
            fadeInSlideAbsoloute($('.card2-2').eq(0) , null , '10%' , 1 , 1000);
        }
    })


    var waypoint2 = new Waypoint({
        element: document.getElementsByClassName('information-section')[2],
        handler: (direction)=>{
            $('.skill-card').each(( i , val )=>{
                    $(val).animate({
                        opacity : 1
                    } , 1000);
            })
        }
    })

    const sendEmail = ()=>{

        const from_name = document.getElementById('name').value;
        const massage = document.getElementById('massage').value;
        const email = document.getElementById('email').value;

        var templateParams = {
            from_name: from_name,
            to_name: "tamer fakhoury",
            message: massage,
            reply_to : email,
            notes: 'New Email from your webpage'
        };
        if(from_name != '' && massage != ''  && email != ''){
            emailjs.send('service_eoae30c', 'template_mhzbgxm', templateParams)
                .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('submit').innerText = 'Thanks!';
                }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('submit').innerText = 'Wrong thing!!';
                });
        } else{
            document.getElementById('submit').innerText = 'Wrong thing!!';
        }
    }
     document.getElementById('submit').addEventListener('click' , sendEmail)


})