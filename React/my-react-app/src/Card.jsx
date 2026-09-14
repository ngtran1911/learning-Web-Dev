import mycat from './assets/mycat.png'
function Card(){
    return(
        <div className="card">
            <img className='cardImage' src={mycat} alt="profile picture" />
            <h2 className='cardTitle'>Cute cat </h2>
            <p> Cat Learning React</p>
        </div>
    );
}
export default Card