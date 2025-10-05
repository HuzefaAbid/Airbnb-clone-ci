const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    filename: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
      set: v =>
        v === ''
          ? 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
          : v
    }
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String
  },
  country: {
    type: String
  }
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
