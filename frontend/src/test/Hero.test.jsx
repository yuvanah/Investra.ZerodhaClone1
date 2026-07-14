import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Hero from "../landing_page/home/Hero";

describe("Hero component", () => {

    test("renders hero image", () => {

        render(<Hero />);

        const heroImage = screen.getByAltText("Hero Image");

        expect(heroImage).toBeInTheDocument();

        expect(heroImage.getAttribute("src"))
            .toContain("media/images/");

    });


   

});