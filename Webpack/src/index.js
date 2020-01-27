import $ from "jquery";
import "./css/style.css";
import CameraGallery from "./images/Captura de tela de 2019-12-31 18-24-18.png";

$(function() {
  alert("Estou OK!");
});

$("#botao").on("click", function() {
  $("h1").html("Olá mundo!");
  $(this).addClass("botao");
  $("#imagem").attr("src", CameraGallery);
});
