import cardinfo from  './data/cardinfo.json'
import Card from './Card';

function Grid() {
    return (
        <>
        <div id="work-id" className="title"><h1>Work</h1></div>
        <div className="cards">
           
            {cardinfo.map((item) => (
              <Card key={item.id} item={item} />
                  ))}
        </div>
        </>
    )
}

export default Grid
