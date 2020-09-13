import translations from "./src/i18n/en.json";
import { config } from "@vue/test-utils";

config.mocks["$t"] = msg => translations[msg] || msg;
