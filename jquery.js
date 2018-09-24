//$(document).ready(function() {

       // $('#inp_1').keyup(function(e){

         // if (e.which == 55) {
//            $('#inp_1').addClass('colorBg');

  //        }else{
    //        $('#inp_1').removeClass('colorBg2');

      //    };


//$(document).ready(function() {
//keyup() - работает при отпускании нажатой кнопки
//$(document).keyup(function(){
//if ('#inp_1' == 68) { $('#inp_1').addClass("colorBg"); } });


//$(document).keyup(function(e) {
//if (e.which == 55) { 
  //  $("#inp_1").addClass("colorBg2"); 
    
//}else{
            //$('#inp_1').addClass('colorBg');

//};
    //$("#inp_1").on('keyup',function(e) {
 
    //$("#inp_1").removeClass("colorBg2"); 
    

            //$('#in2').text( $(this).val());    
    
   // $('#inp_1').on('mouseleave',function() {
                    
     //   $('#inp_1').addClass('colorBg3')
                                   
       // } ); 


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
            // $('#an2').on('click',function(){
       //$('.svg2').animate({'opacity':'1'},2000) ;
         







           //alert('привет');}
            
            //$('#inp_1').text('7');
        //$('.in2').addClass('#in2');
         
        
        //else{
      //$('#inp_1').addClass('colorBg');}
    

    //$('.anim').on('click',function() {
     //   $('.anim').animate({'height':'10px'},400);
    //});




























//$(document).ready(function() {
   //var a='#inp_1';
  
    //if('#inp_1'==3){
        
      //$('#inp_1').addClass('colorBg')  
    //};
    
    
    
    
    //$('#inp_1').on('mouseenter',function() {
       // var inputt=('#inp_1'),
           // inputt=7;
        //if('inputt'==true); {
          //  alert('верно')
       // };
                    
      //$('path').toggleClass('colorBg')
                                   //} );       
                                    
                //  });