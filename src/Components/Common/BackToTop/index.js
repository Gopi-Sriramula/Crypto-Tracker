import { ArrowUpwardRounded } from "@mui/icons-material";
import "./style.css";
function BackToTop() {
  let mybutton = document.getElementsByClassName("back-to-top-btn")[0];
  if (mybutton) {
    window.onscroll = function () {
      scrollFunction();
    };
  }
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div
      className="back-to-top-btn"
      id="myBtn"
      onClick={() => {
        topFunction();
      }}
    >
      <ArrowUpwardRounded />
    </div>
  );
}

export default BackToTop;
