$(document).ready(function()
{
   $(".item").hover(function()
   {
       $(".description", this).fadeIn();
   },
   function()
   {
       $(".description", this).fadeOut();
   })
    .dragstart(function(evt)
    {
        evt.dataTransfer.setData("text", $(this).attr("id"));
        $("#info_moving").fadeIn();
    }).dragend(function(evt)
    {
        $("#info_moving").fadeOut();
    });
    
    var default_color = $("#basket_container").css("background-color");
    
    $("#basket_container").dragover(function(evt)
    {
        evt.preventDefault();
        $(this).css("background-color", "teal");
        
    }).dragleave(function(evt){
        $(this).css("background-color", default_color);
    }).drop(function(evt)
    {
        evt.preventDefault();
        $(this).css("background-color", default_color);
        var id_tshirt = evt.dataTransfer.getData("text");
        
        
        var name = $("#"+id_tshirt+" .name").text();
        var price = $("#"+id_tshirt+" .price").text();
        
    var li = "<li class='product_in_basket'><b>"+name+"</b><span class='price_in_basket'>"+price+" zł</span></li>";
    $("#shopping_basket").append(li);
    
    var sum = 0;
    $("#shopping_basket .price_in_basket").each(function()
    {
        sum += parseFloat($(this).text());
    });
    
    $("#price span").text(sum.toFixed(2));
    });
   
})