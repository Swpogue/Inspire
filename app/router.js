import { ClockController } from "./controllers/ClockController.js";
import { PicturesController } from "./controllers/PicturesController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";

export const router = [
  {
    path: '',
    controller: [TodosController, WeatherController, PicturesController, ClockController, QuoteController ]
  },
  ]