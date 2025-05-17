import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Icon from './components/Icon'

function App() {

  return (
    <div>
      <Header />
      <h1>hello world</h1>

      <Card title="anri" content="anris uyvars rugby"/>
      <Card title="anfsafasri" content="anris uyvfsaffffffffffffffffars rugby"/>
      <Card />
      <Icon
       src="https://media.gettyimages.com/id/1446629309/photo/argentina-v-australia-round-of-16-fifa-world-cup-qatar-2022.jpg?b=1&s=594x594&w=0&k=20&c=62wT0Z00Y-1qws1eYBSxj_CVcaPHMJJQIVuPkFajQUY="
       username="Giorgi Sanadiradze"
       />
    </div>
  )
}

export default App
