import React, { Component } from 'react'
import styles from './styles.module.css'
export class CountdownTimer extends Component {
  constructor() {
    super()
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
    this.calculateTimeLeft = this.calculateTimeLeft.bind(this)
  }

  calculateTimeLeft() {
    const difference = +new Date(this.props.tillDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  componentDidMount() {
    setInterval(() => {
      const timeLeft = this.calculateTimeLeft()
      this.setState({
        days: timeLeft.days,
        hours: timeLeft.hours,
        minutes: timeLeft.minutes,
        seconds: timeLeft.seconds
      })
    }, 1000)
  }

  render() {
    return (
      <div className='container'>
        <ul>
          <li>
            <span>{this.state.days}</span>
            days
          </li>
          <li>
            <span>{this.state.hours}</span>
            Hours
          </li>
          <li>
            <span>{this.state.minutes}</span>
            Minutes
          </li>
          <li>
            <span>{this.state.seconds}</span>
            Seconds
          </li>
        </ul>
      </div>
    )
  }
}

export default CountdownTimer
