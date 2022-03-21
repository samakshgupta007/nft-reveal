import './App.css';
import './styles/output.css'

const imageUrls = [
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/5366526/pexels-photo-5366526.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
]

const revealNft = (i) => {
  setTimeout(function () {
    document.getElementById('img' + i).classList.remove('blurry');
    document.getElementById('img' + i).classList.add('blurry-5');
    setTimeout(function () {
      document.getElementById('img' + i).classList.remove('blurry-5');
      document.getElementById('img' + i).classList.add('blurry-4');
      setTimeout(function () {
        document.getElementById('img' + i).classList.remove('blurry-4');
        document.getElementById('img' + i).classList.add('blurry-3');
        setTimeout(function () {
          document.getElementById('img' + i).classList.remove('blurry-3');
          document.getElementById('img' + i).classList.add('blurry-2');
          setTimeout(function () {
            document.getElementById('img' + i).classList.remove('blurry-2');
            document.getElementById('img' + i).classList.add('blurry-1');
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  }, 300);
}


function App() {
  return (
    <div className="flex justify-center items-start flex-col">
      <img src="https://brama-group.com/wp-content/uploads/2017/09/frame_logo_gif.gif" alt="" style ={{ width: '30%' }}/>
      <div style = {{ top: '50%' }} className="absolute flex justify-around">
        {imageUrls.map((el, i) => {
          return (
            <div key={i} style ={{ width: '20%', border: '3px solid black' }} className="tooltip" onClick = {() => revealNft(i)}>
              <img src = {el} alt="" className='blurry' id = {'img' + i}/>
              <span className="tooltiptext">CLICK TO REVEAL</span>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
