const About = () => {
  return (
    <section id="about" class="about scrollspy">
    <div className="container">
      <div className="row">
        <h3 className="center light grey-text text-darken-3">About Us</h3>
        <div className="col m6 light">
          <h5>What is ctrlX AUTOMATION?</h5>
          <p>ctrlX AUTOMATION surmounts the classic boundaries between machine controls, the IT world and the Internet of Things. With the real-time capable operating system Linux, consistently open standards, app programming technology, web-based engineering and a comprehensive IoT connection, ctrlX AUTOMATION reduces components and engineering costs by 30 to 50%.</p>
        </div>
        <div className="col m6 light">
          <p>Consistent openness in hardware and software</p>
          <div className="progress">
              <div className="determinate blue" style={{width: "100%"}}></div>
          </div>
          <p>Partners contribute hardware and software solutions</p>
          <div className="progress">
              <div className="determinate blue" style={{width: "100%"}}></div>
          </div>
          <p>App and IoT technology</p>
          <div className="progress">
              <div className="determinate blue" style={{width: "100%"}}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );

}

export default About;