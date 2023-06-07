const IntroPage = () => {
  return (
    <div className="profile-page">
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url("https://www.dillichalise.com.np/assets/images/intro.jpg")`,
          }}
        />
        <div className="container">
          <div className="content-center">
            <div className="cc-profile-image">
              <a href="#">
                <img
                  src="https://www.dillichalise.com.np/assets/images/dillichalise.jpg"
                  alt="Profile"
                />
              </a>
            </div>
            <div className="h2 title">Dilli Raj Chalise</div>
            <p className="category text-white">Web Developer</p>
            <a className="btn btn-primary mr-2" href="#contact">
              Contact Me
            </a>
            <a
              className="btn btn-primary"
              href="https://drive.google.com/file/d/1L2JnV9XsHb1YTzzPorhwLwkyBHtCIEGF/view"
              target="_blank"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
