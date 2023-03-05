/* CSS files add styling rules to your content */
body {
  background-color:#21222c;
  margin: 0cm;
  
  font-family: 'Noto Sans', sans-serif;
}
p{
  color:white;
}

h1,h2,h3,h4,h5{
  font-family: 'Fjalla One', sans-serif;
  color:white;
}
.nav-link {
  color: white;
  
}
.cover {
  height:400px;
  background-image:url(https://cdn.glitch.global/fc70fe01-09d6-457c-8944-c9bc568ee60d/Sin%20t%C3%ADtulo3.jpg?v=1676525676922);
  color:white;
  background-size: cover;
  background-position: center;
  background-color: rgba(0,0,0,0.3);
  background-blend-mode: darken;
}

.cover-small {
  height:200px;
  background-blend-mode:normal;
}

.card {
  border: 0 !important;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}

.card-body{
  height:160px;
    background-color:#21222c;
}

.card-title {
  color:white;
  min-height:3rem
}

.card-text{
  color:white;
  min-height:10rem
}


.responsive-iframe {
  position:relative;
  padding-top:56.25%
}

.responsive-iframe iframe{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;

}
.stripe-container, .slider-container{
  display:flex;
  
}


.stripe-container .card{
  width:300px;
  flex-shrink:0;
}


.product-stripe, .slider{
  overflow-x:scroll;
  padding-top:1rem;
}

.slider{
  overflow-x:hidden;
}

.slider-container {
  transform:translateX(0);
  animation: slider 12s infinite;
}
.image-container{
  width:100%;
  padding-top:56.25%;
  background-size:cover;
  background-position:center;
  flex-shrink:0;
}

@keyframes slider{
  
  0%{
    transform:translateX(0);

  }
  20%{
    transform:translateX(0);
  }
  25%{
    transform:translateX(-100%);
  }
  45%{
    transform:translate(-100%)
  }  
  50%{
    transform:translateX(-200%);
    }
  70%{
    transform:translate(-200%)
  }
  75%{
    transform:translateX(-300%)  
    }
  95%{
    transform:translateX(-300%)
  }
  100%{
    transform:translateX(0);
  }
}