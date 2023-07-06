import { useEffect } from "react";
import $ from 'jquery';
import DropMenu from "./DropMenu";
import Preloader from './Preloader';
import Main from "./Main";

function App() {

  useEffect(() => {
    $('.content, .header, #gradient-background, .footer').hide()
    $('#gradient-background, .header').delay(3500).fadeIn()
    $('.content, .footer').delay(4200).fadeIn()


    $('#preloader').delay(3000).fadeOut()
    $('.allContent').fadeIn(3100, function () {
      $('body').addClass('overflowClass')
      $(this).removeClass('allContent')
    })

    $(window).on('scroll', function () {
      $('.header').toggleClass('sticky-header', window.scrollY > 0)
      $('#gradient-background').toggleClass('sticky-gradient', window.scrollY > 0)
      $('.content').toggleClass('content-padding', window.scrollY > 0)
    })
  })

  return (
    <div>
      <Preloader />
      <DropMenu />
      <Main />
    </div>
  );
}

export default App;
