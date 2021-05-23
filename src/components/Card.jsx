

function Card(props) {
    const { item } = props;
    return (
      <div className="container">
            <div className="card">
                <div className="card-image">
                    <img src={item.image} alt="" />
                </div>
            </div>  
            <div className="showonhover">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident, quos eius doloremque odio culpa sapiente? Explicabo eius facere ipsa ullam eos voluptatem, dicta voluptas, commodi similique inventore deserunt necessitatibus.

                <div className="button-wrap">
                    <button>CODE</button>
                    <button>SEE IT LIVE</button>
                </div>
            </div>
       </div>
    )
}

export default Card


