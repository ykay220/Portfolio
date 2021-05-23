import cardinfo from  './data/cardinfo.json'
import Card from './Card';

function Grid() {
    return (
        <div className="cards">
            {cardinfo.map((item) => (
              <Card key={item.id} item={item} />
                  ))}
        </div>
    )
}

export default Grid
