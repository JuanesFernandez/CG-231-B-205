var Ecubo1= false;
var Ecubo2= false;
var Ecubo3= false;
var Nivel21= false;
var Nivel22= false;
var Nivel3= false;
var Alinear=false;
var tam=1

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);

camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 5;

camera.rotation.set(0, 0, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cubo 1
var geometry = new THREE.BoxGeometry( tam , tam, tam );
var material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
var cube = new THREE.Mesh( geometry, material );

//cubo 2
var geometry2 = new THREE.BoxGeometry( tam/2 , tam/2, tam/2 );
var material2 = new THREE.MeshBasicMaterial( {color: 0x001FFF} );
var cube2 = new THREE.Mesh( geometry2, material2 );

// cubo 3
var geometry3 = new THREE.BoxGeometry( tam/4 , tam/4, tam/4 );
var material3 = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
var cube3 = new THREE.Mesh( geometry3, material3 );


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 150;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//scene.add(cube)




document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
      case 39: // Flecha derecha
      //Escena 1
      if(Ecubo1==false){
      scene.add( cube );
      Ecubo1=true;}
      else{

        if(Ecubo1==true && Ecubo2==false){
          cube.translateX(tam/2);
          Ecubo2=true;
          scene.add( cube );
          scene.add( cube2 );
        }else{

          if(Ecubo1==true && Ecubo2==true && Ecubo3==false){
            cube.translateY(tam/2);
            cube2.translateY(tam-tam/4);
            Ecubo3=true;
            scene.add(cube3)
            scene.add( cube2 );
            scene.add( cube );
          }else{

            if(Ecubo3==true && Ecubo2==true && Nivel21==false)
            {
              cube.translateZ(tam/2);
              cube2.translateX(tam/2);
              cube3.translateY(tam+tam/8);
              Nivel21=true;
              scene.add( cube );
              scene.add( cube2 );
              scene.add(cube3)
            }else{

              if(Nivel21==true && Ecubo3==true && Nivel22==false )
              {
                cube2.translateY(tam/2);
                cube3.translateX(tam/2);
                Nivel22=true;
                scene.add( cube2 );
                scene.add(cube3)
              }else{

                if(Nivel22==true && Nivel21==true && Nivel3==false)
                {
                  cube2.translateZ(tam/2);
                  cube3.translateY(tam/2);
                  Nivel3=true;
                  scene.add( cube2 );
                  scene.add(cube3)
                }else{

                  if(Nivel3==true && Nivel22==true && Alinear==false){

                    cube3.translateZ(tam/2);

                    scene.add(cube3)
                    Alinear=true;
                  }else{

                    if(Alinear==true)
                    {
                      scene.remove(cube);
                      scene.remove(cube2);
                      scene.remove(cube3);
                      Alinear=false;
                      Ecubo1=false;
                      Ecubo2=false;
                      Ecubo3=false;
                      Nivel21=false;
                      Nivel22=false;
                      Nivel3=false;
                      cube.translateX(-tam/2);
                      cube.translateY(-tam/2);
                      cube2.translateY(-tam+tam/4);
                      cube.translateZ(-tam/2);
                      cube2.translateX(-tam/2);
                      cube3.translateY(-tam-tam/8);
                      cube2.translateY(-tam/2);
                       cube3.translateX(-tam/2);
                       cube2.translateZ(-tam/2);
                  cube3.translateY(-tam/2);
                  cube3.translateZ(-tam/2);
                  
                    }
                  }
                }
              }
            }
          }
        }
      }

      break;
      
  }
});
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();