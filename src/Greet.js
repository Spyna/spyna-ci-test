import Logger from "./util/Logger";

const logger = new Logger();
export default function Greet(name) {
  logger.log("going to greet " + name);
  return `Hello ${name}`;
}
