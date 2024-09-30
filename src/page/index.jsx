import { useEffect } from "react"
// import a from './a'
// import papaya from './index'
// console.log(a);
// import './'
const params = {
  // "images": ["images/mni152.nii.gz"],
  // "worldSpace": true,
  // "showControls": true
};
window.onload = function () {
  window.papaya.Container.resetViewer(0, params);
  // document.getElementById('papayaContainer').addEventListener('mouseenter', function () {
  //   document.body.style.overflow = 'hidden';
  // });
  // document.getElementById('papayaContainer').addEventListener('mouseleave', function () {
  //   document.body.style.overflow = 'hidden';
  // });
}
const home = () => {
  // useEffect(() => {
  //   console.log(123);

  //   // const papaya = window.papaya
  //   // console.log(papaya);
  //   // setTimeout(()=>{
  //     console.log(document.getElementById('papayaContainer'));

  //     papaya.Container.resetViewer(0,params);
  //   document.getElementById('papayaContainer').addEventListener('mouseenter', function () {
  //     document.body.style.overflow = 'hidden';
  //   });
  //   document.getElementById('papayaContainer').addEventListener('mouseleave', function () {
  //     document.body.style.overflow = 'hidden';
  //   });
  //   // },1000)

  // })
  return <>
    <div style={{ width: '50vw', height: '50vh' }}>
      <div id="papayaContainer" data-params="params"></div>
    </div>

  </>
}
export default home