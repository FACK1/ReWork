import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import Checkbox from '../Shared/Checkbox';
import Spinner from '../Shared/Spinner';

import { ThanksText, CheckboxContainer, BottomContainer } from './feedback.style';

class Feedback extends Component {
  state = {
    options: [
      { text: 'Donate to Charity', checked: false },
      { text: 'Sell on eBay', checked: false },
      { text: 'Swap', checked: false },
      { text: 'Repair', checked: false },
    ],
    prevFeedback: [],
    currentFeedback: [],
    loading: true,
  };

  updateOptions = (feedbacks) => {
    const { options } = this.state;
    feedbacks.map((feedback) => {
      options.map((option, i) => {
        if (feedback === option.text) {
          options[i].checked = true;
        }
      });
    });
    this.setState({ options });
  };

  handleCheckboxChange = (event) => {
    const { options } = this.state;
    options.map((option, i) => {
      if (option.text === event.target.name) {
        options[i] = { text: event.target.name, checked: event.target.checked };
        this.setState({ options });
      }
    });
  };

  render() {
    const { options, loading } = this.state;

    return (
      <React.Fragment>
        <Title />
        <Header title="What do you want to do with your items?" />
        {!loading && (
          <CheckboxContainer>
            {options.map((option, i) => (
              <Checkbox
                key={`${i}abc`}
                name={option.text}
                checked={option.checked}
                onChange={this.handleCheckboxChange}
              />
            ))}
          </CheckboxContainer>
        )}
        {loading && <Spinner />}
        <BottomContainer>
          <ThanksText>
            Thanks for your commitment to a more sustainable world!
            <span role="img"> 🎉</span>
          </ThanksText>
          <Button />
          <GButton title="CONTINUE" onClick={this.updateAirtaleFeedback} />
          <Footer />
        </BottomContainer>
      </React.Fragment>
    );
  }
}

export default Feedback;
