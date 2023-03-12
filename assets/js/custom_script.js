$("#wizard-pic").on("click",(e)=>{
        e.preventDefault();
       let browsImg= $("#wizard-picture").click();
       browsImg.on("change",(e)=>{
        $("#wizardPicturePreview").attr("src","https://mqtech25.github.io/portfolio/img/mqtech.png");
        $("#wizardPicturePreview").css("background-color","var(--primary-color)")
        $("#wizardPicturePreview").css("border-radius","10px")
       })
})