// import '../helpers/common.helper.js'
import {f} from "../helpers/common.helper"
import {Controller} from "./controller/Controller";
import {Model} from "./models/Model";
import {ViewForm} from "./view/ViewForm";

const app = new Controller(new Model(), new ViewForm());
