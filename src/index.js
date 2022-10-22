import "./assets/css/style.css";

import Controller from "./controllers/controller";

const app = new Controller();

app.initializeView();
app.run(app.model, app.view);
