
import './App.css'
import AirbnbHeader from './components/AirbnbHeader'
import Cards from './components/Cards'
import PhotoGrid from './components/PhotoGrid'
import data from './components/data'

function App() {
const cards=data.map(item=>{
  return( 
    <Cards
    key={item.id}
    coverImg={item.coverImg}
    title={item.title}
    description={item.description}
    price={item.price}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    openSpots={item.openSpots}
    imageText={item.imageText}
    />
  )
})
  return (
    <>
    <AirbnbHeader/>
    <PhotoGrid/>
   <div className='bottom'> {cards}</div>
    </>
  )
}

export default App
