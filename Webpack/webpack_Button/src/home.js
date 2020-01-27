import $ from "jquery";
import "./css/test.scss";
import perfil from "./images/Foto.jpg";
import Botao from "./components/botao/index.js";

$(function() {
  let botao = new Botao();
  botao.setTitle("Testador");
  botao.setClick(e => alert("eeeeeeee"));

  $(".area").html(botao.render());
});
