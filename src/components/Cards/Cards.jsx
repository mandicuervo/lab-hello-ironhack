
function Cards({ title, description, image }) {
    return ( 
        <div className='Cards'>
            <img src={ image } alt='icon' width='50px'/>
            <h5>{ title }</h5>
            <p>{ description }</p>
        </div>
     );
}

export default Cards;