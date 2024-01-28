import "./Home.css";
function Home() {
    function handlleClick(e) {
      e.preventDefault();
      window.location.replace('/signup');
    }
    return (
        <>
          <section id="home">
            <h1>ResQAI</h1>
            <h2><b>AI Powered Disaster Management System</b></h2>
            <button id="button3" onClick={handlleClick}>Get Started</button>
          </section>
        </>
    );

}

export default Home;