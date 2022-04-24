import { Config } from "../config.js";

describe("config.js property initial setting", () => {
    it("now", () => {
        const config = new Config();
        expect(config.now).not.toBeUndefined();
    });

    it("impact", () => {
        const config = new Config();
        expect(config.impact).toBe(0.1);
    });

    it("numberOfLimitReflection", () => {
        const config = new Config();
        expect(config.numberOfLimitReflection).toBe(1);
    });

    it("brightness", () => {
        const config = new Config();
        expect(config.brightness).not.toBeUndefined();
    });
});