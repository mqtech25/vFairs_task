$("#wizard-pic").on("click", (e) => {
  e.preventDefault();
  let browsImg = $("#wizard-picture").click();
  browsImg.on("change", (e) => {
    console.log();
    $("#wizardPicturePreview").attr(
      "src",
      URL.createObjectURL(browsImg[0].files[0])
    );
    $("#wizardPicturePreview").css("background-color", "var(--primary-color)");
    $("#wizardPicturePreview").css("border-radius", "10px");
  });
});
