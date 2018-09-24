


$(document).ready(function() {

        $("#inp_1").on('keyup',function(e) {
        if(e.which==55) {
            $('#num7').text('7');
            $('#num7').removeClass('colorBg2');
            $('#inp_1').toggleClass('colorBg3');
            $('.svg2').animate({'opacity':'1'},100) ;
            $('#inp_2').animate({'opacity':'1'},100) ;
        }
            //$('#in3').addClass('colorBg2');}
            else{
      $('#num7').addClass('colorBg2');
      $('#inp_1').addClass('colorBg');
            };
            
    } ); 
    
    $("#inp_2").on('keyup',function(e) {
        if(e.which==52) {
            
            $('#num4').text('4');
            $('#num4').removeClass('colorBg2');
            $('#inp_2').toggleClass('colorBg3');
            $('#num_res').fadeOut(10) ;
            $('#inp_3').animate({'opacity':'1'},10)  ;
        }else{
            $('#num4').addClass('colorBg2');
            $('#inp_2').addClass('colorBg');
            
        };
        });
    
    $("#inp_3").on('keyup',function(e) {
        if(e.which==49) {
            $('#inp_3').text('1');
            $('#inp_3').toggleClass('colorBg3');
            
           
            
        }else{
            
            $('#inp_3').addClass('colorBg');
            
        };
        });
   
});
