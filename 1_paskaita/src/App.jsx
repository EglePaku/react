const App = () => {
  return (
    <wrapper>
      {/* Header */}
      <header>
        <img className="sitelogo" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"></img>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Header Image */}
      <img className="header-image" src="https://live-production.wcms.abc-cdn.net.au/205418e0355d297e8755322306cef091?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=144&width=862&height=485"></img>

      {/* Features */}
      <div className="features">

        <div className="features-item">
          <h2>About</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>

        <div className="features-item">
          <h2>Company</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>

        <div className="features-item">
          <h2>Services</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
        {/* End Features */}
      </div>

      {/* Content */}
      <div className="content-wrap">
        {/* Main Content */}
        <div className="content">
          <h2>Content</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          <h3>Sub Header</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
        {/* Aside */}
        <aside>
          <h2>Navigation</h2>
          <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </aside>
        {/* End Content */}
      </div>

    </wrapper>


  );
};

export default App;