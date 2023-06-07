const EducationComponent = () => {
  return (
    <div id="education" className="container mt-4">
      <div className="h4 text-center mb-4 title">Education</div>
      <div className="card mb-0">
        <div className="row">
          <div className="col-md-3 bg-primary">
            <div className="card-body education-header">
              <p>2014 - 2018</p>
              <div className="h5">Bachelor's Degree</div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <div className="h5">Bachelor of Engineering</div>
              <h4 className="category">Kathmandu Engineering College</h4>
              <ul>
                <li>Completed B.E in Computer Engineering.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-0">
        <div className="row">
          <div className="col-md-3 bg-primary">
            <div className="card-body education-header">
              <p>2012 - 2014</p>
              <div className="h5">Higher Secondary School</div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <div className="h5">Higher Secondary</div>
              <h4 className="category">GoldenGate International College</h4>
              <ul>
                <li>
                  The High School was mainly focus on the bases of Physics,
                  Mathematics and Chemistry.
                </li>
                <li>
                  There was also a good base on Physics, Mathematics and
                  Chemistry.
                </li>
                <li>Completed High School.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-0">
        <div className="row">
          <div className="col-md-3 bg-primary">
            <div className="card-body education-header">
              <p>2000 - 2012</p>
              <div className="h5">Secondary School</div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <div className="h5">Secondary School</div>
              <h4 className="category">Baljyoti English Boarding School</h4>
              <ul>
                <li>
                  The Secondary School aims at Maths, Science, English, Social
                  Studies and Nepali.
                </li>

                <li>Completed Secondary School.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
