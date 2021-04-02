import { Component } from "react";
import "./Homepage.css";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import axios from 'axios'



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      nextIcon: <span className="next-icon"></span>,
      prevIcon: <span className="prev-icon"></span>,
    };
  }

  render() {
    const {nextIcon,prevIcon}=this.state;
    return (
      <div className="homePage">
        <section className="colored-section" id="title">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="big-heading">YOU ARE NOT BUYING A HOUSE, </h1>
                <h1 className="big-heading">YOU ARE BUYING A LIFESTYLE. </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="white-section" id="white-section">
          <div className="housesIntro">
            <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
              <Carousel.Item>
                <img className="headerImg" src={house1} alt="First House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>360 Michawashkode St, Ottawa, Ontario K4A 3N6</h3>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house2} alt="Second House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>6865 PEBBLE TRAIL WAY, Ottawa, Ontario K4P 0B7</h3>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house3} alt="Third House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>5284 Knott Crescent, Ottawa, Ontario K4M 0A2</h3>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section class="colored-section" id="contact">
          <div className="container-fluid">
            <div className="contactIntro">
              <h2 className="heading-1">Contact Us</h2>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="formhelper row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={this.state.firstname}
                      onChange={this.onFirstNameChange.bind(this)}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={this.state.lastname}
                      onChange={this.onLastNameChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </div>
                <div className="buttonhelper">
                  <button type="submit" className="button-1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ firstname: '', lastname: '', email: '', message: '' })
  }
}

export default Homepage;