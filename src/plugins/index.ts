import EventPlugin from "./event/plugin";
import HashPlugin from "./hash/plugin";
import { Root } from "./lib";
import Navigation from "./navigation/plugin";

export default class Plugins extends Navigation(HashPlugin(EventPlugin(Root))) {}