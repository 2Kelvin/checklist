const Content = () => {
    const handlePlanetChange = () => {
        const planets = ["Mars", "Earth", "Venus", "Jupiter"];
        const planetIndex = Math.floor(Math.random() * 4);
        return planets[planetIndex];
    };

    const handleClick = () => console.log("You clicked me");
    const handleNameClick = planet => console.log(`You clicked ${planet}`);
    const handleEventClick = e => console.log(e.target.innerText);
    const handleDoubleClicks = () => console.log("You double clicked me, yes?");

    return (
        <main>
            <p onDoubleClick={handleDoubleClicks}>
            Welcome to {handlePlanetChange()}
            </p>
            <br></br>
            <button onClick={handleClick}>Click Me</button>
            <br></br>
            <button onClick={() => handleNameClick("Venus")}>Name Planet</button>
            <br></br>
            <button onClick={(e) => handleEventClick(e)}>So Eventful</button>
        </main>
    );
}

export default Content;