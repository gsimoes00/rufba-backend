const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

// MenuItem e basicamente FoodItem com disponibilidade
// faz sempre parte de um cardapio, esses e que tem referencia pra
// FoodItem e podem estar duplicados

const MenuItemSchema = new mongoose.Schema({

  menu: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Menu',
  },
  foodItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodItem',
    require: true,
  },
  availability: {
    type: Boolean,
    require: true,
    default: true,
  },

});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
