import React, { Component } from 'react'
import s from './Hero.module.css'
import PropTypes from 'prop-types'
class Hero extends Component {
  state = { destination: '', data: '', price: '' }
  handleChange(e) {}
  handleSubmit(e) {
    e.preventDefault()
    let destination = e.currentTarget.destination.value
    let data = e.target.elements.date.value
    let price = e.target.elements.price.value
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ destination, checkIn: data, priceRange: price })
  }
  render() {
    const { title } = this.props
    const { handleChange, handleSubmit } = this
    return (
      <>
        <section className={s.hero}>
          <h1 className={s.heroTitle}>{title}</h1>
          <button type="button" className={s.tripButton}>
            Plan Your Trip
          </button>
        </section>
        <div className={s.allForm}>
          <div className={s.slider}>
            <button type="button" className={s.leftBut}></button>
            <button type="button" className={s.rightBut}></button>
            <p className={s.numb}>03</p>
          </div>
          <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.qlabel}>
              <p className={s.label}>destinations</p>
              <select name="destination" onChange={handleChange}>
                <option value="Arab Egypt">Arab Egypt</option>
                <option value="France">France</option>
              </select>
            </label>
            <label className={s.qlabel}>
              <p className={s.label}>Check In</p>
              <input type="date" name="date" onChange={handleChange}></input>
            </label>
            <label className={s.qlabel}>
              <p className={s.label}>Price Range</p>
              <select name="price" id="" onChange={handleChange}>
                <option value="0-$500">0-$500</option>
                <option value="500-$1000">500-$1000</option>
                <option value="1000-$1500">1000-$1500</option>
              </select>
            </label>
            <button className={s.subBut}>Discover Now</button>
          </form>
        </div>
      </>
    )
  }
}
Hero.defaultProps = {
  title: 'default Title',
}
Hero.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Hero
