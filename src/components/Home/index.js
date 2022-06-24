import "./index.scss"
import Logo from "../../assets/images/logo-b.png"

const Home = () => {
  return (
    <div className="container homepage">
      <div className="textzone">
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="Dev" />
          rae
        </h1>
        <h2>Frontend Developer</h2>
      </div>
    </div>
  )
}
export default Home
