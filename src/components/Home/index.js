// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div>
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is prat of the daily air and it does not quite help that ist
          changes all the time.Clothes have always been a maker of the era and
          we are in a revolution. Your fashion makes you been seend and heard
          that way you are .So ,celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that your noticed"
      />
    </div>
  </div>
)

export default Home
