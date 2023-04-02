import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "../../Loader";

const Bootcamp = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(5);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumOfPeopleChange = (event) => {
    setNumOfPeople(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle form submission
    console.log("Full Name:", fullName);
    console.log("Email Address:", email);
    console.log("Number of People:", numOfPeople);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Message:", message);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container" style={{ marginTop: "82px" }}>
      <h1 className="m-5 text-center fw-bold">BOOTCAMP</h1>
      <div className="row my-5">
        <div className="col-md-6 bg-secondary p-5">
          <br /> <br />
          <h3 className="text-primary fw-bold mb-3">EN QUOI ÇA CONSISTE ?</h3>
          <p className="lh-lg fw-light fs-5">
            Home of Gaming propose la formule de bootcamp pour que vous puissiez
            privatiser la salle et vous réunir afin de jouer ou vous <br />{" "}
            entraîner dans un cadre unique! <br />
          </p>
          <h3 className="text-primary fw-bold mb-3 mt-4">
            QU'EST CE QUI EST COMPRIS ?
          </h3>
          <h5 className="lh-lg fs-4">
            En réservant vous aurez droit à : <br />
          </h5>
          <p className="lh-lg fw-light fs-5">
            • L'accès exclusif à l'HOG pour vous et vos amis
            <br />
            • L'accès aux 10 PC haut de gamme & aux 2 salons consoles PS5
            <br />• La possibilité de manger sur place sans rien prévoir
            (livraison de snacks).
          </p>
          <h3 className="text-primary fw-bold mb-3 mt-4">COMBIEN ÇA COÛTE ?</h3>
          <p className="lh-lg fw-light fs-5">Le tarif est de :</p>
          <ul className="lh-lg fw-light fs-5">
            <li>
              40Dh par personne pour un bootcamp de 3h. <br /> (10 - 15
              personnes).
            </li>
            <li>
              80Dh par personne pour un bootcamp de 3h. <br /> (6 - 9
              personnes).
            </li>
            <li>
              100Dh par personne pour un bootcamp de 3h. <br /> (5 personnes).
            </li>
          </ul>
        </div>

        <div className="col-md-5 ms-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="fullName">
                Nom et prénom: <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                placeholder="Entrez votre nom et prénom"
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="email">
                Address Email: <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Entrez votre adresse email"
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="numOfPeople">Nombre de personnes:</label>
              <input
                type="range"
                min="5"
                max="15"
                className="form-range"
                id="numOfPeople"
                value={numOfPeople}
                onChange={handleNumOfPeopleChange}
                required
              />
              <div>{numOfPeople} personnes</div>
            </div>

            <div className="form-group my-3">
              <label htmlFor="date">
                Date: <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="time">
                Heure: <span className="text-danger">*</span>
              </label>
              <input
                type="time"
                className="form-control"
                id="time"
                value={time}
                onChange={handleTimeChange}
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                value={message}
                onChange={handleMessageChange}
              />
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
