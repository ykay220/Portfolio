

function Card(props) {
    const { item } = props;
    return (
      <div className="container">
            <div className="card">
                <div className="card__image">
                    <img src={item.image} alt="" />
                </div>
        <div className="absolute-title">
            <h2>{item.name}</h2>
        </div>

            <div className="showonhover">
                <div className="show-content">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident, quos eius doloremque odio culpa sapiente? Explicabo eius facere ipsa ullam eos voluptatem, dicta voluptas, commodi similique inventore deserunt necessitatibus.

                        <div className="button-wrap">
                            <a href="https://www.google.com/">CODE</a>
                            <a href="https://www.instagram.com/">LIVE</a>
                        </div>

                </div>
               
                </div>
            </div>
       </div>
    )
}

export default Card


